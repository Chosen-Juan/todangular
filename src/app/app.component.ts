import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  states = [
    {
      title: 'Planned',
      cards: []
    },
    {
      title: 'In Progress',
      cards: []
    },
    {
      title: 'Done',
      cards: []
    }
  ];
}
