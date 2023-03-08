import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { GetJsonService } from '../../services/get-json.service';
import { merge, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { data } from './data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  fontStyleControl = new FormControl();
  fontStyle: string;

  // dataSize: number = userDataFile.length;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  userName = sessionStorage.username;
  userData: User[];
  userLogged: User | undefined;

  dataName: string;
  dataAge: number;
  dataUsername: string;  
  dataEmail: string;
  dataAbout: string;
  dataComments: Comment[];
  commentsSize: number;
  arrayComments: any;
  thisYear : boolean = false;
  thisMonth : boolean = false;
  all : boolean = false;

  constructor(private dataUSer: GetJsonService, private router: Router) {}
  ngOnInit() {
    //this.linkListToPaginator();
    this.dataUSer.getUsers().subscribe((data) => {
      var currentUser = this.existUser(this.userName, data)
      if (!currentUser) {
        this.router.navigate(['/login']);
      }else{
        this.userLogged = currentUser   
        this.dataName = currentUser.name;
        this.dataAge = currentUser.age;
        this.dataUsername = currentUser.username;
        this.dataEmail = currentUser.email;
        this.dataAbout = currentUser.about;
        this.dataComments = currentUser.comments;
        this.commentsSize = currentUser.comments.length
        this.arrayComments = JSON.parse(JSON.stringify(this.dataComments));
         
        if (this.thisMonth) {
          
        } else {
          
        }
      }
    });
  }

  existUser(userName: string, userData: User[]) {
    var userSubmitted = userData.find(
      (element) => element.username == userName);
    return userSubmitted;
  }

  exitSession(){
    sessionStorage.removeItem("username")
  }

  // linkListToPaginator() {
  //   merge(this.paginator.page)
  //     .pipe(
  //       startWith({}),
  //       switchMap(() => {
  //         return of(this.arrayComments);
  //       })
  //     )
  //     .subscribe(res => {
  //       const from = this.paginator.pageIndex * 10;
  //       const to = from +  10;
  //       this.data = res.slice(from, to);
  //     });
  // }
}
