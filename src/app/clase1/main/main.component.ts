import { Component } from '@angular/core';
import { Alumno } from '../../models/alumno.model';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentModalComponent } from './add-student-modal/add-student-modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent {
  
  students: Alumno[]=[
    new Alumno(1, 'Julian', 'Álvarez', true),
    new Alumno(2, 'Enzo', 'Fernandez', false),
    new Alumno(3, 'Guido', 'Rodriguez', true),
    new Alumno(4, 'Exequiel', 'Palacios', false),
    new Alumno(5, 'Leandro', 'Paredes', true)
  ]

  displayedColumns = ['id', 'name', 'surname', 'isActive', 'edit', 'delete'];

  constructor(public readonly dialogService: MatDialog) {}

  addStudent() {
    const dialog = this.dialogService.open(AddStudentModalComponent);

    dialog.afterClosed().subscribe((value)=>{
      if (value){
        const lastId = this.students[this.students.length - 1]?.id;
        this.students = [...this.students, new Alumno(lastId + 1, value.firstName, value.lastName, true)];
      }
    })
  }

  deleteStudent(student: Alumno){
    this.students = this.students.filter((stu)=> stu.id !== student.id)  }

  editStudent(student: Alumno){
    const dialog = this.dialogService.open(AddStudentModalComponent, {
      data: student, 
    });

  dialog.afterClosed().subscribe((data) => {
    if(data) {
      this.students = this.students.map((stu) => stu.id === student.id ? {...stu, ...data} : stu) 
    }
  })

  }
}


