import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator'; 

const MATERIAL_ELEMENTS = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDividerModule,
  MatButtonToggleModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_ELEMENTS
  ],
  exports: [MATERIAL_ELEMENTS]
})
export class MaterialModule { }
