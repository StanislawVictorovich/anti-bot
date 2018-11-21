import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ModalModule.forRoot(),
    ],
  declarations: [ 
    AppComponent, 
    ModalComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
