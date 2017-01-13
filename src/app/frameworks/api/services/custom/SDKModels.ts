/* tslint:disable */
import { Injectable } from '@angular/core';
import { Organization } from '../../models/Organization';
import { User } from '../../models/User';
import { App } from '../../models/App';

interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Organization: Organization,
    User: User,
    App: App,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
