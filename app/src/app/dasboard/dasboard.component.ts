import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})


export class DasboardComponent implements OnInit {
  alldetails:any;
  alldetails1:any;
  constructor(private service:ServiceService) { }

  ngOnInit() {


this.service.getall().subscribe(data=>{
this.alldetails=data;
console.log(data);
})

}
}
