import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'repository', component: RepoComponent },
  { path: '', redirectTo:"/user", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
