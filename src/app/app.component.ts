import { Component } from '@angular/core';
import { LoggerService } from './logger.service';
import { HelloWorldService } from './hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-test-project';
  title1 = 'I am not hello world';
  title2 = this.title1;
  log: string = '';

  constructor(private loggerService: LoggerService, private helloWorldService: HelloWorldService) {
    this.title2 = helloWorldService.getHelloWorld();
  }

  ngOnInit() {
    this.log = this.loggerService.getLog()
  }
}
