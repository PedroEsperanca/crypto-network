/* tslint:disable */
import {
  Organization,
  User
} from '../index';

declare var Object: any;
export interface ProductInterface {
  "name"?: string;
  "description"?: string;
  "price"?: number;
  "currency"?: string;
  "id"?: any;
  "organizationId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "slug"?: string;
  "image"?: any;
  organization?: Organization;
  shoppingCard?: User[];
  whishList?: User[];
  s3Photo?: any[];
}

export class Product implements ProductInterface {
  "name": string;
  "description": string;
  "price": number;
  "currency": string;
  "id": any;
  "organizationId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "slug": string;
  "image": any;
  organization: Organization;
  shoppingCard: User[];
  whishList: User[];
  s3Photo: any[];
  constructor(data?: ProductInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Product`.
   */
  public static getModelName() {
    return "Product";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Product for dynamic purposes.
  **/
  public static factory(data: ProductInterface): Product{
    return new Product(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Product',
      plural: 'Products',
      path: 'Products',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "price": {
          name: 'price',
          type: 'number'
        },
        "currency": {
          name: 'currency',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "organizationId": {
          name: 'organizationId',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
        "slug": {
          name: 'slug',
          type: 'string'
        },
        "image": {
          name: 'image',
          type: 'any'
        },
      },
      relations: {
        organization: {
          name: 'organization',
          type: 'Organization',
          model: 'Organization',
          relationType: 'belongsTo',
                  keyFrom: 'organizationId',
          keyTo: 'id'
        },
        shoppingCard: {
          name: 'shoppingCard',
          type: 'User[]',
          model: 'User',
          relationType: 'hasMany',
          modelThrough: 'userProduct',
          keyThrough: 'userId',
          keyFrom: 'id',
          keyTo: 'productId'
        },
        whishList: {
          name: 'whishList',
          type: 'User[]',
          model: 'User',
          relationType: 'hasMany',
          modelThrough: 'userProduct',
          keyThrough: 'userId',
          keyFrom: 'id',
          keyTo: 'productId'
        },
        s3Photo: {
          name: 's3Photo',
          type: 'any[]',
          model: '',
          relationType: 'embedsOne',
                  keyFrom: 'image',
          keyTo: 'id'
        },
      }
    }
  }
}
