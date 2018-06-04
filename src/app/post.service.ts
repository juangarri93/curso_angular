import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } 
	from '@angular/common/http';
  import { of } from 'rxjs';
  import { Observable } from 'rxjs';
//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/catch';

export interface Post{
userId:number,
id:number,
title:string,
body:string
}
@Injectable({
  providedIn: 'root'
})
export class PostService implements HttpInterceptor {

  readonly API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http : HttpClient) { }

  getPosts(){
    return this.http.get<Post[]>(`${this.API_URL}/posts`);
  }

  getPost(id:number){
    return this.http.get<Post>(`${this.API_URL}/posts/${id}`);
  }

  pushPost(post){
    return this.http.post<any>(`${this.API_URL}/posts`, post);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log("intercept request...");

		const authReq = req.clone({ headers: req.headers.set("miheader", "test1234567890")});

		return next.handle(authReq);
			//.catchError((error, caught) => {
			//	console.log("Error general de HTTP");
			//	console.log(error);
      //				return Observable.throw(error);
	    //		}) as any;
	}
}
