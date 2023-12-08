import { Injectable } from "@angular/core";
import { Teacher } from "../shared/models/Teachers";
import { sample_teacher } from "src/data";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TEACHER_URL } from "../shared/models/constants/urls";


@Injectable({
    providedIn: 'root'
}) 

export class TeacherService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<Teacher[]> {
        return this.http.get<Teacher[]>(TEACHER_URL);
    }
}