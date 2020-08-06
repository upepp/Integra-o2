import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiURL: string = 'http://localhost:8000/api/';

  postComment(data):Observable<any>{
   return this.http.post(this.apiURL + 'createComment', data);
  }

  constructor(public http: HttpClient) { }

}
