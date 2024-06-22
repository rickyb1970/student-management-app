import { Injectable } from '@angular/core';
import { Student } from './studentl.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];
  // private students: Student[] = [
  //   {
  //     studentNumber: 1,
  //     studentFirstName: 'John',
  //     studentLastName: 'Doe',
  //     studentCollege: 'School of Computer Studies',
  //     studentProgram: 'Bachelor of Science in Computer Science',
  //     studentYear: 2
  //   },
  //   {
  //     studentNumber: 2,
  //     studentFirstName: 'Jane',
  //     studentLastName: 'Smith',
  //     studentCollege: 'School of Engineering',
  //     studentProgram: 'Bachelor of Science in Mechanical Engineering',
  //     studentYear: 3
  //   }
  // ];

  addStudent(student: Student): void {
    // Set a new student number based on the current highest number
    student.studentNumber = this.students.length > 0 ? this.students[this.students.length - 1].studentNumber + 1 : 1;
    this.students.push(student);
  }

  getStudents(): Student[] {
    return this.students;
  }

  getStudent(studentNumber: number): Student | undefined {
    return this.students.find(s => s.studentNumber === studentNumber);
  }

  updateStudent(updatedStudent: Student): void {
    const index = this.students.findIndex(s => s.studentNumber === updatedStudent.studentNumber);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }

  deleteStudent(studentNumber: number): void {
    this.students = this.students.filter(s => s.studentNumber !== studentNumber);
  }
}
