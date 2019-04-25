import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ServiceService ,private router:Router) { }

  submit(frm){
    var id= frm.username;
    var password = frm.password
  this.service.login(id,password).subscribe(data=>{
 localStorage.setItem('userid',data[0].userid);

 if(data[0].usertype=='User'){
  this.router.navigate(['/userdashboard'])
 }
else{
  this.router.navigate(['/dashboard'])
}
 
  })

  }

  ngOnInit() {
  }

}
