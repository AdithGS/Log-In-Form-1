import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(){ }

 


  public  todoList=[
    {id:"1",task:"Sample data"},
    {id:"2",task:"Test data"},
    {id:"3",task:"Sample data,sample"},
    {id:"4",task:"Test,Sample data"},
 

  ];



  public  rform=[
    {firstName:"Abi",lastName:"K",email:"abik@gmail.com",dateOfBirth:"29/11/1997"},
    {firstName:"Rahul",lastName:"K",email:"rahulk@gmail.com",dateOfBirth:"18/11/1998"},
    {firstName:"Anu",lastName:"M",email:"anumk@gmail.com",dateOfBirth:"29/11/1999"},
    {firstName:"Adith",lastName:"Gs",email:"adithgs@gmail.com",dateOfBirth:"29/11/2000"},
  ]

  length(){
    return this.todoList.length
  }

  getAll(){
    return this.todoList;
  }

  // addNew(data:any){
  //   this.todoList.push(data)
  // }
  addNew(data:any){
    this.rform.push(data);
  }

}
