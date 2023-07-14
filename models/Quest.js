import mongoose from "mongoose";

const QuestSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please give the quest a title'],
            maxlength: [60, 'Title cannot be more than 60 characters']
        },
        description: {
            type: String,
            required: [true, 'Please provide a description for this quest'],
            maxlength: [240, 'Description cannot be more than 240 characters']
        }
    }
);

export default mongoose.models.Quest || mongoose.model('Quest', QuestSchema);