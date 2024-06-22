import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'add-student', component: StudentAddComponent, data: { colleges: true, programs: true }},
  { path: 'edit-student/:studentNumber', component: StudentEditComponent, data: { colleges: true, programs: true }},
  { path: 'student-detail/:studentNumber', component: StudentDetailComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
