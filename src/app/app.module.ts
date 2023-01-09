import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './pages/editor/editor.component';
import { EditorFunctionsComponent } from './componnents/editor/editor-functions/editor-functions.component';
import { HeaderComponent } from './pages/editor/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    EditorFunctionsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
