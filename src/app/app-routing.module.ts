import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarRegisterComponent} from './car-register/car-register.component';

const routes: Routes = [
  {path: 'car-register', component: CarRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
