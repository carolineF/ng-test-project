import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  getLog() {
    return 'test NgModule level service successfully';
  }
}
