import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-test-project';
  log: string = '';

  constructor(private loggerService: LoggerService) {

  }

  ngOnInit() {
    this.log = this.loggerService.getLog()
  }
}
