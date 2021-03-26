import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private httpClient: HttpClient) { }

  getHelloWorld() {
    return 'hello world'
  }

  getHelloWorldFormHttp() {
    return this.httpClient.get('../assets/helloworld.txt', {responseType: 'text'})
  }
}
