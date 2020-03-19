import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { TodosService } from '../services/todos.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

   todoForm :FormGroup;
   Todo :any
   TodoDate :any;
   TodoId :string;

   constructor(
      private router :Router,
      private route :ActivatedRoute,
      private todosService :TodosService,
      private http :HttpClient
   ) { }

   saveTodo(formValues){

      //cal api to save data to out fake DB
      this.todosService.updateTodo(this.TodoId, formValues.value)
  
   }
  

   cancel(){
      this.router.navigateByUrl('/todos')
   }


   ngOnInit(): void {
      console.log('Edit Todo')
      this.route.paramMap.subscribe(params => {
         
         this.TodoId= params.get('id');

         this.todosService.getTodoById(this.TodoId).subscribe( t => {

               this.todoForm = new FormGroup({
                  Todo: new FormControl(t['todo']),
                  TodoDate: new FormControl(t['createdDate'])
               })
     
      })});
            
   }

}
