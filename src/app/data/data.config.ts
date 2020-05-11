import { ODataConfig } from 'angular-odata';
import { ProductMetaEntity } from './CatalogService/product.entity.meta';

export const DataConfig: ODataConfig  = {
    baseUrl: 'https://7qveaeq0v1dnokqj-products-srv.cfapps.eu10.hana.ondemand.com/odata/v2/CatalogService/Products?$format=json',
    metadataUrl: 'https://7qveaeq0v1dnokqj-products-srv.cfapps.eu10.hana.ondemand.com/odata/v2/CatalogService/$metadata',
    withCredentials: false,
    stringAsEnum: true,
    creation: new Date('2020-04-28T22:39:33.1350547-03:00'),
    version: '2.0',
    models: {
      },
    collections: {
      },
    metas: {
      'CatalogService.Products': ProductMetaEntity
    }
};
