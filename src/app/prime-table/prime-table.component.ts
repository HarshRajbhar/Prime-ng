import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';
import { ProductsData } from '../../assets/big_data';

interface Column {
  field: string;
  header: string;
}
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
  selector: 'app-prime-table',
  // standalone: true,
  // imports: [NgFor],
  templateUrl: './prime-table.component.html',
  styleUrl: './prime-table.component.scss',
})
export class PrimeTableComponent implements OnInit {
  products: any[] = ProductsData;
  cols: Column[] = [
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' },
    { field: 'vin', header: 'Vin' },
  ];
  matchModeOptions: SelectItem[] = [];
  constructor(private filterService: FilterService) {}
  ngOnInit(): void {
    const customFilterName = 'custom-equals';

    this.filterService.register(
      customFilterName,
      (value: any, filter: any): boolean => {
        if (filter === undefined || filter === null || filter.trim() === '') {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        return value.toString() == filter.toString();
      }
    );
    this.matchModeOptions = [
      { label: 'Custom Equals', value: customFilterName },
      { label: 'Starts With', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contains', value: FilterMatchMode.CONTAINS },
    ];
  }
  // getSeverity(status: string) {
  //   switch (status) {
  //     case 'INSTOCK':
  //       return 'success';
  //     case 'LOWSTOCK':
  //       return 'warning';
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //   }
  // }
}
