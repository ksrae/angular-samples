import { GridApi, ColDef, GridReadyEvent } from 'ag-grid-community';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AgGridCustomLoaderComponent } from './ag-grid-custom-loader/ag-grid-custom-loader.component';

@Component({
  selector: 'app-custom-loader',
  templateUrl: './custom-loader.component.html',
  styleUrls: ['./custom-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomLoaderComponent {
  gridApi!: GridApi;
  loadingOverlayComponent: any = AgGridCustomLoaderComponent;
  loadingOverlayComponentParams: any = {
    loadingMessage: 'One moment please...',
  };

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
    this.gridApi?.showLoadingOverlay();

    setTimeout(() => {
      this.gridApi?.hideOverlay();
    }, 5000);
  }
}
