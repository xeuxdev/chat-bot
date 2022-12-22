import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
    question: {
        type: [""],
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
});
export default mongoose.model("Bot", dataSchema);
