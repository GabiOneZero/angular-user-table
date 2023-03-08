import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    TableComponent,
    HttpClientModule
  ]
})
export class TableModule { }
