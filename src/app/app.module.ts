import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { OptionChainComponent } from './option-chain/option-chain.component';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OptionChainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
