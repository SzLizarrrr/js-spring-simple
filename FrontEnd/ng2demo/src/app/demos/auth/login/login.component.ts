import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  response;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.authService.checklogin()
      .subscribe((res) => {
        this.response = res;
        console.log(res);
        if(res.success){
          this.router.navigate(['/']);
        }
      });
  }

  login(user) {
    this.authService.login(user)
      .subscribe((res) => {
        this.response = res;
        if(res.success){
          // this.router.navigate(['/']);
        }
      });
  }

  getProducts() {
    this.authService.getProducts()
      .subscribe(res => {
        console.log(res);
        this.response = res;
      });
  }

  getOrders() {
    this.authService.getOrders()
      .subscribe(res => {
        console.log(res);
        this.response = res;
      });
  }

  getUsers() {
    this.authService.getUsers()
      .subscribe(res => {
        console.log(res);
        this.response = res;
      });
  }

}
