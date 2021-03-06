import { Injectable } from '@angular/core';
import { Student } from './student-interface';


@Injectable()
export class StudentService {

  studentList: Student[] = [
    {
      id: '1',
      firstName: 'Durgesh',
      lastName: 'Pal'
    },
    {
      id: '2',
      firstName: 'Ankur',
      lastName: 'Pal'
    }
  ];

  getStudents() {
    return this.studentList;
  }

  getStudent(id) {
    let student: Student;
    this.studentList.map(val=>{
      if(val.id == id) student = val;
    });
    return student;
  }

  deleteStudent(user) {
    this.studentList.splice(this.studentList.indexOf(user), 1);
  }

  update(student) {
    const index = this.studentList.findIndex(u => student.value.id === u.id);
    this.studentList[index] = student.value;
  }

}

