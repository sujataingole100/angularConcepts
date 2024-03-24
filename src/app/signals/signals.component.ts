import { Component, Inject, Injector, Signal, WritableSignal, computed, effect, signal, untracked } from '@angular/core';
import { MasterService } from 'src/service/master.service';
@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent {
  writableSignal: WritableSignal<number> = signal(1);
  name = signal('');
  num = signal(1);

  // Writable signals
  firstName = signal('John');
  lastName = signal('Doe');
  age: WritableSignal<number> = signal(30);

  // Computed signal to calculate the full name
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  messages = signal<any>({ message: 'Hello World!' });


  constructor(public ser: MasterService, private injector: Injector) {

    effect(() => {
      console.log(`${this.age()} my age after 2o yeras`);
    })

    // Untracked effect

    // effect(() => {
    //   untracked(() => {
    //     console.log(`${this.age()} my age after 2o yeras`);
    //   })
    // });
    this.name.set('Gaikwad');
    // this.messages.mutate((values: any) => values.message = 'Hello Signals!');
    // this.messages.update(() => this.messages().message = 'Hello Signals!');
    this.messages.mutate((val: any) => val.message = 'Hello Signals!');
  }

  changeValue() {
    this.ser.count.set('yogita');
  }

  increseNumber() {
    this.num.update(() => {
      return this.num() + 1;
    })
  }

  decreaseNumber() {
    this.num.update(() => {
      return this.num() - 1;
    })
    // this.num.mutate((val: any) => { return val - 1 });
  }

  updateAge() {
    this.age.update(() => {
      return this.age() + 40;
    })
  }

  // callingEffectOutsideConstructor() {
  //   effect(() => {
  //     console.log(this.age() + 1);

  //   }, { injector: this.injector })
  // }




}

