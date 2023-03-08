import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { GetJsonService } from '../../services/get-json.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName = sessionStorage.username;
  userData: User[];
  userLogged: User | undefined;

  constructor(private dataUSer: GetJsonService, private router: Router) { }

  ngOnInit(): void {}

  submitUsername(usernameSubmitted: string){
    sessionStorage.setItem("username", usernameSubmitted);
    this.dataUSer.getUsers().subscribe((data) => {
      if (!this.existUser(usernameSubmitted, data)) {        
        this.router.navigate(['/login']);
      }else{
        this.router.navigate(['/main']);
      }
    });
  }

  existUser(userName: string, userData: User[]) {
    var userSubmitted = userData.find(element => element.username == userName);
    return userSubmitted;
  }

}
