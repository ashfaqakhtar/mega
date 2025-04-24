import mongoose, { Schema } from "mongoose";
import { AvailableTaskStatuses, TaskStatusEnum } from "../utils/constants.js"

const taskSchema = new Schema({


    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true,
        // required: [true, "Project ref is required"], // another way to write along with  custom message 
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    assignedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: String,
        enum: AvailableTaskStatuses,
        default: TaskStatusEnum.TODO
    },
    attachments: {
        type: [
            {
                url: String,
                memetype: String, // memetype = .jpg .pmg .webp etc
                size: Number


            }
        ],
        default: [] // empty array 
    }

}, { timestamps: true })


export const Task = mongoose.model("Task", taskSchema)