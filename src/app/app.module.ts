import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroModule } from './hero/hero.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeroDetailModule } from './hero-detail/hero-detail.module';
import { HelloWorldPipe } from './hello-world.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    HeroDetailModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
