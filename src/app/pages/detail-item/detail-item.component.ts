import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { Detail } from '../../models/detail.model';
import { LoadDetail } from '../../actions/detail.action';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss'],
})
export class DetailItemComponent implements OnInit {
  detail$: Observable<Detail>;
 
  @ViewChild('content') content: any;
  setColor?: boolean;

  constructor(
    private store: Store<{detail: Detail}>,
    public route: ActivatedRoute
  ) {
    this.detail$ = this.store.select(state => state.detail);
  }

  onScroll(event: any) {
    console.log('scroll event scrollTop', event.detail.scrollTop);

    if (event.detail.scrollTop > 100) {
      this.setColor = true;
    } else {
      this.setColor = false;
    }
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    const getId = this.route.snapshot.paramMap.get('id');
    console.log('detailId ', getId);
  
    const action = new LoadDetail(getId);
    this.store.dispatch(action);
  }

}
