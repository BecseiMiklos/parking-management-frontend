import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CarRegisterComponent} from './car-register/car-register.component';
import {
  ButtonModule,
  CardModule,
  CheckboxModule, DialogModule,
  InputMaskModule,
  InputTextModule,
  MessageModule,
  MessagesModule,
  MultiSelectModule
} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {GrowlModule} from 'primeng/components/growl/growl';
import {MessageService} from 'primeng/components/common/messageservice';
import {AutoCompleteModule} from 'primeng/components/autocomplete/autocomplete';
import {RestService} from './rest.service';
import {SummaryComponent} from './summary/summary.component';
import {ParkingComponent} from './parking/parking.component';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';


@NgModule({
  declarations: [
    AppComponent,
    CarRegisterComponent,
    HomeComponent,
    SummaryComponent,
    ParkingComponent
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
    MessageModule,
    GrowlModule,
    CardModule,
    AutoCompleteModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule
  ],
  providers: [HttpClient, MessageService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
