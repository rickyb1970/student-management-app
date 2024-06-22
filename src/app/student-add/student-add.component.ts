// src/app/student-add/student-add.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
 selector: 'app-student-add',
 templateUrl: './student-add.component.html',
 styleUrls: ['./student-add.component.css']
})

export class StudentAddComponent implements OnInit{
 colleges = [];
 programs = [];

 routeData: any;

 ngOnInit(): void {
   this.activatedroute.data.subscribe(data => {
      this.routeData = data;
      console.log(this.routeData);
   });
 }

 studentForm: FormGroup;

 constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private activatedroute: ActivatedRoute
 ) {
    this.studentForm = this.fb.group({
    studentFirstName: ['', Validators.required],
    studentLastName: ['', Validators.required],
    studentCollege: [this.colleges, Validators.required],
    studentProgram: [this.programs, Validators.required],
    studentYear: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
 }

 submitForm(): void {
    if (this.studentForm.valid) {
          this.studentService.addStudent(this.studentForm.value);
          this.router.navigate(['/students']);
    }
 }

 cancel(): void {
    this.router.navigate(['/students']);
 }
}
