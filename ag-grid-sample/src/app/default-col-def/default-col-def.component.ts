import { GridApi, ColDef, GridReadyEvent, ITooltipParams, SuppressKeyboardEventParams, ValueSetterParams, ValueGetterParams, NewValueParams, CellClickedEvent, CellDoubleClickedEvent } from 'ag-grid-community';
import { ChangeDetectionStrategy, Component } from '@angular/core';

const carMappings = {
  us: 'United States',
};

@Component({
  selector: 'app-default-col-def',
  templateUrl: './default-col-def.component.html',
  styleUrls: ['./default-col-def.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultColDefComponent {
  gridApi!: GridApi;
  rowData: any[] = [
    {
      "athlete": "Michael Phelps",
      "age": 23,
      "country": "us",
      "year": 2008,
      "date": "24/08/2008",
      "sport": "Swimming",
      "gold": 8,
      "silver": 0,
      "bronze": 0,
      "total": 8
  }, {
      "athlete": "Michael Phelps",
      "age": 19,
      "country": "us",
      "year": 2004,
      "date": "29/08/2004",
      "sport": "Swimming",
      "gold": 6,
      "silver": 0,
      "bronze": 2,
      "total": 8
  }, {
      "athlete": "Michael Phelps",
      "age": 27,
      "country": "us",
      "year": 2012,
      "date": "12/08/2012",
      "sport": "Swimming",
      "gold": 4,
      "silver": 2,
      "bronze": 0,
      "total": 6
  },
];

  defaultColDef: ColDef = {
    autoHeaderHeight: true,
    autoHeight: true,
    cellEditorPopup: true,
    cellEditorPopupPosition: 'under',
    cellClass: 'cell',
    flex: 1,
    filter: true,
    resizable: true,
    sortable: true,
    editable: true,
    suppressMenu: false,
    // lockVisible: true,
    // lockPinned: true,

  };

columnDefs: ColDef[] = [
  {
    headerName: 'country',
    field: 'country',
    singleClickEdit: false,
    onCellClicked: (event: CellClickedEvent<any>) => {
      console.log(1, {event})
    },
    onCellDoubleClicked: (event: CellDoubleClickedEvent<any>) => {
      console.log(2, {event})
    }
  },
    {
      headerName: 'year',
      field: 'year',
    },
  ];

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

}
