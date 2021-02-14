import dbconnect from "../../../mongoose/mongoose";
import form from "../../../mongoose/models/form";
import mongoose from "mongoose";

dbconnect();

export default async (req, res) => {
	const { method } = req;
	switch (method) {
		case "POST":
			try {
				const newform = await form({
					_id: new mongoose.Types.ObjectId(),
					tools: req.body,
				});
				newform.save().then((data) => {
					res.json(data._id);
					res.end();
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
