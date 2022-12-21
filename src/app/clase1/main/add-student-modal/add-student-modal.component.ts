import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-student-modal',
  templateUrl: './add-student-modal.component.html',
  styleUrls: ['./add-student-modal.component.css']
})
export class AddStudentModalComponent {
  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');
  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl
  })

  constructor(private readonly dialogRef: DialogRef) {}

  close(){
    this.dialogRef.close()
  }
}
