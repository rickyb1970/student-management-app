import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-management-app';

    colleges = [
    'School of Computer Studies',
    'School of Business and Management',
    'School of Arts and Sciences',
    'School of Engineering',
    'School of Allied Medical Sciences'
    ];

    programs = [
    'Bachelor of Science in Computer Science',
    'Bachelor of Science in Information Technology',
    'Bachelor of Science in Game Development'
    ];
}
