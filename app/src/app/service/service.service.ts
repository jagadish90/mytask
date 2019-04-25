import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url="http://localhost:4600/"
  constructor(private http:HttpClient) { }

signuppost(frm):Observable<any>{
  const httpOptions = { headers: new HttpHeaders({'content-type':'application/json'})};
  return this.http.post(this.url+'signup/',frm,httpOptions)
}



login(id,password):Observable<any>{
  return this.http.get(this.url+'login/'+id+'/'+password)
}
getall():Observable<any>{
  return this.http.get(this.url+'getall')
}


getbyuser(id):Observable<any>{
  return this.http.get(this.url+'getbyuser/'+id)
}
}
