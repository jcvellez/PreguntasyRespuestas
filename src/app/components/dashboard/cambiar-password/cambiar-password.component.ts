import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {
  cambiarPassword: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.cambiarPassword= this.fb.group({
      passwordAnterior: ['',Validators.required],
      nuevaPassword: ['',[Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    },{validator: this.chekPassword})
  }
    
  ngOnInit(): void {
  }

  chekPassword(group: FormGroup): any {
    
    // const pass = group.controls.password.value;
    // const ConfirmPass= group.controls.ConfirmPassword.value;
    const pass = group.controls['nuevaPassword'].value;
    const ConfirmPass = group.controls['confirmPassword'].value;    
    return pass === ConfirmPass ? null : { notSame: true };   
  }    

  guardarPassword(): void{
    console.log(this.cambiarPassword);
  }
}
