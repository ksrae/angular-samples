import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxsModule } from '@ngxs/store';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsWebsocketPluginModule } from '@ngxs/websocket-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountState } from './services/count/count.state';
import { MessagesState } from './services/message/message.state';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      CountState,
      MessagesState
    ]),
    // NgxsStoragePluginModule.forRoot({
    //   // key: [CountState]
    // }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    NgxsSelectSnapshotModule.forRoot(),
    NgxsWebsocketPluginModule.forRoot({
      url: 'ws://localhost:8000'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
