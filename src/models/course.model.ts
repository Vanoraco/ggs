import { Schema, model } from "mongoose";

export interface Course {
    courseDesImg: string;
    courseDesText: string;
    courseCategory: string;
    courseNewCat: string;
    courseTitle: string;
    courseDuration: string;
    courseAccess: string;
    courseCurriculum: string[][];
    courseFaq: string[];
    courseAnnouncement: string;
    courseVideoNums: number;
    courseLevel: string;
}

export const CourseSchema = new Schema<Course>(
    {
        courseDesImg: {type: String, required: true},
        courseDesText: {type: String, required: true},
        courseCategory: {type: String, required: true},
        courseNewCat: {type: String, required: true},
        courseTitle: {type: String, required: true},
        courseDuration: {type: String, required: true},
        courseAccess: {type: String, required: true},
        courseCurriculum: {type: [[String]], required: true},
        courseFaq: {type: [String], required: true},
        courseAnnouncement: {type: String, required: true},
        courseLevel: {type: String, required: true},

    }, {

        toJSON: {
            virtuals: true
        },

        toObject: {
            virtuals: true
        },
        
        timestamps: true
        
    }
)

export const CourseModel = model<Course>('course', CourseSchema)