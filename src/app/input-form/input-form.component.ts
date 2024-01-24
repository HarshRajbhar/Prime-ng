import { Component } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss',
})
export class InputFormComponent {
  input_mask1!: string;
  input_mask2!: string;
  input_mask3!: string;
  input_text1!: string;
  input_text2!: string;
  input_text3!: string;
  input_text4!: string;
  Input_Number1: any;
  Input_Number2: any;
  Input_Number3: any;
  Input_Number4: any;
  ingredient!: string;
}
