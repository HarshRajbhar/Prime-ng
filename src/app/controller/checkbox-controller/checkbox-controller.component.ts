import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-checkbox-controller',
  standalone: true,
  imports: [CheckboxModule, ReactiveFormsModule],
  templateUrl: './checkbox-controller.component.html',
  styleUrl: './checkbox-controller.component.scss',
})
export class CheckboxControllerComponent implements OnInit {
  @Input() group!: string;
  @Input() name!: string;
  FormControlVal!: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}
  ngOnInit(): void {
    this.FormControlVal = this.rootFormGroup.control.get(
      this.group
    ) as FormGroup;
  }
}
