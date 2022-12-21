import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {

  constructor(public dialog: MatDialog) {
    this.dialog.open(ModalComponent);
      
  }

  ngOnInit(): void{
    
  };

  openDialog(): void{

  }
}
