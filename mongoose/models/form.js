import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	tools: [],
});
module.exports = mongoose.models.form || mongoose.model("form", formSchema);
