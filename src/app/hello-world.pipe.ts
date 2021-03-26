import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'helloWorld'
})
export class HelloWorldPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'Hello World!';
  }

}
