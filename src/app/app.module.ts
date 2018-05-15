import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CarRegisterComponent} from './car-register/car-register.component';
import {
  ButtonModule,
  CheckboxModule,
  InputMaskModule,
  InputTextModule,
  MessageModule,
  MessagesModule,
  MultiSelectModule
} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CarRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InputMaskModule,
    InputTextModule,
    FormsModule,
    MultiSelectModule,
    CheckboxModule,
    ButtonModule,
    MessagesModule,
    MessageModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
