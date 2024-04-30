import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
interface City {
  name: string;
  code: string;
}
interface name {
  name: string;
}
interface code {
  code: string;
}
@Component({
  selector: 'app-dropdown-controller',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule],
  templateUrl: './dropdown-controller.component.html',
  styleUrl: './dropdown-controller.component.scss',
})
export class DropdownControllerComponent {
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  formGroup = new FormGroup({
    selectedCity: new FormControl<City | null>(null),
  });
  getData() {
    console.log(this.formGroup.value.selectedCity?.code);
  }
}
