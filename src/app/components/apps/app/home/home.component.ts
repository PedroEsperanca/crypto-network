import 'rxjs/add/operator/take';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/switchMap';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from 'frameworks/ngrx';
import { getCurrentApp } from 'frameworks/app/reducers';
import { AppInterface } from 'frameworks/api';
import { LoopBackFilter } from 'frameworks/api/models';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'appHome',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHomeComponent implements OnInit {
  private app$: Observable<AppInterface>;

  constructor(
    private store: Store<IAppState>
  ) {}

  public ngOnInit() {
    this.app$ = this.store.let(getCurrentApp());
  }
}
