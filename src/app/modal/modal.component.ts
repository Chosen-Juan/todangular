import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() addCard: Function;
  private registerForm: FormGroup;
  private open: boolean = false;
  private submitted: boolean = false;

  constructor(private cardService: CardService, private formBuilder: FormBuilder) {}

  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      description: ['', [Validators.required, Validators.maxLength(150)]],
      estimate: [0, [Validators.required, Validators.min(1)]],
      state: ['Planned', Validators.required]
    });
  }

  toggle() {
    this.open = !this.open;
  }

  save() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const { title, description, estimate, state } = this.registerForm.value;
    const card = this.cardService.createCard(title, description, estimate, state);
    this.addCard(card);
    this.toggle();
  }

}
