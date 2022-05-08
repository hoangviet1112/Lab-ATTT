import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  jsonData = {"success":true,"data":{"jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdE5hbWVzcGFjZSI6InRyYWNlYWJpbGl0eXNjLmFzc2V0IiwiY3JlYXRlZEF0IjoiMjAyMi0wNS0wM1QwMTowMjoxNy4wMjFaIiwiY3VycmVudFN0YXRlIjoiSU5JVElBTCIsImlkIjoiNzUiLCJrZXkiOiJcdTAwMDB0cmFjZWFiaWxpdHlzYy5hc3NldFx1MDAwMDc1XHUwMDAwIiwibmFtZSI6InVzZXIwMiIsInBhc3N3b3JkIjoiMTIzNGFiY2QiLCJ0eElEIjoiY2FlYjJjZjJjYWRmYmVkYmFhNzQyNDU2ZWViYjQ4ODFmNWRjNTAyZjJkY2NjY2U0MWY4NDc0ZmJmYWYzZGFlYyIsImlhdCI6MTY1MTU0MDgzNiwiZXhwIjoxNjUxNjI3MjM2fQ.ViXDroAi3sFjDXTdJGlgprkjUkHXZDxy7OCxXgpCYQY","asset":{"contractNamespace":"traceabilitysc.asset","createdAt":"2022-05-03T01:02:17.021Z","currentState":"INITIAL","id":"75","key":"\u0000traceabilitysc.asset\u000075\u0000","name":"user02","password":"1234abcd","txID":"caeb2cf2cadfbedbaa742456eebb4881f5dc502f2dcccce41f8474fbfaf3daec"}},"error":null};
  step: number = 1;
  loginForm = new FormGroup({
    id: new FormControl(),
    password: new FormControl()
  })

  signUpForm = new FormGroup({
    id: new FormControl(),
    userName: new FormControl(),
    password: new FormControl(),
  })
  constructor() { }

  ngOnInit() {
  }

  login() {
    this.step = 3;
    this.resetForm();
  }

  selectSignup() {
    this.step = 2;
    this.resetForm();
  }

  submitSignup() {
    this.step =1 ;
    this.resetForm();
  }

  cancelSignUp() {
    this.step =1;
    this.resetForm();
  }

  logout() {
    this.step = 1;
    this.resetForm();
  }

  resetForm() {
    this.loginForm.reset();
    this.signUpForm.reset();
  }
}
