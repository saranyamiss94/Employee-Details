import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StudentService } from './student/student.service';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';

const appRoutes: Routes = [
  { path: 'student-add', component: StudentFormComponent },
  { path: 'student-edit/:id', component: StudentFormComponent },
  {
    path: '',
    redirectTo: 'students', pathMatch: 'full'
  },
  {
    path: 'students', component: StudentDetailsComponent
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
  declarations: [ 
    AppComponent, 
    StudentFormComponent,
    StudentDetailsComponent,
    PageNotFoundComponent 
  ],
  providers: [StudentService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
