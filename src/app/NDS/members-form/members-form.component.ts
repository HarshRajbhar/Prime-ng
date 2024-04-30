import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InputControllerComponent } from '../../controller/input-controller/input-controller.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownControllerComponent } from '../../controller/dropdown-controller/dropdown-controller.component';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-members-form',
  standalone: true,
  imports: [
    NgIf,
    InputControllerComponent,
    ReactiveFormsModule,
    DropdownControllerComponent,
  ],
  templateUrl: './members-form.component.html',
  styleUrl: './members-form.component.scss',
})
export class MembersFormComponent {
  page: '1' | '2' | '3' = '1';

  cities = [{ name: 'New York', code: 'NY' }, {}];
  constructor(private fb: FormBuilder) {}

  reactiveForm = new FormGroup({
    first: this.fb.group({
      app_no: new FormControl(null, [Validators.required]),
      app_name: new FormControl(null, [Validators.required]),
    }),
  });
  InputTypes = {
    page_1: {
      app_no: {
        type: 'text',
        placeholder: 'Appliaction number',
      },
      app_name: {
        type: 'text',
        placeholder: 'Applicant Name',
      },
    },
  };
}
