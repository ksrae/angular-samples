import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICellEditorAngularComp } from "ag-grid-angular";
import { GridApi } from "ag-grid-community";

@Component({
  selector: 'app-cell-editor',
  templateUrl: './cell-editor.component.html',
  styleUrls: ['./cell-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellEditorComponent implements ICellEditorAngularComp {

  gridApi!: GridApi;
  editorForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  agInit(params: any): void {
    this.gridApi = params.value;
    console.log('editor on')

    this.editorForm = this.fb.group({
      key: ['', [Validators.required]]
    })

  }
  get keyControl() { return this.editorForm.controls['key']; }

  getValue(): any {
    return this.keyControl.value;
  }
  /**
   * If the user presses the enter key, and the form is invalid, mark the form as dirty, set the value
   * to an empty string, and set the error to required. If the form is valid, but the value is a
   * duplicate, set the error to duplicated. If the form is valid and the value is not a duplicate,
   * stop editing the grid.
   * @param {any} event - any - the event object that is passed to the function
   * @returns The value of the attribute.
   */
  onKeyDown(event: any): void {
    //

    if(event.key === 'Enter') {
      // invalid of duplicated
      event.preventDefault();
      this.set();
    }
  }

  set() {
    if(!this.editorForm.valid) {
      this.keyControl?.setErrors({required: true});
      return;
    } else {
      this.gridApi.stopEditing(false);
    }
  }
}


