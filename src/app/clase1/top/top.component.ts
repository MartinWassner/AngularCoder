import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {

  constructor(private readonly dialog: MatDialog) {

      
  }

 

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
