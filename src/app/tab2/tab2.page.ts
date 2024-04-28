import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  peso: string = '';
  altura: string = '';
  resultado: string = '';

  constructor(private alertController: AlertController) {}

  calcularIMC() {
    let p = parseFloat(this.peso);
    let a = parseFloat(this.altura);

    let imc = p / (a * a);

    let result;

    if (imc < 18.5) {
      result = 'Abaixo do peso';
    } else if (18.6 < imc && imc < 24.9) {
      result = 'Peso normal';
    } else if (25.0 < imc && imc < 29.9) {
      result = 'Acima do peso';
    } else if (30.0 < imc && imc < 34.9) {
      result = 'Obesidade grau I ';
    } else if (35.0 < imc && imc < 39.9) {
      result = 'Obesidade grau II (severa)';
    } else {
      result = 'Obesidade grau III (mórbida)';
    }
    
    
    this.resultado = result;

    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.resultado,
      buttons: ['Voltar']
    });

    await alert.present();
  }
}