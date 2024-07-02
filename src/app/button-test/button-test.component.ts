import { Component } from '@angular/core';

@Component({
  selector: 'app-button-test',
  templateUrl: './button-test.component.html',
  styleUrl: './button-test.component.scss'
})
export class ButtonTestComponent {
  buttonTitle = 'title do botão';
  buttonDisabled = false;

  onButtonClick() {
    this.buttonTitle = 'botão clicado';

    this.buttonDisabled = !this.buttonDisabled;
  }
}
