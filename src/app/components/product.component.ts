import { Component } from '@angular/core';
import { ODataEntitySetResource, ODataSettings, ODataClient } from 'angular-odata';

@Component({
    selector: 'products',
    template: `<p-table #table [columns]="cols" [value]="rows" [lazy]="true" (onLazyLoad)="loadPeopleLazy($event)" [paginator]="true" 
      [rows]="size" [totalRecords]="total" [loading]="loading">
      <ng-template pTemplate="header" let-columns>
          <tr>
              <th *ngFor="let col of columns" [pSortableColumn]="col.sort ? col.field : ''">
                {{col.header}}
                <p-sortIcon *ngIf="col.sort" [field]="col.field" ariaLabel="Activate to sort" ariaLabelDesc="Activate to sort in descending order" ariaLabelAsc="Activate to sort in ascending order"></p-sortIcon>
              </th>
          </tr>
          <tr>
              <th *ngFor="let col of columns" [ngSwitch]="col.field">
                <input *ngSwitchCase="'Name'" pInputText type="text" (input)="filter($event.target.value, col.field)">
                <input *ngSwitchCase="'AirlineCode'" pInputText type="text" (input)="filter($event.target.value, col.field)">
              </th>
          </tr>
      </ng-template>
      <ng-template pTemplate="body" let-rowData let-columns="columns">
          <tr>
              <td *ngFor="let col of columns">
                  {{rowData[col.field]}}
              </td>
          </tr>
      </ng-template>
  </p-table>`,
  })