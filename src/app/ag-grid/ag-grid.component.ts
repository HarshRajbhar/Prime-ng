import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.scss',
})
export class AgGridComponent {
  rowData: any[] = [];
  // [
  //   { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
  //   { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
  //   { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  // ];
  // constructor(private http: HttpClient) {}
  http = inject(HttpClient);
  ngOnInit(): void {
    this.onGridReady();
    console.log(this.rowData);
    // throw new Error('Method not implemented.');
  }
  onGridReady() {
    this.http
      .get<any[]>(
        'https://www.ag-grid.com/example-assets/space-mission-data.json'
      )
      .subscribe((data) => {
        this.rowData = data;
        console.log(data);
        
      });
  }

  // Column Definitions: Defines & controls grid columns.
  colDefs: any[] = [
    { field: 'mission' },
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    { field: 'price' },
    { field: 'successful' },
    { field: 'rocket' },
  ];
}
