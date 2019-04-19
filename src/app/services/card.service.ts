import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  id: number = 0;
  public cards = [{
    id: 3,
    title: 'sadasdas',
    description: 'asdasdas',
    estimate: 3,
    state: 'Planned'
  }];
  createCard(title: String, description: String, estimate: number, state: String) {
    this.id++;
    return {
      id: this.id,
      title, description, estimate, state
    };
  }

  moveCard(cardId: number, newState: string) {
    const card = this.cards.find(c => c.id === cardId);
    card.state = newState;
  }

}
