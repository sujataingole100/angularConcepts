import { TestBed } from '@angular/core/testing';

import { JwtIInterceptor } from './jwt-i.interceptor';

describe('JwtIInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtIInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtIInterceptor = TestBed.inject(JwtIInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
