import { GridApi, ColDef, GridReadyEvent } from 'ag-grid-community';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CellEditorComponent } from './cell-editor/cell-editor.component';

@Component({
  selector: 'app-edit-by-outer-command',
  templateUrl: './edit-by-outer-command.component.html',
  styleUrls: ['./edit-by-outer-command.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditByOuterCommandComponent {
  gridApi!: GridApi;
  rowData: any[] = [
    { id: 1, key: 'a', },
    { id: 2, key: 'b',},
    { id: 3, key: 'c', },
];

  defaultColDef: ColDef = {
    flex: 1,
    editable: true,
  };

  columnDefs: ColDef[] = [
    {
      headerName: 'ID',
      field: 'id',
    },
    {
      headerName: 'KEY',
      field: 'key',
      cellEditorSelector: () => {
        return {
          component: CellEditorComponent,
        };
      }
    },
  ]

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  addKey() {
    const rowData = [
      ...this.rowData,
      { key: ''}
    ];

    this.gridApi.setRowData(rowData);

    this.gridApi.setFocusedCell(this.gridApi.getDisplayedRowCount()-1, 'key', undefined);

    this.gridApi.startEditingCell({
      rowIndex: this.gridApi.getDisplayedRowCount()-1,
      colKey: 'key',
      // set to 'top', 'bottom' or undefined
      rowPinned: undefined,
      key: undefined,
      charPress: undefined
    });
  }

    /**
   * If the new value is not null, add the row to the grid.
   * @param {any} e - any - the event object
   */
  onCellEditingStopped(e: any) {
    let updateData = [
      ...this.rowData,

    ]

    if(e.data?.key) {
      updateData = [
        ...updateData,
        e.data
      ]
    }

    this.setRowData(updateData);
  }

  setRowData(rowData: any[] = []) {
    this.gridApi?.setRowData(rowData);
    this.rowData = [...rowData];
  }
}
