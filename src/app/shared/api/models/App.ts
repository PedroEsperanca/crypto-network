/* tslint:disable */
import {
  Organization,
  User
} from '../index';

declare var Object: any;
export interface AppInterface {
  id?: string;
  name?: string;
  organizationId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  _options?: any;
  userId?: any;
  organization?: Organization;
  options?: Array<any>;
  user?: User;
}

export class App implements AppInterface {
  id: string;
  name: string;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
  _options: any;
  userId: any;
  organization: Organization;
  options: Array<any>;
  user: User;
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
        id: {
          name: 'id',
          type: 'string'
        },
        name: {
          name: 'name',
          type: 'string'
        },
        organizationId: {
          name: 'organizationId',
          type: 'string'
        },
        createdAt: {
          name: 'createdAt',
          type: 'Date'
        },
        updatedAt: {
          name: 'updatedAt',
          type: 'Date'
        },
        _options: {
          name: '_options',
          type: 'any'
        },
        userId: {
          name: 'userId',
          type: 'any'
        },
      },
      relations: {
        organization: {
          name: 'organization',
          type: 'Organization',
          model: 'Organization'
        },
        options: {
          name: 'options',
          type: 'Array<any>',
          model: ''
        },
        user: {
          name: 'user',
          type: 'User',
          model: 'User'
        },
      }
    }
  }
}
