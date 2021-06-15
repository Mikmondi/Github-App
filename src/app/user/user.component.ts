import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GithubRequestService } from '../github-http/github-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
   constructor(private userService:GithubRequestService ) { }
   usersearch(textsearch: string){
     this.userService.userRequest(textsearch).then(
       ()=>{
         this.user=this.userService.user;
 
       },
       (error)=>{
         console.log(error)
       }
     )
   }
   ngOnInit(): void {
     this.userService.userRequest("Mikmondi")
     this.user = this.userService.user
   }
 }
