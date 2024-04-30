import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-calendar-controller',
  standalone: true,
  imports: [CalendarModule, ReactiveFormsModule],
  templateUrl: './calendar-controller.component.html',
  styleUrl: './calendar-controller.component.scss',
})
export class CalendarControllerComponent {
  formGroup = new FormGroup({
    date: new FormControl<Date | null>(null),
  });
}
