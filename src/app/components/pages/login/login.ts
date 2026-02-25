import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['' , [Validators.required, Validators.email]],

      password: ['' , [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/)
      ]]
    });
  }

  onSubmit(){
    if(this.loginForm.valid) {
      console.log('Form geçerli, giriş yapılabilir:' , this.loginForm.value);
    }else {
      console.log('Form hatalı, kurallara uyulmamış.');
      this.loginForm.markAllAsTouched();
    }
  }

}
