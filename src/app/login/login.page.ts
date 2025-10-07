import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class LoginPage{
  user: String = '';
  password: String = '';
  Mensaje: String = '';

  constructor(private router: Router){}
  login(){
    if(this.user === 'admin' && this.password === '123'){
      this.Mensaje = '';
      this.router.navigate(['/home']);
    }else{
      this.Mensaje = 'El usuario o la contraseña es incorrecta, porfavor intente de nuevo';
    }
  }
  

}
