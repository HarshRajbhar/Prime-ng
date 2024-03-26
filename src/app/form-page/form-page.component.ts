import { Component } from '@angular/core';
import { InputControllerComponent } from '../input-controller/input-controller.component';
import { ButtonModule } from 'primeng/button';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [InputControllerComponent, ButtonModule, ReactiveFormsModule],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss',
})
export class FormPageComponent {
  constructor(private fb: FormBuilder) {}
  reactiveForm = new FormGroup({
    form: this.fb.group({
      F_name: new FormControl(null, [Validators.required]),
      L_name: new FormControl(null, Validators.required),
      M_number: new FormControl(null, [
        Validators.required,
        Validators.pattern(/(\d{10})$/),
        Validators.maxLength(10),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    }),
  });

  InputTypes = {
    firstName: {
      type: 'text',
      placeholder: 'Enter Your First Name',
    },
    lastname: {
      type: 'text',
      placeholder: 'Enter Your Last Name',
    },
    M_number: {
      type: 'number',
      placeholder: 'Enter You Mobile Number',
    },
    Email: {
      type: 'text',
      placeholder: 'Enter Your Email',
    },

    // M_number: 'Enter You Mobile Number',
    // Email: 'Enter Your Email',
  };

  Submit() {
    console.log(this.reactiveForm.value);
  }
}
