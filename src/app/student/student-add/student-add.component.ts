import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentService } from './../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student-interface';


@Component({
  selector: 'student-add',
  templateUrl: './student-add.component.html',
  styles: [ ]
})
export class StudentAddComponent implements OnInit  {
  student: Student;
  studentList: Student[];
  studentForm: FormGroup;
  isEdit: Boolean = false;
  editUserForm: boolean;
  editedUser: any = {};
  msg:String = '';
  
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  ngOnInit(){
    this.editedUser = this.student;
    this.studentList = this.studentService.getStudents();
    this.studentForm = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    })
      this.route.params.subscribe(param => {
        console.log(param)
        if(param && param.id){
          let student = this.studentService.getStudent(param.id);
          if(student){
            this.student = this.studentService.getStudent(param.id);
            this.studentForm.setValue(student);
            this.isEdit = true;
            }
          else this.router.navigate(['/'])
        }
      })
      this.editedUser = this.student;
  }

  resetForm(){
    this.studentForm.reset();
  }

  updateUser(student: Student) {
      const index = this.studentList.findIndex(u => student.id === u.id);
      this.studentList[index] = student;
      this.editUserForm = false;
    }

  add(){
    if(this.studentForm.valid){
      this.studentService.studentList.push(this.studentForm.value);
      this.resetForm();
      }
      else {
      this.msg = 'Please complete form'
    }
  }

}
