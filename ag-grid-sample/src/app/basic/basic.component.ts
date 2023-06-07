import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GridApi, ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent {
  gridApi!: GridApi;
  rowData: any[] = [
    { id: 1, key: 'a', },
    { id: 2, key: 'b',},
    { id: 3, key: 'c', },
];

  defaultColDef: ColDef = {
    flex: 1,
  };

  columnDefs: ColDef[] = [
    {
      headerName: 'ID',
      field: 'id',
    },
    {
      headerName: 'KEY',
      field: 'key',
    },
  ]

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
}
