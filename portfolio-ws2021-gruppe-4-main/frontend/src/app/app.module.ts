import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from '../lib/feature/board/board.component';
import { ColumnComponent } from '../lib/feature/column/column.component';
import { ItemComponent } from '../lib/feature/item/item.component';
import { createButtonComponent } from '../lib/ui/createButton/createButton.component';
import { AutoFocusDirectiveDirective } from './auto-focus-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ColumnComponent,
    createButtonComponent,
    BoardComponent,
    AutoFocusDirectiveDirective
  ],

  imports: [
    BrowserModule, AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
