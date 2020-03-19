import { Component, OnInit } from '@angular/core';
import { FormControl, Form } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Todo } from 'src/app/shared/models/todo';
import { TodosService } from '../services/todos.service';
import {Router,  ActivatedRoute} from "@angular/router"



@Component({
  selector: 'app-display-todos',
  templateUrl: './display-todos.component.html',
  styleUrls: ['./display-todos.component.css']
})
export class DisplayTodosComponent implements OnInit {
   //set todos and supply them to the todo component
   public todos:Todo[];
   public todosLength:number
   public todoToAdd:Todo;
   public pull:boolean = false;
   theTodoTodo:string;

   todoDetails = new FormControl("");

   private todosRoute='http://localhost:3000/todos'

  constructor(
     private router:Router,
     private activatedRoute:ActivatedRoute,
     private http :HttpClient,
     private todosService :TodosService
  ) { }

   onGetTodos(){
      console.log('On Get Todos Called')
      this.http.get<Todo[]>(this.todosRoute).subscribe(todos => {
         this.todos = todos;
         this.todosLength = todos.length
         console.log('todos', this.todos)
      })
   }

   onTodoToDelete( todoIdToDelete:number ){
      let decision = confirm(`Parent Component: Deleting the todo with id ${todoIdToDelete}`)
      if(decision) {
            this.http.delete(`http://localhost:3000/todos/${todoIdToDelete}`).subscribe( () => {
               console.log("Todo Removed")
               this.onGetTodos();
            });
         }
   };

   onTodoToEdit( todoIdToEdit:number ){
      
         this.router.navigateByUrl('/edit');

   }

   onAddTodo( todo:Todo) {

        let weekday = new Array(7);
           weekday[0] = "Sunday";
           weekday[1] = "Monday";
           weekday[2] = "Tuesday";
           weekday[3] = "Wednesday";
           weekday[4] = "Thursday";
           weekday[5] = "Friday";
           weekday[6] = "Saturday";

        let month = new Array(11);
        month[0] = 'Jan';  month[6] = 'Jul';
        month[1] =  'Feb';  month[7] = 'Aug';
        month[2] = 'Mar';  month[8] = 'Sep';
        month[3] = 'Apr';  month[9] = 'Oct';
        month[4] = 'May';  month[10] ='Nov';
        month[5] = 'Jun';   month[11] = 'Dec';

        //construct new Date object
        let date = new Date();
        let Year = date.getFullYear();
        let Day = date.getDate();
        let Month = month[date.getMonth()];
        let DayOfWeek = weekday[date.getDay()];
        let _createdDate = `${Day}-${Month}-${Year}`;

        //construct new todo object
        let newTodo = {
           id: `${new Date()}-${_createdDate}`,
           todo: todo,
           createdDate: _createdDate
        }
        console.log('newtodo', newTodo)
        //make the calll
           this.http.post(this.todosRoute, newTodo).subscribe(_newTodo => {
             console.log('Todo Added');
             console.log('_newTodo', _newTodo)
             this.onGetTodos()
           })
            this.theTodoTodo = null;

   }

   ngOnInit() :void {
        console.log('Todos Display Has Been Loaded')
        this.onGetTodos()
        console.log('pull', this.pull)
  }
}
