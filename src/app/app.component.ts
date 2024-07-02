import { Component } from '@angular/core';

interface IInput {
  infos: IInfos;
}

interface IInfos {
  type: string;
  placeholder: string;
  value: string;
  readonly: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  infos: IInfos = {
    type: 'text',
    value: '',
    placeholder: 'Habilite para digitar',
    readonly: true
  };

  habilitou() {
    this.infos.readonly = false;
  }

  desabilitou() {
    this.infos.readonly = true;
  }

  alertInputText() {
    const userConfirmed = confirm(`O texto digitado foi "${this.infos.value}" \n \n deseja excluir?`);
    if (userConfirmed) {
      this.infos.value = '';
    }
  }

  atualizarValor(event: Event) {
    const inputElement = (event.target as HTMLInputElement);
    this.infos.value = inputElement.value;
    //ou
    // const inputElement = (event.target as HTMLInputElement).value;
    // this.infos.value = inputElement;
  }

  limparInput() {
    if(this.infos.value === '') return
    const userConfirmed = confirm(`Deseja limpar o campo?`);
    if (userConfirmed) {
      this.infos.value = '';
    }
  }
}
