import { Component } from '@angular/core';
import Api from './api';
import { Login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Api]
})
export class AppComponent {
  login: Login = new Login();

  constructor(private api: Api) {
  }

  submit(login: Login) {
    this.api.login(login).subscribe(
      () => alert("OK"),
      error => {
        console.log(error);
        alert("Failed");
      }
    );
  }
}
