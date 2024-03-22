import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterceptorComponent } from './interceptor/interceptor.component';

const routes: Routes = [
  {
    path: 'interceptor',
    component: InterceptorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
