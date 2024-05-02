import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-calendar-controller',
  standalone: true,
  imports: [CalendarModule, ReactiveFormsModule],
  templateUrl: './calendar-controller.component.html',
  styleUrl: './calendar-controller.component.scss',
})
export class CalendarControllerComponent {
  @Input() group!: string;
  @Input() name!: string;
  @Input() format: string = 'dd/mm/yy';
  @Input() minDate!: Date;
  @Input() maxDate!: Date;
  @Input() placeholder!: string;

  FormControlVal!: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}
  ngOnInit(): void {
    this.FormControlVal = this.rootFormGroup.control.get(
      this.group
    ) as FormGroup;
  }
}
