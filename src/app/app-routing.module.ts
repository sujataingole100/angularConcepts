import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { SingalsTwoComponent } from './singals-two/singals-two.component';

const routes: Routes = [
  {
    path: 'signal',
    component: SignalsComponent
  },
  {
    path: 'signals2',
    component: SingalsTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
