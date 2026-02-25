import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-selection',
  imports: [RouterLink ],
  templateUrl: './register-selection.html',
  styleUrl: './register-selection.css',
})
export class RegisterSelection {
  constructor(private router: Router) {}

  selectRole(role: string){
    if(role === 'Öğrenci') {
      this.router.navigate(['register-student']);
    }else if(role === 'Kulüp'){
      console.log('Kulüp seçildi, kulüp kayıt sayfasına yönlendiriliyor...');
    }
  }
}
