import mongoose, { Schema } from "mongoose";

const projectNoteSchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,  // take id of the object
        ref: "User", // when we take refrence of another document 
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true

    },
    content: {
        type: "String",
        required: true
    }

},
    { timestamps: true });


export const ProjectNote = mongoose.model("ProjectNote", projectNoteSchema)


