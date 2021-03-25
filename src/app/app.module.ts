import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroModule } from './hero/hero.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeroDetailModule } from './hero-detail/hero-detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    HeroDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
