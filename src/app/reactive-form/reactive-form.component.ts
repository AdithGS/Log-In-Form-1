import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { TodoService } from '../todo.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})


export class ReactiveFormComponent implements OnInit {
  posts: any;
  formInput: any;

  formComplete = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)], Validators.pattern["^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"]),
    confirmPassword: new FormControl('', Validators.minLength(6)),
    dateOfBirth: new FormControl(''),

  }, this.passwordMatchValidator);







  constructor(private todo: TodoService, private api: ApiService) { }

  signUp(formComplete) {
    console.log(this.formComplete.value)
    //  this.todo.addNew(this.formComplete.value)
    //     this.api.sinupPosts(this.formComplete.value).subscribe((res:any)=>{
    //   console.log("aaaaaaaaaaaaaa",res ); 
    let data={
      name:this.formComplete.value.firstName,
      email:this.formComplete.value.email,
      password:this.formComplete.value.password
    }

    this.formInput = this.formComplete.value;
    this.api.sinupPosts(data ).subscribe((response: any) => {
      console.log(response);
    });

  }

  get f() {
    return this.formComplete.controls;
  }


  passwordMatchValidator(formComplete: FormGroup) {
    return formComplete.get('password').value === formComplete.get('confirmPassword').value
      ? null : { 'mismatch': true };
  }

  model: NgbDateStruct;

  ngOnInit() {
    this.getTest()

  }

  getTest() {

    this.api.getPosts().subscribe((res: any) => {
      console.log("aaaaaaaaaaaaaa", res);
    })
  }





}
