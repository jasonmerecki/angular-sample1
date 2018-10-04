import { Component } from '@angular/core';

@Component({
  selector: 'app-rooty',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoArray=[];
  addTodo(value:string){
    this.todoArray.push(value)
    // console.log(this.todoArray);
  }
  deleteItem(todo:string) {
    console.log("delete item " + todo)
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo== this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
  }
  // submit Form
  todoSubmit(value:any){
    console.log(value);
    if(value!==""){
      this.todoArray.push(value.todo)
      //this.todoForm.reset()
    }else{
      alert('Field required **')
    }
  }
}
