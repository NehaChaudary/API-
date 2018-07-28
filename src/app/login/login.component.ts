import { Component, OnInit } from '@angular/core';
import{UserService}from'../service/user.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
countryName;
country;
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
 showData()
 {
   this.userService.searchByName(this.countryName).subscribe((res)=>{
     this.country=res['body'];
     console.log(this.country);
   })
 }
 showAllData(){
  this.userService.searchAllCountry().subscribe((res)=>{
    this.country=res['body'];
    console.log(this.country);
  })
 }
}
