/* tslint:disable */
import {
  StripeCustomer,
  StripeSource,
  StripeCharge,
  Organization,
  Contact,
  App,
  OAuthApp
} from '../index';

declare var Object: any;
export interface UserInterface {
  "name"?: string;
  "emailPreferences"?: string;
  "notifications"?: any;
  "realm"?: string;
  "username"?: string;
  "emailVerified"?: boolean;
  "id"?: any;
  "emailAddresses"?: Array<any>;
  "phoneNumbers"?: Array<any>;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "photo"?: any;
  "slug"?: string;
  "password"?: string;
  emails?: any[];
  phones?: any[];
  s3Photo?: any[];
  stripeCustomer?: StripeCustomer;
  stripeSources?: StripeSource[];
  stripeCharges?: StripeCharge[];
  identities?: any[];
  credentials?: any[];
  accessTokens?: any[];
  roles?: any[];
  organizations?: Organization[];
  contacts?: Contact[];
  invitations?: any[];
  apps?: App[];
  oAuthClientApplications?: OAuthApp[];
}

export class User implements UserInterface {
  "name": string;
  "emailPreferences": string;
  "notifications": any;
  "realm": string;
  "username": string;
  "emailVerified": boolean;
  "id": any;
  "emailAddresses": Array<any>;
  "phoneNumbers": Array<any>;
  "createdAt": Date;
  "updatedAt": Date;
  "photo": any;
  "slug": string;
  "password": string;
  emails: any[];
  phones: any[];
  s3Photo: any[];
  stripeCustomer: StripeCustomer;
  stripeSources: StripeSource[];
  stripeCharges: StripeCharge[];
  identities: any[];
  credentials: any[];
  accessTokens: any[];
  roles: any[];
  organizations: Organization[];
  contacts: Contact[];
  invitations: any[];
  apps: App[];
  oAuthClientApplications: OAuthApp[];
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
      path: 'users',
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
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
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
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
        "photo": {
          name: 'photo',
          type: 'any'
        },
        "slug": {
          name: 'slug',
          type: 'string'
        },
        "password": {
          name: 'password',
          type: 'string'
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
        stripeCustomer: {
          name: 'stripeCustomer',
          type: 'StripeCustomer',
          model: 'StripeCustomer',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        stripeSources: {
          name: 'stripeSources',
          type: 'StripeSource[]',
          model: 'StripeSource',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'customer'
        },
        stripeCharges: {
          name: 'stripeCharges',
          type: 'StripeCharge[]',
          model: 'StripeCharge',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'customer'
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
        roles: {
          name: 'roles',
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
          modelThrough: 'UserRole',
          keyThrough: 'organizationId',
          keyFrom: 'id',
          keyTo: 'userId'
        },
        contacts: {
          name: 'contacts',
          type: 'Contact[]',
          model: 'Contact',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        invitations: {
          name: 'invitations',
          type: 'any[]',
          model: '',
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
          type: 'OAuthApp[]',
          model: 'OAuthApp',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
      }
    }
  }
}
