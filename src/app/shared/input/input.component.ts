import { Component, Input, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit, AfterContentInit {

  input: any;

  @Input() label: string;
  @Input() errorMessage: string;
  
  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model || this.control
    if(this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva, ngModel ou FormControlName');
    }
  }

  hasSuccess() {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError() {
    return !this.input.valid && (this.input.dirty || this.input.touched)
  }

}
