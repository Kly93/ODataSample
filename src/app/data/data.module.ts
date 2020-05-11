import { NgModule } from '@angular/core';
import { ProductService } from './CatalogService/product.service';

@NgModule({
    providers: [
      ProductService
    ]
  })
  export class DataModule {}
