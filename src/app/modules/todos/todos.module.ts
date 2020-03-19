import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DisplayTodosComponent } from './display-todos/display-todos.component';
import { DisplayTodoComponent } from './display-todo/display-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';



@NgModule({
  declarations: [DisplayTodosComponent, DisplayTodoComponent, EditTodoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
],
exports:[DisplayTodosComponent]
})
export class TodosModule { }
