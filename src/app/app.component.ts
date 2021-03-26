import { Component } from '@angular/core';
import { LoggerService } from './logger.service';
import { HelloWorldService } from './hello-world.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-test-project';
  title1 = 'I am not hello world';
  title2 = this.title1;
  title3 = this.title1
  title4 = this.title1
  title5:string[] = []
  log: string = '';

  constructor(private loggerService: LoggerService, private helloWorldService: HelloWorldService) {
    this.title2 = helloWorldService.getHelloWorld();
    this.helloWorldService.getHelloWorldFormHttp().subscribe(data => {
      this.title3 = data;
    })

    this.title4 = this.helloWorldService.getHelloWorldFromRxjs();

    this.helloWorldService.getHelloWorldFromRxJSLib()
      .pipe(map(() => 'hello world'))
      .subscribe(helloworld => {
        this.title5.push(helloworld);
      })
  }

  ngOnInit() {
    this.log = this.loggerService.getLog()
  }
}
