import mongoose, { Schema } from "mongoose";

export type TestType = {
    name: string;
    age: number;
    gender: string;
}

const testSchema: Schema<TestType> = new Schema<TestType>({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Others", "Prefer not to say."],
        required: true,
        default: "Prefer not to say."
    }
})

const Test = (mongoose.models.Test as mongoose.Model<TestType>) || (mongoose.model<TestType>("Test", testSchema))
export default Test;