/* tslint:disable */
import {
  User,
  App
} from '../index';

declare var Object: any;
export interface OrganizationInterface {
  "id"?: string;
  "name"?: string;
  "displayName"?: string;
  "description"?: string;
  "logo"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  users?: User[];
  roles?: any[];
  s3Photo?: any[];
  apps?: App[];
  oAuthClientApplications?: any[];
}

export class Organization implements OrganizationInterface {
  "id": string;
  "name": string;
  "displayName": string;
  "description": string;
  "logo": any;
  "createdAt": Date;
  "updatedAt": Date;
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
        "displayName": {
          name: 'displayName',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "logo": {
          name: 'logo',
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
      },
      relations: {
        users: {
          name: 'users',
          type: 'User[]',
          model: 'User',
          relationType: 'hasMany',
          keyFrom: 'id',
          keyTo: 'organizationId'
        },
        roles: {
          name: 'roles',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
          keyFrom: 'id',
          keyTo: 'organizationId'
        },
        s3Photo: {
          name: 's3Photo',
          type: 'any[]',
          model: '',
          relationType: 'embedsOne',
          keyFrom: 'logo',
          keyTo: 'id'
        },
        apps: {
          name: 'apps',
          type: 'App[]',
          model: 'App',
          relationType: 'hasMany',
          keyFrom: 'id',
          keyTo: 'organizationId'
        },
        oAuthClientApplications: {
          name: 'oAuthClientApplications',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
          keyFrom: 'id',
          keyTo: 'organizationId'
        },
      }
    }
  }
}
