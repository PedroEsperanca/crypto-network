/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { App } from '../../models/App';

@Injectable()
export class SDKModels {

  private models: { [name: string]: any } = {
    User: User,
    App: App,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }
}
