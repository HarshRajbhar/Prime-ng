import { NgClass, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
interface typeData {
  type: string;
  placeholder: string;
}
@Component({
  selector: 'app-input-controller',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule, NgStyle,NgClass],
  templateUrl: './input-controller.component.html',
  styleUrl: './input-controller.component.scss',
})
export class InputControllerComponent implements OnInit {
  @Input() group!: string;
  @Input() name!: string;
  @Input() placeholder!: typeData;
  @Input() className!: any;
  FormControlVal!: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}
  ngOnInit(): void {
    this.FormControlVal = this.rootFormGroup.control.get(
      this.group
    ) as FormGroup;
  }
}
