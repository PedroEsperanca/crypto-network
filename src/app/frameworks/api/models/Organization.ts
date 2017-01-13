/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface OrganizationInterface {
  name?: string;
  description?: string;
  photo?: string;
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  _options?: any;
  options?: Array<any>;
  roles?: Array<any>;
  users?: Array<User>;
}

export class Organization implements OrganizationInterface {
  name: string;
  description: string;
  photo: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  _options: any;
  options: Array<any>;
  roles: Array<any>;
  users: Array<User>;
  constructor(data?: OrganizationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Organization`.
   */
  public static getModelName() {
    return "Organization";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Organization for dynamic purposes.
  **/
  public static factory(data: OrganizationInterface): Organization{
    return new Organization(data);
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
      name: 'Organization',
      plural: 'Organizations',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        description: {
          name: 'description',
          type: 'string'
        },
        photo: {
          name: 'photo',
          type: 'string'
        },
        id: {
          name: 'id',
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
      },
      relations: {
        options: {
          name: 'options',
          type: 'Array<any>',
          model: ''
        },
        roles: {
          name: 'roles',
          type: 'Array<any>',
          model: ''
        },
        users: {
          name: 'users',
          type: 'Array<User>',
          model: 'User'
        },
      }
    }
  }
}
