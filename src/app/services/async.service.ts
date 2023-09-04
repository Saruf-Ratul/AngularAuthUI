
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AsyncState } from '../shared/state/async.state';
import { StartAsyncLoad, FinishAsyncLoad } from '../shared/actions/async.action';

@Injectable()
export class AsyncService {

  @Select(AsyncState.isLoading) isLoading!: Observable<boolean> ;

  constructor(private store: Store) {}

  start(): void {
    this.store.dispatch(new StartAsyncLoad());
  }

  finish(): void {
    this.store.dispatch(new FinishAsyncLoad());
  }

}
