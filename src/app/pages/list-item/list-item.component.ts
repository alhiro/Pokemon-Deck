import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { List } from '../../models/list-item.model';
import { LoadLists } from '../../actions/list-item.action';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  list$: Observable<List>;
  @Input() input: any = '';

  constructor(
    private store: Store<{lists: List}>
  ) {
    this.list$ = this.store.select(state => state.lists);
  }

  search(result: any) {
    this.input = result;
    this.load();
  }


  ngOnInit(): void {
    this.load();
  }

  load() {
    const action = new LoadLists(this.input);
    this.store.dispatch(action);
  }
}
