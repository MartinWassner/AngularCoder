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

  constructor(private readonly dialogService: MatDialog) {}

  addStudent() {
    this.dialogService.open(AddStudentModalComponent)
  }
}


