import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController, AnimationController } from '@ionic/angular';

import { ListItemComponent } from '../list-item/list-item.component';

import { fadeIn, fadeOut } from '../../animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banner = [
    {
      id: 1,
      name: 'Banner 1',
      image: 'assets/banner/banner1.jpg',
    },
    {
      id: 2,
      name: 'Banner 2',
      image: 'assets/banner/banner0.png',
    },
    {
      id: 3,
      name: 'Banner 3',
      image: 'assets/banner/banner2.jpg',
    }
  ];

  isLoading = false;

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public animationCtrl: AnimationController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 1.25,
    centeredSlides: true,
    spaceBetween: 15,
    speed: 400,
  };
}
