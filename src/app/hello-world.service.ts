import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

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

  getHelloWorldFromRxjs() {
    let helloWorld = '';
    const helloworldOb = of('hello world');
    helloworldOb.subscribe(data => {
      helloWorld = data;
    })

    return helloWorld;
  }

  getHelloWorldFromRxJSLib() {
    const helloworldOb = of(
      'I am not hello world',
      'I am not hello world',
      'I am not hello world'
    )
    return helloworldOb;
  }
}
