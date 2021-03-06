import {Component} from '@angular/core';

// this component is probably not used. The author was just
// tooling around with some angualr syntax.
// these are not the 'droids you are looking for, move along.

@Component({
  selector: 'example-formstuff',
  template: `
    <input name="theInputName" #ctrl ngModel (onchange)="blahChange()" (onkeypress)="blahChange()" required>
 
    <p>Value: {{ name }} actual control name: {{ ctrl.name }} and value {{ ctrl.value }}</p>
    <p>Valid: {{ ctrl.valid }}</p>
    
    <button (click)="setValue()">Set value</button>
  `,
})
export class SimpleNgModelComp {
  name: string = '';
  blahname: string = '';

  setValue() {
    console.log("Nancy look out!");
    this.name = 'Nancy';
  }
  blahChange() {
    console.log("blahChange!!!");
    this.name = this.blahname = 'boo';
  }
}
