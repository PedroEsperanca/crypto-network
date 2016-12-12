/* tslint:disable */
import {
  App
} from '../index';

declare var Object: any;
export interface UserInterface {
  name?: string;
  photo?: string;
  notifications?: any;
  emailVerified?: boolean;
  realm?: string;
  username?: string;
  password: string;
  challenges?: any;
  email: string;
  verificationToken?: string;
  status?: string;
  created?: Date;
  lastUpdated?: Date;
  id?: number;
  phone?: string;
  phoneVerificationToken?: string;
  phoneVerified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  accessTokens?: Array<any>;
  identities?: Array<any>;
  credentials?: Array<any>;
  apps?: Array<App>;
}

export class User implements UserInterface {
  name: string;
  photo: string;
  notifications: any;
  emailVerified: boolean;
  realm: string;
  username: string;
  password: string;
  challenges: any;
  email: string;
  verificationToken: string;
  status: string;
  created: Date;
  lastUpdated: Date;
  id: number;
  phone: string;
  phoneVerificationToken: string;
  phoneVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  accessTokens: Array<any>;
  identities: Array<any>;
  credentials: Array<any>;
  apps: Array<App>;
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
        emailVerified: {
          name: 'emailVerified',
          type: 'boolean',
          default: false
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
        credentials: {
          name: 'credentials',
          type: 'any'
        },
        challenges: {
          name: 'challenges',
          type: 'any'
        },
        email: {
          name: 'email',
          type: 'string'
        },
        verificationToken: {
          name: 'verificationToken',
          type: 'string'
        },
        status: {
          name: 'status',
          type: 'string'
        },
        created: {
          name: 'created',
          type: 'Date'
        },
        lastUpdated: {
          name: 'lastUpdated',
          type: 'Date'
        },
        id: {
          name: 'id',
          type: 'number'
        },
        phone: {
          name: 'phone',
          type: 'string'
        },
        phoneVerificationToken: {
          name: 'phoneVerificationToken',
          type: 'string'
        },
        phoneVerified: {
          name: 'phoneVerified',
          type: 'boolean',
          default: false
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
        apps: {
          name: 'apps',
          type: 'Array<App>',
          model: 'App'
        },
      }
    }
  }
}
