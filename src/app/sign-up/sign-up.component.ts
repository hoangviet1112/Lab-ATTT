import { HttpClient } from '@angular/common/http';
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
  accessForm = new FormGroup({
    id: new FormControl(),
    password: new FormControl()
  })

  createForm = new FormGroup({
    id: new FormControl(),
    userName: new FormControl(),
    password: new FormControl(),
  })

  x = 'string';
  data: any;
  constructor(
    public http: HttpClient,

  ) { }

  ngOnInit() {  
  }

  createAsset() {
    this.step = 2;
    this.resetForm();
  }

  accessAsset() {
    this.step = 3;
    this.resetForm();
  }

  submitAccessAsset() {
    this.http.post('http://192.168.230.134/api/v1/asset/login', {
      id: this.accessForm.get('id')?.value,
      password: this.accessForm.get('password')?.value
    }).subscribe(() => {
      this.step = 1;
      this.resetForm();
    })
  }

  selectSignup() {
    this.step = 2;
  }

  submitCreateAsset() {
    this.http.post('http://192.168.230.134:5000/api/v1/asset', {
      id: this.createForm.get('id')?.value,
      name: this.createForm.get('userName')?.value,
      password: this.createForm.get('password')?.value
    }).subscribe((res) => {
      this.data = res
      this.step = 1;
      this.resetForm();
    }, (error) => {
      console.log(error);
      this.x = error.error.error
    })
    
  }

  cancelCreateAsset() {
    this.step = 1;
    this.resetForm();
  }

  cancelAccessAsset() {
    this.step = 1;
    this.resetForm();
  }

  goback() {
    this.step = 1;
    this.resetForm();
  }

  resetForm() {
    this.accessForm.reset();
    this.createForm.reset();
  }
}
