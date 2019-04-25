import { Component, OnInit } from '@angular/core';
import { model } from '../model';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hero:model;
  constructor(private service:ServiceService,private router:Router) { 
    this.hero=new model();
  }


  register(form){
    console.log(form);
  
this.service.signuppost(form).subscribe(data=>{
  alert(data.message);
this.router.navigate(['/login'])
})
  }

  ngOnInit() {
  }

}
