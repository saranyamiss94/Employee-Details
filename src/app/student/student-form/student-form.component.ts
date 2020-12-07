import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from './../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student-interface';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styles: [ ]
})

export class StudentFormComponent implements OnInit  {
  student: Student;
  studentList: Student[];
  studentForm: FormGroup;
  editedUser: any = {};
  submitted = false;
  
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ){}
  
  ngOnInit(){

    this.studentList = this.studentService.getStudents();
    this.validationCheck();
    this.getValueOfStudents();
    this.editedUser = this.student;
  }

  resetForm(){
    this.studentForm.reset();
  }

  updateUser(student: Student) {
    this.studentService.update(student);
  }

  add(){
    this.submitted = true;
    if (this.studentForm.invalid) {
      return;
    }

    this.studentService.studentList.push(this.studentForm.value);
    this.router.navigate(['/']);
  }

  validationCheck() {
    this.studentForm = this.formBuilder.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  getValueOfStudents() {
    this.route.params.subscribe(param => {
      if(param && param.id){
        let student = this.studentService.getStudent(param.id);
        if(student){
          this.student = student;
          this.studentForm.setValue(student);
        }
        else this.router.navigate(['/'])
      }
    })
  }

}
