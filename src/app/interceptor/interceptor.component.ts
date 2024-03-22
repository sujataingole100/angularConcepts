import { Component } from '@angular/core';
import { NewcompComponent } from '../newcomp/newcomp.component';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css'],
  standalone: true,
  imports: [NewcompComponent]
})
export class InterceptorComponent {

}
