import { InjectionToken } from '@angular/core';
import { HelloworldFactoryService } from './helloworld-factory.service';

export const HELLO_WORLD_TOKEN = new InjectionToken<string>('hello world');
export const useValueProvider = {
  provide: HELLO_WORLD_TOKEN,
  useValue: 'hello world',
};

function helloworldFactory() {
  return new HelloworldFactoryService();
}
export const useFactoryProvider = {
  provide: HelloworldFactoryService,
  useFactory: helloworldFactory,
  deps: [],
};
