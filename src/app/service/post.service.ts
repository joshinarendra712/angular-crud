import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postbaseUrl = `${environment.baseUrl}`;

  constructor(private http : HttpClient) { }
  
  fetchAlldata():Observable<Ipost[]>{
    return this.http.get<Ipost[]>(this.postbaseUrl)
  }
  CreatePost(obj:number):Observable<any>{
    return this.http.post<any>(this.postbaseUrl, obj)
  }

  deletePost(id:number):Observable<Ipost>{
    let deleteUrl = `${this.postbaseUrl}/${id}`;
    return this.http.delete<Ipost>(deleteUrl)
  }

  getSinglePost(id:number):Observable<Ipost>{
    let singlePostUrl = `${this.postbaseUrl}/${id}`;
    return this.http.get<Ipost>(singlePostUrl);
  }

  getupdatePost(id:number, obj:Ipost):Observable<Ipost>{
  let UpdateUrl = `${this.postbaseUrl}/${id}`;
  return this.http.patch<Ipost>(UpdateUrl, obj)
  }
}
