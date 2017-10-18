/* tslint:disable */
import {
  User,
  Organization
} from '../index';

declare var Object: any;
export interface AppInterface {
  "id"?: string;
  "name"?: string;
  "logo"?: any;
  "userId"?: any;
  "organizationId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "slug"?: string;
  "options"?: any;
  user?: User;
  organization?: Organization;
  s3Photo?: any[];
  option?: any[];
}

export class App implements AppInterface {
  "id": string;
  "name": string;
  "logo": any;
  "userId": any;
  "organizationId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "slug": string;
  "options": any;
  user: User;
  organization: Organization;
  s3Photo: any[];
  option: any[];
  constructor(data?: AppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `App`.
   */
  public static getModelName() {
    return "App";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of App for dynamic purposes.
  **/
  public static factory(data: AppInterface): App{
    return new App(data);
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
      name: 'App',
      plural: 'Apps',
      path: 'Apps',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "logo": {
          name: 'logo',
          type: 'any'
        },
        "userId": {
          name: 'userId',
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
        "options": {
          name: 'options',
          type: 'any'
        },
      },
      relations: {
        user: {
          name: 'user',
          type: 'User',
          model: 'User',
          relationType: 'belongsTo',
                  keyFrom: 'userId',
          keyTo: 'id'
        },
        organization: {
          name: 'organization',
          type: 'Organization',
          model: 'Organization',
          relationType: 'belongsTo',
                  keyFrom: 'organizationId',
          keyTo: 'id'
        },
        s3Photo: {
          name: 's3Photo',
          type: 'any[]',
          model: '',
          relationType: 'embedsOne',
                  keyFrom: 'logo',
          keyTo: 'id'
        },
        option: {
          name: 'option',
          type: 'any[]',
          model: '',
          relationType: 'embedsOne',
                  keyFrom: 'options',
          keyTo: 'id'
        },
      }
    }
  }
}
