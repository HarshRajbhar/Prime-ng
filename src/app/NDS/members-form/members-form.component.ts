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
import { Gender } from '../../../assets/NDS_data';

interface dropdown {
  id: string;
  value: string;
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

  GenderArray = Gender;

  constructor(private fb: FormBuilder) {}

  reactiveForm = new FormGroup({
    first: this.fb.group({
      app_no: new FormControl(null, [Validators.required]),
      app_name: new FormControl(null, [Validators.required]),
      gender: new FormControl<dropdown | null>(null, [Validators.required]),
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
