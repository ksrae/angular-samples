import { ChangeDetectionStrategy, Component } from '@angular/core';
import {  ILoadingOverlayAngularComp } from "ag-grid-angular";
import {  ILoadingOverlayParams } from "ag-grid-community";

@Component({
  selector: 'app-ag-grid-custom-loader',
  templateUrl: './ag-grid-custom-loader.component.html',
  styleUrls: ['./ag-grid-custom-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgGridCustomLoaderComponent implements ILoadingOverlayAngularComp {
  public params!: ILoadingOverlayParams & { loadingMessage: string };

  agInit(params: ILoadingOverlayParams & { loadingMessage: string }): void {
    this.params = params;
  }
}
