import { NgModule } from '@angular/core';
import {NativeDateAdapter} from "@angular/material";
import {DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

class CustomDateAdapter extends NativeDateAdapter {
   format(date: Date, displayFormat: Object): string {
     const day = date.getDate();
     const month = date.getMonth() + 1;
     const year = date.getFullYear();
     return `${day}/${month}/${year}`;
   }
}

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
   providers: [
      { provide: DateAdapter, useClass: CustomDateAdapter },
      { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
   ]
})
export class CustomdatepickerModule { }
