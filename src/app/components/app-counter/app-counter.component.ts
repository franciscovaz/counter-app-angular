import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './app-counter.component.html',
  styleUrls: ['./app-counter.component.css'],
})
export class AppCounterComponent implements OnInit {
  counter: number;

  constructor() {}

  ngOnInit(): void {
    this.counter = 0;
  }

  increment(): void {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
