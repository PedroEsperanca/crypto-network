/* tslint:disable */
import {
  App,
  User
} from '../index';

declare var Object: any;
export interface OrganizationInterface {
  id?: string;
  name?: string;
  description?: string;
  photoUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
  photo?: any;
  roles?: Array<any>;
  s3Photo?: Array<any>;
  apps?: Array<App>;
  users?: Array<User>;
  oauthApps?: Array<any>;
}

export class Organization implements OrganizationInterface {
  id: string;
  name: string;
  description: string;
  photoUrl: string;
  createdAt: Date;
  updatedAt: Date;
  photo: any;
  roles: Array<any>;
  s3Photo: Array<any>;
  apps: Array<App>;
  users: Array<User>;
  oauthApps: Array<any>;
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
        id: {
          name: 'id',
          type: 'string'
        },
        name: {
          name: 'name',
          type: 'string'
        },
        description: {
          name: 'description',
          type: 'string'
        },
        photoUrl: {
          name: 'photoUrl',
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
        photo: {
          name: 'photo',
          type: 'any'
        },
      },
      relations: {
        roles: {
          name: 'roles',
          type: 'Array<any>',
          model: ''
        },
        s3Photo: {
          name: 's3Photo',
          type: 'Array<any>',
          model: ''
        },
        apps: {
          name: 'apps',
          type: 'Array<App>',
          model: 'App'
        },
        users: {
          name: 'users',
          type: 'Array<User>',
          model: 'User'
        },
        oauthApps: {
          name: 'oauthApps',
          type: 'Array<any>',
          model: ''
        },
      }
    }
  }
}
