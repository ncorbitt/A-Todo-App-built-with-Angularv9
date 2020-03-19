import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './modules/about/about.component';
import { DisplayTodosComponent } from './modules/todos/display-todos/display-todos.component';
import { EditTodoComponent } from './modules/todos/edit-todo/edit-todo.component';


const routes: Routes = [
   {
      path:'edit/:id',
      component: EditTodoComponent
   },{
      path:'todos',
      component: DisplayTodosComponent
   },{
      path:'about',
      component: AboutComponent
   },{
      path: '',
      redirectTo: 'todos',
      pathMatch: 'full'
   }
];

@NgModule({
  imports: [
     CommonModule,
     RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
