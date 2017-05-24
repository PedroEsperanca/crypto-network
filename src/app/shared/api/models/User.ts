/* tslint:disable */
import {
  Organization,
  App
} from '../index';

declare var Object: any;
export interface UserInterface {
  "name"?: string;
  "emailPreferences"?: string;
  "notifications"?: any;
  "photo"?: any;
  "realm"?: string;
  "username"?: string;
  "password": string;
  "email"?: string;
  "emailVerified"?: boolean;
  "verificationToken"?: string;
  "id"?: any;
  "emailAddresses"?: Array<any>;
  "phoneNumbers"?: Array<any>;
  "phone"?: string;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  emails?: any[];
  phones?: any[];
  s3Photo?: any[];
  identities?: any[];
  credentials?: any[];
  accessTokens?: any[];
  organizations?: Organization[];
  apps?: App[];
  oAuthClientApplications?: any[];
}

export class User implements UserInterface {
  "name": string;
  "emailPreferences": string;
  "notifications": any;
  "photo": any;
  "realm": string;
  "username": string;
  "password": string;
  "email": string;
  "emailVerified": boolean;
  "verificationToken": string;
  "id": any;
  "emailAddresses": Array<any>;
  "phoneNumbers": Array<any>;
  "phone": string;
  "createdAt": Date;
  "updatedAt": Date;
  emails: any[];
  phones: any[];
  s3Photo: any[];
  identities: any[];
  credentials: any[];
  accessTokens: any[];
  organizations: Organization[];
  apps: App[];
  oAuthClientApplications: any[];
  constructor(data?: UserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `User`.
   */
  public static getModelName() {
    return "User";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of User for dynamic purposes.
  **/
  public static factory(data: UserInterface): User{
    return new User(data);
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
      name: 'User',
      plural: 'users',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "emailPreferences": {
          name: 'emailPreferences',
          type: 'string',
          default: 'marketing'
        },
        "notifications": {
          name: 'notifications',
          type: 'any'
        },
        "photo": {
          name: 'photo',
          type: 'any'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "verificationToken": {
          name: 'verificationToken',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "emailAddresses": {
          name: 'emailAddresses',
          type: 'Array&lt;any&gt;',
          default: <any>[]
        },
        "phoneNumbers": {
          name: 'phoneNumbers',
          type: 'Array&lt;any&gt;',
          default: <any>[]
        },
        "phone": {
          name: 'phone',
          type: 'string'
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
        emails: {
          name: 'emails',
          type: 'any[]',
          model: '',
          relationType: 'embedsMany',
          keyFrom: 'emailAddresses',
          keyTo: 'id'
        },
        phones: {
          name: 'phones',
          type: 'any[]',
          model: '',
          relationType: 'embedsMany',
          keyFrom: 'phoneNumbers',
          keyTo: 'id'
        },
        s3Photo: {
          name: 's3Photo',
          type: 'any[]',
          model: '',
          relationType: 'embedsOne',
          keyFrom: 'photo',
          keyTo: 'id'
        },
        identities: {
          name: 'identities',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
          keyFrom: 'id',
          keyTo: 'userId'
        },
        credentials: {
          name: 'credentials',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
          keyFrom: 'id',
          keyTo: 'userId'
        },
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
          keyFrom: 'id',
          keyTo: 'userId'
        },
        organizations: {
          name: 'organizations',
          type: 'Organization[]',
          model: 'Organization',
          relationType: 'hasMany',
          keyFrom: 'id',
          keyTo: 'userId'
        },
        apps: {
          name: 'apps',
          type: 'App[]',
          model: 'App',
          relationType: 'hasMany',
          keyFrom: 'id',
          keyTo: 'userId'
        },
        oAuthClientApplications: {
          name: 'oAuthClientApplications',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
          keyFrom: 'id',
          keyTo: 'userId'
        },
      }
    }
  }
}
