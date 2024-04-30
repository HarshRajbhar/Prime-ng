import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  caste_category,
  district,
  Gender,
  qualification,
  relation,
  state,
  tehsil,
} from '../../../assets/NDS_data';
import { CalendarControllerComponent } from '../../controller/calendar-controller/calendar-controller.component';
import { DropdownControllerComponent } from '../../controller/dropdown-controller/dropdown-controller.component';
import { InputControllerComponent } from '../../controller/input-controller/input-controller.component';

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
    CalendarControllerComponent,
  ],
  templateUrl: './members-form.component.html',
  styleUrl: './members-form.component.scss',
})
export class MembersFormComponent {
  page: '1' | '2' | '3' = '1';

  GenderArray = Gender;
  RelationArray = relation;
  CastCatArray = caste_category;
  QualificationArray = qualification;
  StateArray = state;
  DistrictArray = district;
  TehsilArray = tehsil;

  constructor(private fb: FormBuilder) {}

  reactiveForm = new FormGroup({
    first: this.fb.group({
      app_no: new FormControl(null, [Validators.required]),
      app_name: new FormControl(null, [Validators.required]),
      relation: new FormControl<dropdown | null>(null),
      relation_name: new FormControl(null),
      gender: new FormControl<dropdown | null>(null, [Validators.required]),
      dob: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      cast_Cat: new FormControl<dropdown | null>(null, [Validators.required]),
      qualification: new FormControl<dropdown | null>(null, [
        Validators.required,
      ]),
      contact_details: this.fb.group({
        state: new FormControl<dropdown | null>(null),
        district: new FormControl<dropdown | null>(null),
        tehsil: new FormControl<dropdown | null>(null),
        village: new FormControl<dropdown | null>(null),
        hamlet: new FormControl<dropdown | null>(null),
        house: new FormControl(null),
        post_office: new FormControl(null),
        pincode: new FormControl(null, Validators.required),
        mobile: new FormControl(null, Validators.required),
        phone: new FormControl(null),
      }),
    }),
  });
  change() {
    if (this.reactiveForm.invalid) {
      this.reactiveForm.markAllAsTouched();
      
    }
    console.log(this.reactiveForm.value.first);
  }
}
