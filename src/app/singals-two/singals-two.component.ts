import { Component, Input, effect, signal } from '@angular/core';
import { MasterService } from 'src/service/master.service';

@Component({
  selector: 'app-singals-two',
  templateUrl: './singals-two.component.html',
  styleUrls: ['./singals-two.component.css']
})
export class SingalsTwoComponent {

  myComapny = Input('Parallel Minds');
  checked = model(false);
  constructor(public ser: MasterService) {
  }
  updateSignalValue() {
    this.ser.count.update(() => { return 'Samadhan' });
  }


  toggle() {
    // While standard inputs are read-only, you can write directly to model inputs.

  }

}
function model(arg0: boolean) {
  throw new Error('Function not implemented.');
}

