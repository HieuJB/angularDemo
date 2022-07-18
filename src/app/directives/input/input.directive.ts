import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[myInput]',
})
export class MyInputDirective {
  constructor(public ngControl: NgControl) {}
}
