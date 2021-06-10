import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  url : string;

  constructor(private http : HttpClient) {
    this.url = environment.baseUrl;
   }

  get<T>(action: string): Observable<T> {
    const _url = this.url + action;
    return this.http.get<T>(_url);
  }

  getImagesByURL (image : string) : string{
    if (image) {
      return `${this.url}images/${image}`;
    } else {
      return `assets/images/default/no_image.jpg`;
    }
  }

}
