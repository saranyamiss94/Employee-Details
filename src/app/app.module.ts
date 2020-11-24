import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StudentService } from './student/student.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const appRoutes: Routes = [
  { path: 'student-add', component: StudentAddComponent },
  {
    path: '',
    component: StudentListComponent
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports:      [ 
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
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
