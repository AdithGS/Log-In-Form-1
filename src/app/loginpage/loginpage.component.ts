import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  //  isSubmit = false



  logInForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(4),]),
    // password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])$"
    // )]),
    password: new FormControl('', [Validators.required]),
    // state:new FormControl(''),
    // rememberLoginControl: new FormControl(),

  });
  loginDetails: any;





  get f() { return this.logInForm.controls; }

  onSubmit() {

    console.log(this.logInForm);
    if (this.logInForm.valid) {
      console.log("success", this.logInForm.value);
      this.loginDetails = this.logInForm.value;
      this.api.loginPosts(this.loginDetails).subscribe((response: any) => {
        console.log(response);

      })

    } else {
      //  this.isSubmit = true
      console.log("error", this.logInForm.value);

    }
  }
  constructor(private api: ApiService) { }

  ngOnInit() {
    // localStorage.setItem('SeesionUser',this.user)  
  }

}
