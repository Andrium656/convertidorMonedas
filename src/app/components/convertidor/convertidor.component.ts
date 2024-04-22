import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css'],
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;
  monedas: string[] = ['USD', 'EUR', 'COP'];
  constructor() {}

  ngOnInit(): void {}

  convertir() {
    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') this.total = this.cantidad;
        if (this.quiero === 'EUR') this.total = this.cantidad * 0.84;
        if (this.quiero === 'COP') this.total = this.cantidad * 3800;
        break;
      case 'EUR':
        if (this.quiero === 'USD') this.total = this.cantidad * 1.06;
        if (this.quiero === 'EUR') this.total = this.cantidad;
        if (this.quiero === 'COP') this.total = this.cantidad * 4165;
        break;
      case 'COP':
        if (this.quiero === 'USD') this.total = this.cantidad / 3800;
        this.total.toFixed(2);
        if (this.quiero === 'EUR') this.total = this.cantidad / 4165;
        this.total.toFixed(2);
        if (this.quiero === 'COP') this.total = this.cantidad;
        break;
    }
  }
}
