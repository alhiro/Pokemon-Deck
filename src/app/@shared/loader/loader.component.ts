import { Component, OnInit, Input } from '@angular/core';
import { Loadable } from '../../loadable/loadable';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = false;
  @Input() message: string | undefined;
  @Input() loadable: Loadable;

  constructor() {}

  ngOnInit() {}
}
