import {
  Component,
  Input,
  OnInit,
  Output,
  forwardRef,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ControlItem, Value } from '../select/select.component';

export { ControlItem, Value } from '../select/select.component';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadiosComponent),
      multi: true,
    },
  ],
})
export class RadiosComponent implements OnInit, ControlValueAccessor {
  value!: Value;
  isDisabled!: boolean;

  @Input() items!: ControlItem[];
  @Output() changed = new EventEmitter<Value>();

  constructor() {}

  ngOnInit(): void {}

  private propagateChange: any = () => {};

  writeValue(value: Value): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.registerOnChange = fn;
  }
  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChanged(value: Value): void {
    this.value = value;
    this.propagateChange(value);
    this.changed.emit(value);
  }

  isChecked(value: Value): boolean {
    return this.value === value;
  }
}
