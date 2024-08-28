import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { LayoutComponent } from './layout/layout.component';
import { RouteWithParameterComponent } from './route-with-parameter/route-with-parameter.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'second',
        component: CompTwoComponent
      },
      {
        path: 'three',
        component: CompThreeComponent
      },
      {
        path: 'parameterized/:id',
        component: RouteWithParameterComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
