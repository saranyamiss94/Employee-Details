import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styles: [ ]
})
export class StudentListComponent implements OnInit  {

  studentList: Student[];
  editUserForm: boolean;
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
	    this.editUserForm = true;
	    this.router.navigate(['/student-add', this.editedUser])
	  }
}
