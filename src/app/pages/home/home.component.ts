import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardComponent, NgFor,NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cards = [
    {img:"assets/images/running.png",  title: "Working Daily", text: "Consistency builds strength, endurance, and unstoppable discipline." },
    {img:"assets/images/heart.png", title: "Heart Health", text: "A strong heart leads to a longer, healthier life." },
    {img:"assets/images/heart.png", title: "Make Your Family Healthy", text: "Inspire loved ones; create a legacy of health together." },
    {img:"assets/images/heart.png", title: "Achieve Fitness Goal", text: "Turn dreams into milestones through focused daily effort." }
  ]
}
