import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StudentService } from './student/student.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const appRoutes: Routes = [
  { path: 'student-add', component: StudentAddComponent },
  { path: 'student-edit/:id', component: StudentAddComponent },
  {
    path: '',
    redirectTo: 'students', pathMatch: 'full'
  },
  {
    path: 'students', component: StudentListComponent
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports:      [ 
    BrowserModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [ AppComponent, StudentAddComponent,StudentListComponent,PageNotFoundComponent ],
  providers: [StudentService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
