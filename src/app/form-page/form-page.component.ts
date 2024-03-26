import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputControllerComponent } from '../input-controller/input-controller.component';
import { TextareaControllerComponent } from '../textarea-controller/textarea-controller.component';
import { TableModule } from 'primeng/table';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';

interface enquiry {
  name: string;
  Phone: number;
  email: string;
  msg: string;
}

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [
    InputControllerComponent,
    ButtonModule,
    ReactiveFormsModule,
    TextareaControllerComponent,
    TableModule,
    NgIf,
  ],
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
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
      ]),
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
    message: {
      type: '',
      placeholder: 'Message',
    },

    // M_number: 'Enter You Mobile Number',
    // Email: 'Enter Your Email',
  };
  EnquiryArray: enquiry[] = [];
  Submit() {
    Swal.fire({
      title: 'Success',
      text: 'Thank you for interest, we will contact you soon!',
      icon: 'success',
    });
    this.EnquiryArray.push({
      name: `${
        this.reactiveForm.value.form?.F_name! +
        this.reactiveForm.value.form?.L_name!
      }`,
      Phone: this.reactiveForm.value.form?.M_number!,
      email: this.reactiveForm.value.form?.email!,
      msg: this.reactiveForm.value.form?.message!,
    });
    console.log(this.reactiveForm.value);
  }
}
