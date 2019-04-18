import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent {
  @Input() title: String;
  @Input() cards: [];

  filterByState = card => {
    return card.state === this.title;
  }
}
