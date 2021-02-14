import dbconnect from "../../../mongoose/mongoose";
import form from "../../../mongoose/models/form";
dbconnect();

export default async (req, res) => {
	const { method, query } = req;
	switch (method) {
		case "GET":
			try {
				await form.findById(query.id).then((data) => {
					res.json([...data.tools]);
				});
			} catch (error) {
				res.status(400).json({ error });
				res.end();
			}
			break;
		case "POST":
			try {
				form
					.update(
						{ _id: query.id },
						{ $set: { tools: [...req.body.task_data] } }
					)
					.exec()
					.then((newform) => {
						res.json([...newform.tools]);
					});
			} catch (error) {
				console.log(error);
				res.status(400).json({ sucees: false });
			}
			break;

		default:
			break;
	}
};
