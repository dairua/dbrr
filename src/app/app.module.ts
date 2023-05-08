import { DialogAllModule } from '@syncfusion/ej2-angular-popups';

import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';

import { ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { DiagramAllModule, SymbolPaletteAllModule, OverviewAllModule } from '@syncfusion/ej2-angular-diagrams';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';

import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';

import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';

import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { NumericTextBoxModule, ColorPickerModule, UploaderModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

import { ButtonModule, CheckBoxModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DiagramAllModule, 
    ChartAllModule, 
    GridAllModule, 
    SymbolPaletteAllModule, 
    OverviewAllModule, 
    ButtonModule, 
    ColorPickerModule, 
    DateRangePickerModule, 
    CheckBoxModule, 
    AccumulationChartModule, 
    BrowserModule,
    ToolbarModule, 
    DropDownButtonModule, 
    UploaderModule, 
    CircularGaugeModule, 
    DropDownListAllModule, 
    ListViewAllModule, 
    DialogAllModule, 
    TextBoxModule, 
    RadioButtonModule, 
    MultiSelectModule, 
    NumericTextBoxModule, 
    BrowserModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
