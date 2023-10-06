import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors } from '@app/shared/utils';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInLine!: boolean;
  regexErrors = regexErrors;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
            Validators.pattern(regex.number),
          ],
        },
      ],

      password: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required
          ],
        },
      ],
    });
  }

  onPatchValue(): void {
    this.form.patchValue({ input: 'Jonathan' });
  }

  onSubmit(): void {
    console.log('presiono boton submit');
  }

  organizarElemento() {
    this.isInLine = !this.isInLine;
  }
}
