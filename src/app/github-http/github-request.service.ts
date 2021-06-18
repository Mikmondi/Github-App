import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Repository } from '../repository';
import { User } from '../user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  user:User;
  repository: Repository[]
  gitUrl = 'https://api.github.com/users/';
  apiKey=`?access_tokens='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'`

   constructor(private http: HttpClient) {
     this.user = new User("", "", "", 0, 0, 0, new Date)
     this.repository = []
   }
   userRequest(textsearch:string){
     interface ApiResponse{
       avatar_url:string;
       name:string;
       login:string;
       public_repos:number
       followers:number;
       following:number;
       created_at:Date
     }
     let promise = new Promise<void>((resolve,reject)=>{
         this.http.get<ApiResponse>(this.gitUrl+textsearch+this.apiKey).toPromise().then(response=>{
         this.user.avatar_url = response.avatar_url
         this.user.name =response.name
         this.user.login=response.login
         this.user. public_repos = response. public_repos
         this.user.followers=response.followers
         this.user.following=response.following
         this.user.created_at=response.created_at
         resolve()
       },
       error=>{
         
       this.user.avatar_url ="there was an error"
        this.user.followers=0
       reject(error);
       
       })
     })
     return promise
   }
   repoRequest(textsearch:string){
     interface ApiResponse{
       id:number;
       name:string;
        html_url: string;
       description:string;
   }
   let promise = new Promise<void>((resolve,reject)=>{
     this.http.get<ApiResponse[]>(this.gitUrl+textsearch+this.apiKey).toPromise().then(response=>{
       console.log(response[0].id)
      for(let item of response){
        let a=new Repository(item.id,item.name,item.html_url,item.description)
        this.repository.push(a)
      }
      resolve()
     },
     error=>{
       console.log(error);
       
     })
   })
   return promise
 }
 
 }
 