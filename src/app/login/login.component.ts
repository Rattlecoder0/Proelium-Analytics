import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  visible:boolean = true
  changetype:boolean = true 

  constructor() { }

  ngOnInit(): void {
  }

  loginform = new FormGroup({

    email: new FormControl("",
    [Validators.required, Validators.email]),

    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),

  })

  get email(): FormControl{
    return this.loginform.get("email") as FormControl
  }
  get password(): FormControl{
    return this.loginform.get("password") as FormControl
  }

  // password show - hide
  viewpass(){
    this.visible =! this.visible
    this.changetype =! this.changetype
  }

  login(){
    console.log(this.loginform.value)
   alert('Login successful')
    this.loginform.reset()
    }

    
}
