import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: [ './student-details.component.css' ]
})

export class StudentDetailsComponent implements OnInit  {

  studentList: Student[];
  editedUser: any = {};

  constructor(private studentService: StudentService, private router: Router){}

    ngOnInit(){
      this.studentList = this.studentService.getStudents();
    }

    removeUser(student: Student) {
	    this.studentService.deleteStudent(student);
	  }

  	showEditUserForm(student: Student) {
	    this.editedUser = student;
      this.router.navigate(['/student-edit/', student.id]);
	  }

    addUser() {
      this.router.navigate(['/student-add']);
    }
}
