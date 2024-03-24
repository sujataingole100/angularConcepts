import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  count = signal('sujata');

  constructor() { }
}
