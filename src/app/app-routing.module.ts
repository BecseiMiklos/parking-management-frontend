import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarRegisterComponent} from './car-register/car-register.component';
import {HomeComponent} from './home/home.component';
import {SummaryComponent} from './summary/summary.component';
import {ParkingComponent} from './parking/parking.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'car-register', component: CarRegisterComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'parking', component: ParkingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
