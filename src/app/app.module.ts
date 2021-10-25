import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertTaskComponent } from './insert-task/insert-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  declarations: [AppComponent, InsertTaskComponent, TasksListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  tasks_list: Array<object> = [];
}
