import { NgClass } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() id: number = 0;
  @Input() img: string = '';
}
