import { InjectionToken } from '@angular/core';

export const HELLO_WORLD_TOKEN = new InjectionToken<string>('hello world')
export const useValueProvider = {
    provide: HELLO_WORLD_TOKEN,
    useValue: 'hello world'
}