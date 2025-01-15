import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  currentIndex = 0;

  get currentItem() {
    return this.items[this.currentIndex];
  }

  navigate(direction: string) {
    if (direction === 'up') {
      alert('Navigating up');
    } else if (direction === 'down') {
      alert('Navigating down');
    } else if (direction === 'left') {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    } else if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }
  }
}
