import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from '../todo.service';
import { Employee } from './Employee';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  closeResult = '';
  // public  todoList=[
  //   {"id":"1","task":"Sample data"},
  //   {"id":"2","task":"Test data"},
  //   {"id":"3","task":"Sample data,sample"},
  //   {"id":"4","task":"Test,Sample data"},


  // ];

  data: string;
  // todo:any=[];
  constructor(private modalService: NgbModal, public todo: TodoService) { }



  public rform = [
    { firstName: "Abi", lastName: "K", email: "abik@gmail.com", dateOfBirth: "29/11/1997" },
    { firstName: "Rahul", lastName: "K", email: "rahulk@gmail.com", dateOfBirth: "18/11/1998" },
    { firstName: "Anu", lastName: "M", email: "anumk@gmail.com", dateOfBirth: "29/11/1999" },
    { firstName: "Adith", lastName: "Gs", email: "adithgs@gmail.com", dateOfBirth: "29/11/2000" },
  ];


  public employees =
    [
      { 'id': '001', 'name': 'Alpha', 'joinDate': '05/17/2015', 'age': 37 },
      { 'id': '002', 'name': 'Bravo', 'joinDate': '03/25/2016', 'age': 27 },
      { 'id': '003', 'name': 'Charlie', 'joinDate': '09/11/2015', 'age': 29 },
      { 'id': '004', 'name': 'Delta', 'joinDate': '09/11/2015', 'age': 19 },
      { 'id': '005', 'name': 'Echo', 'joinDate': '03/09/2014', 'age': 32 }
    ];


  // search = new FormGroup({
  //   search: new FormControl(''),
  // })

  // console.warn("search----", this.todo);



  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  ngOnInit() {
  }



}
