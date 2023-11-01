import { Injectable } from "@angular/core";
import { Teacher } from "../shared/models/Teachers";
import { sample_teacher } from "src/data";


@Injectable({
    providedIn: 'root'
}) 

export class TeacherService {

    constructor() {}

    getAll(): Teacher[] {
        return sample_teacher;
    }
}