import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPrintModule } from 'ngx-print';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from 'libs/ui/welcome/src/lib/nx-welcome.component';
import { GeneratePDFComponent } from './generate-pdf/generate-pdf.component';
import { DataComponent } from './data/data.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    GeneratePDFComponent,
    DataComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    NgxPrintModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          children: [
            { path: '', redirectTo: 'pdf', pathMatch: 'full' },
            {
              path: 'pdf',
              component: GeneratePDFComponent,
              children: [{ path: 'invoice', component: InvoiceComponent }],
            },
          ],
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
