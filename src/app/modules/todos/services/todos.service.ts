import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todo } from 'src/app/shared/models/todo';
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
   private todosRoute='http://localhost:3000/todos'
   public todos:Todo[];
   public todosLength:number

  constructor(
     private http :HttpClient,
     private router :Router
  ) { }

  getTodos() {
     console.log('Get Todos')
     return this.http.get<Todo[]>(this.todosRoute)
  }

  getTodoById( todoIdToGet ) {
   console.log('Get Todo By Id');
   return this.http.get<Todo[]>(`http://localhost:3000/todos/${todoIdToGet}`);
  }

   updateTodo( id, todo ) {
   console.log('Update todo', id, todo);
   return this.http.put<Todo[]>(`http://localhost:3000/todos/${id}`,{
      id:id,
      todo: todo.Todo,
      createdDate: todo.TodoDate
   }).subscribe(() => {
      this.router.navigateByUrl('/todos');
   })
  }

  deleteTodo(todoIdToDelete){
     this.http.delete(`http://localhost:3000/todos/${todoIdToDelete}`).subscribe( () => {
       console.log("Todo Removed")
     });
  }

   addTodo( todo:Todo) {

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
           id: ++this.todosLength,
           todo: todo,
           createdDate: _createdDate
        }

        //make the calll
        try {
           this.http.post(this.todosRoute, newTodo).subscribe(_newTodo => {
             console.log('Todo Added');
           })
        } catch (error) {
            console.log('An error occured: ', error)
        }

     }

}
