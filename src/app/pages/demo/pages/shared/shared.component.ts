import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors, markFormGroupTouched } from '@app/shared/utils';

import { ControlItem } from '@app/models/frontend';


import { NotificationService } from '@app/services';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInLine!: boolean;
  regexErrors = regexErrors;

  items!: ControlItem[];

  showSpinner = false;

  constructor(private fb: FormBuilder, private notification: NotificationService) {
    this.isInLine = true;

    this.items = [
      { label: 'uno', value: 1 },
      { label: 'dos', value: 2 },
      { label: 'tres', value: 3 },
      { label: 'cuatro', value: 4 },
      { label: 'cinco', value: 5 },
    ];
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.number),
          ],
        },
      ],

      password: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required],
        },
      ],
      autocomplete: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required],
        },
      ],
      select: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      checkboxes: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      radios: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      date: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      dateRange: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
    });
  }

  onPatchValue(): void {
    this.form.patchValue({
      input: '1997',
      password: 'David2023',
      autocomplete: 1,
      select: 2,
      checkboxes: [3],
      radios: 4,
      date: new Date().getTime(),
      dateRange: {
        from: new Date(2022, 5, 10).getTime(),
        to: new Date(2022, 11, 10).getTime(),
      },
    });
  }

  onSubmit(): void {
    console.log('presiono boton submit');
    if(!this.form.valid){
      markFormGroupTouched(this.form)
    }
  }

  organizarElemento() {
    this.isInLine = !this.isInLine;
  }

  onToggleDisabled(): void {
    if (this.form.enabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  onToggleSpinner(): void{

    this.showSpinner= !this.showSpinner;
  }

  onSuccess(): void{
    this.notification.success("El procedimiento fue exitoso")
  }

  onError():void{
    this.notification.error("Se encontraron errores en el proceso")
  }
}

