import dbconnect from "../../../mongoose/mongoose";
import form from "../../../mongoose/models/form";
dbconnect();

export default async (req, res) => {
	const { method } = req;
	switch (method) {
		case "GET":
			try {
				const data = await form.find({});
				if (data) {
					res.status(200).json(data);
				}
			} catch (error) {
				res.status(400).json({ sucees: false });
			}
			break;

		default:
			break;
	}
};
