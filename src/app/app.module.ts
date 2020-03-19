import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './modules/todos/todos.module';
import { TodosService } from './modules/todos/services/todos.service';
import { AboutComponent } from './modules/about/about.component';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule,AppRoutingModule,FormsModule,TodosModule],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }


//exporrt in 