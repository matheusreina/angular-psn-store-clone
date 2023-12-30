import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  gameCover: string = '';

  // Card Label
  @Input()
  gameLabel: string = '';

  // Card Pricing
  @Input()
  gameType: string = 'Digital PS5';
  @Input()
  gamePrice: string = 'R$ 349,90';

  constructor() {}

  ngOnInit(): void {}
}
