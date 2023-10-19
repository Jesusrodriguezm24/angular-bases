// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter</h1>',
// })
// export class CounterComponent {}
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter = {{ counter }}</h3>

    <button (click)="contar(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="contar(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 200;

  contar(num: number): void {
    this.counter += num;
  }

  resetCounter(): void {
    this.counter = 200;
  }
}
