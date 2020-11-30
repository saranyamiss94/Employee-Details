import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
    this.studentForm = this.formBuilder.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
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
    this.editedUser = this.student;
  }

  resetForm(){
    this.studentForm.reset();
  }

  updateUser(student: Student) {
      const index = this.studentList.findIndex(u => student.id === u.id);
      this.studentList[index] = student;
    }

  add(){
    this.submitted = true;
    if (this.studentForm.invalid) {
        return;
    }
    this.studentService.studentList.push(this.studentForm.value);
    this.resetForm();
    this.router.navigate(['/']);
  }

}
