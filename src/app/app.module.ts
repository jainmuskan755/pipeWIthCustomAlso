import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SqrtPipe } from './sqrtPipe.component';
import { HighlightSearch } from './highlight.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filtrr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    HighlightSearch,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
