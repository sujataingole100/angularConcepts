import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.css']
})
export class CompThreeComponent {
  id = 6
  constructor(private route: Router) {

  }
  navigate() {
    debugger
    this.route.navigateByUrl(`/subnav/parameterized/${this.id}`);
  }
}
