import { Component } from '@angular/core';
import { griddata } from '../../assets/big_data';

interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-prime-grid',
  templateUrl: './prime-grid.component.html',
  styleUrl: './prime-grid.component.scss',
})
export class PrimeGridComponent {
  products: Product[] = griddata;

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }
}
