import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  constructor(private fb: FormBuilder) {
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['']
    },{validator: this.chekPassword} );  
  }

  //{ validator: this.chekPassword }
  ngOnInit(): void {
  }

  registrarUsuario(): void {
    console.log(this.register);
  }

  chekPassword(group: FormGroup): any {   
    const pass = group.controls['password'].value;
    const ConfirmPass = group.controls['ConfirmPassword'].value;
    console.log("PASSWORD",pass);
    return pass === ConfirmPass ? null : { notSame: true };   
  }    
}
