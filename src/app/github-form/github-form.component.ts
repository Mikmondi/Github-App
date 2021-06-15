import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  textsearch!: string;
  @Output()emittextsearch=new EventEmitter<any>()
  constructor() { }
   search(){
     this.emittextsearch.emit(this.textsearch)
   }

  ngOnInit(): void {
  }

}
