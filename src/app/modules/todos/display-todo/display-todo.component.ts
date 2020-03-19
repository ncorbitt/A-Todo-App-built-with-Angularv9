import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from "@angular/router"
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent implements OnInit {
      @Input() Todo :Todo //create the Todo variable as input
      @Output() todoToDelete:EventEmitter<number> = new EventEmitter() //create the EventEmitter onDelete
      @Output() todoToEdit:EventEmitter<number> = new EventEmitter()

      public todoID:number;

      constructor(private router:Router) {}

      onClickDelete(){
            this.todoToDelete.emit( this.Todo.id )
      }

      onClickEdit(){

            this.router.navigate(['edit',this.Todo.id]);
      }


     ngOnInit(): void {
     }

}
