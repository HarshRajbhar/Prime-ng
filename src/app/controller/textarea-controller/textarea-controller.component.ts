import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
interface typeData {
  type: string;
  placeholder: string;
}
@Component({
  selector: 'app-textarea-controller',
  standalone: true,
  imports: [InputTextareaModule, ReactiveFormsModule],
  templateUrl: './textarea-controller.component.html',
  styleUrl: './textarea-controller.component.scss',
})
export class TextareaControllerComponent implements OnInit {
  @Input() group!: string;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() row: number = 5;
  FormControlVal!: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}
  ngOnInit(): void {
    this.FormControlVal = this.rootFormGroup.control.get(
      this.group
    ) as FormGroup;
  }
}
