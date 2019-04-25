import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  details:any;
  constructor(private service:ServiceService) { }

  ngOnInit() {
    var id = localStorage.getItem('userid');
  this.service.getbyuser(id).subscribe(data=>{
    this.details=data[0];
  })
  }

}
