import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { dropdown } from '../../../assets/interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dropdown-controller',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule, NgClass],
  templateUrl: './dropdown-controller.component.html',
  styleUrl: './dropdown-controller.component.scss',
})
export class DropdownControllerComponent {
  @Input() group!: string;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() className!: any;
  @Input() label!: 'name' | 'code';
  @Input() DropdownArray!: dropdown[];

  FormControlVal!: FormGroup;

  // formGroup = new FormGroup({
  //   selectedCity: new FormControl<dropdown | null>(null),
  // });
  constructor(private rootFormGroup: FormGroupDirective) {}
  ngOnInit(): void {
    this.FormControlVal = this.rootFormGroup.control.get(
      this.group
    ) as FormGroup;
  }
  // getData() {
  //   console.log(this.formGroup.value.selectedCity?.code);
  // }
}
