import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  hide:boolean=true;
  logstatus: Observable<string>
  constructor(private router:Router) { }

  login(){
    this.router.navigate(['/login'])
   

  }
  signup(){
    this.router.navigate(['/signup'])
  
  }
  logout(){
    localStorage.removeItem('userid');
    this.router.navigate(['/login'])
  }
  CheckLocalStore():Observable<any>{
    return of(localStorage.getItem("userid"));
  }
  
  ngDoCheck() {
    this.CheckLocalStore().subscribe((data) => { this.logstatus = data })


  }

}
