// src/app/student-list/student-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../studentl.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  addStudent() {
    this.router.navigate(['/add-student']);
  }

  editStudent(studentNumber: number) {
    this.router.navigate(['/edit-student', studentNumber]);
  }

  viewStudent(studentNumber: number) {
    this.router.navigate(['/student-detail', studentNumber]);
  }

  deleteStudent(studentNumber: number) {
    this.studentService.deleteStudent(studentNumber);
    this.students = this.studentService.getStudents();
  }
}
