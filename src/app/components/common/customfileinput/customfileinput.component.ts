import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// this component helps writing files into DOM from angular form controls
// all inputs with [type=file] attribute will be applied with this customized control value accessor
// angular form (model) => CustomfileinputComponent [ControlValueAccessor] => DOM (view)
// Usage:
// no need to do anything, just use input[type=file] in the target elemenet
// without this component, directly setting formControl with base64 image files will result in error
// e.g. this.form.get('fileInput').setValue("base64...")
// ERROR DOMException: Failed to set the 'value' property on 'HTMLInputElement': This input element accepts a filename, which may only be programmatically set to the empty string.

@Component({
  selector: 'input[type=file]',
  // templateUrl: './customfileinput.component.html',
  // styleUrls: ['./customfileinput.component.scss'],
  template: '',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomfileinputComponent),
    multi: true
  }]
})
export class CustomfileinputComponent implements ControlValueAccessor {
  value: any;

  //func to be called when file val changes
  onChange = (file : String) => {};

  onTouched = () => {};

  //allows angular to upd this.value (the model)
  writeValue(value: String) : void {
    this.value = value;
  }
  //allows angular to reg a func to call when the model changes
  registerOnChange(fn: (file : String) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

}
