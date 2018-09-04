/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SanitizePipe } from './sanitize.pipe';

describe('Pipe: Sanitizee', () => {
  it('create an instance', () => {
    const url: any = 'asdf';
    const pipe = new SanitizePipe(url);
    expect(pipe).toBeTruthy();
  });
});
