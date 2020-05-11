import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ODataModule } from 'angular-odata';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataConfig } from './data/data.config';
import { DataModule } from './data/data.module';
import { ProductComponent } from './components/product.component';


@NgModule({
  declarations: [
    ProductComponent,
    AppComponent
  ],
  imports: [
    ODataModule.forRoot(Object.assign(DataConfig, {baseUrl: 'https://7qveaeq0v1dnokqj-products-srv.cfapps.eu10.hana.ondemand.com/odata/v2/CatalogService/Products?$format=json'})),
    BrowserModule,
    AppRoutingModule,
    DataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
