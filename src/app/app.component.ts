import { Component, Inject } from '@angular/core';
import { LoggerService } from './logger.service';
import { HelloWorldService } from './hello-world.service';
import { map } from 'rxjs/operators';
import { HELLO_WORLD_TOKEN, useFactoryProvider, useValueProvider } from './assist';
import { HelloworldFactoryService } from './helloworld-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [useValueProvider, useFactoryProvider]
})
export class AppComponent {
  title = 'ng-test-project';
  title1 = 'I am not hello world';
  title2 = this.title1;
  title3 = this.title1
  title4 = this.title1
  title5:string[] = []
  title6 = this.title1
  title7 = this.title1
  log: string = '';

  constructor(private loggerService: LoggerService, 
    private helloWorldService: HelloWorldService,
    @Inject(HELLO_WORLD_TOKEN) private helloStr: string,
    private helloworldFactoryService: HelloworldFactoryService) {
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

    this.title6 = helloStr;

    this.title7 = this.helloworldFactoryService.getHelloworld();
  }

  ngOnInit() {
    this.log = this.loggerService.getLog()
  }
}
