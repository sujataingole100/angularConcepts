import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { LayoutComponent } from './layout/layout.component';
import { RouteWithParameterComponent } from './route-with-parameter/route-with-parameter.component';


@NgModule({
  declarations: [
    CompTwoComponent,
    CompThreeComponent,
    LayoutComponent,
    RouteWithParameterComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
