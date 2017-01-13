/* tslint:disable */
import {
  User,
  Organization
} from '../index';

declare var Object: any;
export interface AppInterface {
  id?: string;
  clientType?: string;
  redirectURIs?: Array<string>;
  tokenEndpointAuthMethod?: string;
  grantTypes?: Array<string>;
  responseTypes?: Array<string>;
  tokenType?: string;
  clientSecret?: string;
  clientName?: string;
  clientURI?: string;
  logoURI?: string;
  scopes?: Array<string>;
  contacts?: Array<string>;
  tosURI?: string;
  policyURI?: string;
  jwksURI?: string;
  jwks?: string;
  softwareId?: string;
  softwareVersion?: string;
  realm?: string;
  name: string;
  description?: string;
  owner?: string;
  collaborators?: Array<string>;
  email?: string;
  emailVerified?: boolean;
  clientKey?: string;
  javaScriptKey?: string;
  restApiKey?: string;
  windowsKey?: string;
  masterKey?: string;
  pushSettings?: any;
  status?: string;
  created?: Date;
  modified?: Date;
  userId?: number;
  organizationId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  user?: User;
  organization?: Organization;
}

export class App implements AppInterface {
  id: string;
  clientType: string;
  redirectURIs: Array<string>;
  tokenEndpointAuthMethod: string;
  grantTypes: Array<string>;
  responseTypes: Array<string>;
  tokenType: string;
  clientSecret: string;
  clientName: string;
  clientURI: string;
  logoURI: string;
  scopes: Array<string>;
  contacts: Array<string>;
  tosURI: string;
  policyURI: string;
  jwksURI: string;
  jwks: string;
  softwareId: string;
  softwareVersion: string;
  realm: string;
  name: string;
  description: string;
  owner: string;
  collaborators: Array<string>;
  email: string;
  emailVerified: boolean;
  clientKey: string;
  javaScriptKey: string;
  restApiKey: string;
  windowsKey: string;
  masterKey: string;
  pushSettings: any;
  status: string;
  created: Date;
  modified: Date;
  userId: number;
  organizationId: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  organization: Organization;
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
        clientType: {
          name: 'clientType',
          type: 'string'
        },
        redirectURIs: {
          name: 'redirectURIs',
          type: 'Array&lt;string&gt;'
        },
        tokenEndpointAuthMethod: {
          name: 'tokenEndpointAuthMethod',
          type: 'string'
        },
        grantTypes: {
          name: 'grantTypes',
          type: 'Array&lt;string&gt;'
        },
        responseTypes: {
          name: 'responseTypes',
          type: 'Array&lt;string&gt;'
        },
        tokenType: {
          name: 'tokenType',
          type: 'string'
        },
        clientSecret: {
          name: 'clientSecret',
          type: 'string'
        },
        clientName: {
          name: 'clientName',
          type: 'string'
        },
        clientURI: {
          name: 'clientURI',
          type: 'string'
        },
        logoURI: {
          name: 'logoURI',
          type: 'string'
        },
        scopes: {
          name: 'scopes',
          type: 'Array&lt;string&gt;'
        },
        contacts: {
          name: 'contacts',
          type: 'Array&lt;string&gt;'
        },
        tosURI: {
          name: 'tosURI',
          type: 'string'
        },
        policyURI: {
          name: 'policyURI',
          type: 'string'
        },
        jwksURI: {
          name: 'jwksURI',
          type: 'string'
        },
        jwks: {
          name: 'jwks',
          type: 'string'
        },
        softwareId: {
          name: 'softwareId',
          type: 'string'
        },
        softwareVersion: {
          name: 'softwareVersion',
          type: 'string'
        },
        realm: {
          name: 'realm',
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
        owner: {
          name: 'owner',
          type: 'string'
        },
        collaborators: {
          name: 'collaborators',
          type: 'Array&lt;string&gt;'
        },
        email: {
          name: 'email',
          type: 'string'
        },
        emailVerified: {
          name: 'emailVerified',
          type: 'boolean'
        },
        clientKey: {
          name: 'clientKey',
          type: 'string'
        },
        javaScriptKey: {
          name: 'javaScriptKey',
          type: 'string'
        },
        restApiKey: {
          name: 'restApiKey',
          type: 'string'
        },
        windowsKey: {
          name: 'windowsKey',
          type: 'string'
        },
        masterKey: {
          name: 'masterKey',
          type: 'string'
        },
        pushSettings: {
          name: 'pushSettings',
          type: 'any'
        },
        status: {
          name: 'status',
          type: 'string',
          default: 'sandbox'
        },
        created: {
          name: 'created',
          type: 'Date'
        },
        modified: {
          name: 'modified',
          type: 'Date'
        },
        userId: {
          name: 'userId',
          type: 'number'
        },
        organizationId: {
          name: 'organizationId',
          type: 'number'
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
        user: {
          name: 'user',
          type: 'User',
          model: 'User'
        },
        organization: {
          name: 'organization',
          type: 'Organization',
          model: 'Organization'
        },
      }
    }
  }
}
