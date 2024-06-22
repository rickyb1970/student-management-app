// src/app/student-detail/student-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../studentl.model';
@Component({
 selector: 'app-student-detail',
 templateUrl: './student-detail.component.html',
 styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
 student: Student | undefined;
 constructor(
 private route: ActivatedRoute,
 private studentService: StudentService
 ) { }
 ngOnInit(): void {
 const studentNumber =
+this.route.snapshot.paramMap.get('studentNumber')!;
 this.student = this.studentService.getStudent(studentNumber);
 }
}
