import { Component, OnInit } from '@angular/core';
import { alumno } from '../../models/alumno.model';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent{
  public alumnos: alumno[] = [
    new alumno(1, 'Maria', true, 'Lopez', 19),
    new alumno(2, 'Juan', false, 'Perez', 16),
    new alumno(3, 'Carlos', false, 'Obo', 24)
  ]
}
