import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-hours',
  templateUrl: './total-hours.component.html',
  styleUrls: ['./total-hours.component.scss']
})
export class TotalHoursComponent {
  @Input() hours: number;
}
