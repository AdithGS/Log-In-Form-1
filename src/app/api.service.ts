import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private baseurl: HttpClient) { }

  // private getUrl = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';
   private url = 'http://192.168.1.17:3001/v1/auth/register '

   private urlLogin = 'http://192.168.1.17:3001/v1/auth/login '

   private getUrl ='http://192.168.1.17:3001/v1/products?limit=10&page=1 '



  getPosts() {
    return this.baseurl.get(this.getUrl);

  }
  sinupPosts(sinupData) {
    // console.log("service sinup", sinupData);
    // return this.baseurl.post<any>(this.url,signupData);
    return this.baseurl.post(this.url,sinupData)

  }

 loginPosts(loginData) {
   console.log("login detailsa**",loginData);
   
    return this.baseurl.post(this.urlLogin,loginData)

  }

}
