/* tslint:disable */
import {
  User,
  Organization
} from '../index';

declare var Object: any;
export interface AppInterface {
  "id"?: any;
  "name"?: any;
  "userId"?: any;
  "organizationId"?: any;
  "createdAt"?: any;
  "updatedAt"?: any;
  "_options"?: any;
  user?: User;
  organization?: Organization;
  options?: any[];
}

export class App implements AppInterface {
  "id": any;
  "name": any;
  "userId": any;
  "organizationId": any;
  "createdAt": any;
  "updatedAt": any;
  "_options": any;
  user: User;
  organization: Organization;
  options: any[];
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
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "name": {
          name: 'name',
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
          type: 'any'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'any'
        },
        "_options": {
          name: '_options',
          type: 'any'
        },
      },
      relations: {
        user: {
          name: 'user',
          type: 'User',
          model: 'User'
        },
        organization: {
          name: 'organization',
          type: 'Organization',
          model: 'Organization'
        },
        options: {
          name: 'options',
          type: 'any[]',
          model: ''
        },
      }
    }
  }
}
