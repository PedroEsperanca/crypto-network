/* tslint:disable */
import {
  Organization,
  App
} from '../index';

declare var Object: any;
export interface UserInterface {
  "name"?: any;
  "emailPreferences"?: any;
  "notifications"?: any;
  "photo"?: any;
  "realm"?: any;
  "username"?: any;
  "password": any;
  "email"?: any;
  "emailVerified"?: any;
  "verificationToken"?: any;
  "id"?: any;
  "emailAddresses"?: any;
  "phoneNumbers"?: any;
  "phone"?: any;
  "createdAt"?: any;
  "updatedAt"?: any;
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
  "name": any;
  "emailPreferences": any;
  "notifications": any;
  "photo": any;
  "realm": any;
  "username": any;
  "password": any;
  "email": any;
  "emailVerified": any;
  "verificationToken": any;
  "id": any;
  "emailAddresses": any;
  "phoneNumbers": any;
  "phone": any;
  "createdAt": any;
  "updatedAt": any;
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
      properties: {
        "name": {
          name: 'name',
          type: 'any'
        },
        "emailPreferences": {
          name: 'emailPreferences',
          type: 'any',
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
          type: 'any'
        },
        "username": {
          name: 'username',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'any'
        },
        "email": {
          name: 'email',
          type: 'any'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'any'
        },
        "verificationToken": {
          name: 'verificationToken',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "emailAddresses": {
          name: 'emailAddresses',
          type: 'any',
          default: <any>[]
        },
        "phoneNumbers": {
          name: 'phoneNumbers',
          type: 'any',
          default: <any>[]
        },
        "phone": {
          name: 'phone',
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
        emails: {
          name: 'emails',
          type: 'any[]',
          model: ''
        },
        phones: {
          name: 'phones',
          type: 'any[]',
          model: ''
        },
        s3Photo: {
          name: 's3Photo',
          type: 'any[]',
          model: ''
        },
        identities: {
          name: 'identities',
          type: 'any[]',
          model: ''
        },
        credentials: {
          name: 'credentials',
          type: 'any[]',
          model: ''
        },
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        organizations: {
          name: 'organizations',
          type: 'Organization[]',
          model: 'Organization'
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
