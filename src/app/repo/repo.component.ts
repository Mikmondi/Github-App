import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { GithubRequestService } from '../github-http/github-request.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repository!: Repository[];

  constructor( private repositoryService:GithubRequestService) { }
  reposearch(textsearch: string){
    this. repositoryService.repoRequest(textsearch).then(
      ()=>{
        this.repository=this.repositoryService.repository;

      },
      (error)=>{
        console.log(error)
      }
    )
  }
  ngOnInit(): void {
    this.repositoryService.repoRequest("")
    this.repository = this.repositoryService.repository
  }
}

