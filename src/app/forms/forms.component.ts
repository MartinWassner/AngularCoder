import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
// import { FormsComponent } from './forms.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{

  public formularioPrincipal: FormGroup;
  public formularioSecundario: FormGroup;


  constructor(private fb: FormBuilder){}
  
  ngOnInit(): void{
    this.formularioPrincipal = this.fb.group({
      nombre: [''],
      email: ['', [Validators.required, Validators.email]],
  });
  this.formularioSecundario = new FormGroup({
    nombre: new FormControl()
  })
  }

  submit() : void {
    console.log(this.formularioPrincipal.value),
    console.log(this.formularioPrincipal.valid)
  }
}
