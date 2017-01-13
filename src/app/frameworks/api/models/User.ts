/* tslint:disable */
import {
  Organization
} from '../index';

declare var Object: any;
export interface UserInterface {
  name?: string;
  photo?: string;
  notifications?: any;
  realm?: string;
  username?: string;
  password: string;
  email?: string;
  emailVerified?: boolean;
  verificationToken?: string;
  id?: number;
  emailAddresses?: Array<any>;
  phoneNumbers?: Array<any>;
  phone?: string;
  createdAt?: Date;
  updatedAt?: Date;
  accessTokens?: Array<any>;
  identities?: Array<any>;
  credentials?: Array<any>;
  organizations?: Array<Organization>;
  emails?: Array<any>;
  phones?: Array<any>;
}

export class User implements UserInterface {
  name: string;
  photo: string;
  notifications: any;
  realm: string;
  username: string;
  password: string;
  email: string;
  emailVerified: boolean;
  verificationToken: string;
  id: number;
  emailAddresses: Array<any>;
  phoneNumbers: Array<any>;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  accessTokens: Array<any>;
  identities: Array<any>;
  credentials: Array<any>;
  organizations: Array<Organization>;
  emails: Array<any>;
  phones: Array<any>;
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
        name: {
          name: 'name',
          type: 'string'
        },
        photo: {
          name: 'photo',
          type: 'string'
        },
        notifications: {
          name: 'notifications',
          type: 'any'
        },
        realm: {
          name: 'realm',
          type: 'string'
        },
        username: {
          name: 'username',
          type: 'string'
        },
        password: {
          name: 'password',
          type: 'string'
        },
        email: {
          name: 'email',
          type: 'string'
        },
        emailVerified: {
          name: 'emailVerified',
          type: 'boolean'
        },
        verificationToken: {
          name: 'verificationToken',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
        emailAddresses: {
          name: 'emailAddresses',
          type: 'Array&lt;any&gt;',
          default: <any>[]
        },
        phoneNumbers: {
          name: 'phoneNumbers',
          type: 'Array&lt;any&gt;',
          default: <any>[]
        },
        phone: {
          name: 'phone',
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
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'Array<any>',
          model: ''
        },
        identities: {
          name: 'identities',
          type: 'Array<any>',
          model: ''
        },
        credentials: {
          name: 'credentials',
          type: 'Array<any>',
          model: ''
        },
        organizations: {
          name: 'organizations',
          type: 'Array<Organization>',
          model: 'Organization'
        },
        emails: {
          name: 'emails',
          type: 'Array<any>',
          model: ''
        },
        phones: {
          name: 'phones',
          type: 'Array<any>',
          model: ''
        },
      }
    }
  }
}
