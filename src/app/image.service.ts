import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './model/image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }


getUsers(usersUrl): Observable<Photo>{
 
    return this.http.get<Photo>(usersUrl);

  }

}

