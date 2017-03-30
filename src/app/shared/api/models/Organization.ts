/* tslint:disable */
import {
  User,
  App
} from '../index';

declare var Object: any;
export interface OrganizationInterface {
  "id"?: any;
  "name"?: any;
  "displayName"?: any;
  "description"?: any;
  "logo"?: any;
  "createdAt"?: any;
  "updatedAt"?: any;
  users?: User[];
  roles?: any[];
  s3Photo?: any[];
  apps?: App[];
  oAuthClientApplications?: any[];
}

export class Organization implements OrganizationInterface {
  "id": any;
  "name": any;
  "displayName": any;
  "description": any;
  "logo": any;
  "createdAt": any;
  "updatedAt": any;
  users: User[];
  roles: any[];
  s3Photo: any[];
  apps: App[];
  oAuthClientApplications: any[];
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
        "id": {
          name: 'id',
          type: 'any'
        },
        "name": {
          name: 'name',
          type: 'any'
        },
        "displayName": {
          name: 'displayName',
          type: 'any'
        },
        "description": {
          name: 'description',
          type: 'any'
        },
        "logo": {
          name: 'logo',
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
      },
      relations: {
        users: {
          name: 'users',
          type: 'User[]',
          model: 'User'
        },
        roles: {
          name: 'roles',
          type: 'any[]',
          model: ''
        },
        s3Photo: {
          name: 's3Photo',
          type: 'any[]',
          model: ''
        },
        apps: {
          name: 'apps',
          type: 'App[]',
          model: 'App'
        },
        oAuthClientApplications: {
          name: 'oAuthClientApplications',
          type: 'any[]',
          model: ''
        },
      }
    }
  }
}
