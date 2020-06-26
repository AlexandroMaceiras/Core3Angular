import { Component } from '@angular/core';

@Component({
  selector: 'app-seila-component',
  templateUrl: './seila.component.html'
})
export class SeilaComponent {
  public currentCount = 0;

  public incrementSeila() {
    this.currentCount++;
  }
}
