import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoviewComponent } from './component/todoview/todoview.component';
import { TodoaddComponent } from './component/todoadd/todoadd.component';

const routes: Routes = [
  { path: '', component: TodoviewComponent },
  { path: 'todoadds', component: TodoaddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [TodoviewComponent, TodoaddComponent];
