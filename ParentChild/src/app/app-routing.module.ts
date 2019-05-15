import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';

const routes: Routes = [
  { path: '', redirectTo : '/ParentComponent' , pathMatch: 'full' },
  { path: 'parent' , component : ParentComponent,
  children :[
  { path: 'child', component: ChildComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }