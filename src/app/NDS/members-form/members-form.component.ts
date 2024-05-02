import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  bank_name,
  bmc,
  branch_name,
  caste_category,
  company,
  district,
  Gender,
  mcc,
  member_type,
  mpp,
  payment_mode,
  plant,
  qualification,
  relation,
  state,
  tehsil,
} from '../../../assets/NDS_data';
import { CalendarControllerComponent } from '../../controller/calendar-controller/calendar-controller.component';
import { DropdownControllerComponent } from '../../controller/dropdown-controller/dropdown-controller.component';
import { InputControllerComponent } from '../../controller/input-controller/input-controller.component';
import { TextareaControllerComponent } from '../../controller/textarea-controller/textarea-controller.component';
import { CheckboxControllerComponent } from '../../controller/checkbox-controller/checkbox-controller.component';

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
    TextareaControllerComponent,
    CheckboxControllerComponent,
  ],
  templateUrl: './members-form.component.html',
  styleUrl: './members-form.component.scss',
})
export class MembersFormComponent implements OnInit {
  page = '1';

  GenderArray = Gender;
  RelationArray = relation;
  CastCatArray = caste_category;
  QualificationArray = qualification;
  StateArray = state;
  DistrictArray = district;
  TehsilArray = tehsil;
  BranchListArray = branch_name;
  BankListArray = bank_name;
  CompanyArray = company;
  PlantArray = plant;
  MCCArray = mcc;
  BMCArray = bmc;
  MPPArray = mpp;
  PaymentModeArray = payment_mode;
  MemberTypeArray = member_type;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.reactiveForm.controls.sec.controls.bank_details.controls.ifsc.disable();
  }

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
    sec: this.fb.group({
      bank_details: this.fb.group({
        B_name: new FormControl<dropdown | null>(null),
        Br_name: new FormControl<dropdown | null>(null, Validators.required),
        ifsc: new FormControl(null),
        ac_name: new FormControl(null),
        ac_num: new FormControl(null, [Validators.required, Validators.min(0)]),
      }),
      nominee_detail: this.fb.group({
        n_name: new FormControl(null),
        n_age: new FormControl(null),
        relation: new FormControl<dropdown | null>(null),
        add: new FormControl(null),
        g_name: new FormControl(null),
      }),
      village_detail: this.fb.group({
        company: new FormControl<dropdown | null>(null),
        plant: new FormControl<dropdown | null>(null),
        mcc: new FormControl<dropdown | null>(null),
        bmc: new FormControl<dropdown | null>(null),
        mpp: new FormControl<dropdown | null>(null, Validators.required),
        aadhar_no: new FormControl<dropdown | null>(null, [
          Validators.required,
          Validators.min(0),
        ]),
        village: new FormControl(null),
        hamlet: new FormControl(null),
      }),
    }),
    third: this.fb.group({
      ad_fee: new FormControl(null),
      share_apply: new FormControl(null),
      amt_deposit: new FormControl(null),
      payment_mode: new FormControl<dropdown | null>(null),
      bank_name: new FormControl<dropdown | null>(null),
      br_name: new FormControl<dropdown | null>(null),
      paymnet_ref: new FormControl(null),
      tran_date: new FormControl(null, Validators.required),
      amt: new FormControl(null),
      member_type: new FormControl<dropdown | null>(null, Validators.required),
      initial_value: new FormControl(null, Validators.required),
      is_active: new FormControl(false),
    }),
  });
  change() {
    if (this.reactiveForm.invalid) {
      this.reactiveForm.markAllAsTouched();
      return;
    }
    console.log(this.reactiveForm.value.first);
  }
  FPage() {
    if (this.reactiveForm.controls.first.invalid) {
      this.reactiveForm.controls.first.markAllAsTouched();
    }
    setTimeout(() => {
      this.page = '2';
    }, 1000);
    if (this.reactiveForm.controls.first.valid) {
      console.log(this.reactiveForm.controls.first.value);
    }
  }
  SPage() {
    if (this.reactiveForm.controls.first.invalid) {
      this.reactiveForm.controls.sec.markAllAsTouched();
    }
    setTimeout(() => {
      this.page = '3';
    }, 1000);
    if (this.reactiveForm.controls.sec.valid) {
      console.log(this.reactiveForm.controls.sec.value);
    }
  }
  Submit() {
    this.reactiveForm.controls.third.markAllAsTouched();
    console.log(this.reactiveForm.controls.third.value);
    console.log(this.reactiveForm.value);
  }
}
