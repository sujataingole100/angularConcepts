import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-route-with-parameter',
  templateUrl: './route-with-parameter.component.html',
  styleUrls: ['./route-with-parameter.component.css']
})
export class RouteWithParameterComponent {
  id: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    debugger;

    //  with this method when url changes sometimes page is not getting changed 


    // this.id = + this.activatedRoute.snapshot.params['id'];
    // console.log(this.activatedRoute);



    this.activatedRoute.params.subscribe((m) => {
      {
        this.id = m['id'];
        console.log(this.id, 'newww id');
      }
    }
    )



    // const paramMap = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(paramMap, 'paramMap');

  }

}
