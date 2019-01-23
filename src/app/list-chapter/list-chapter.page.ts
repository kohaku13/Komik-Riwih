import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-list-chapter',
  templateUrl: './list-chapter.page.html',
  styleUrls: ['./list-chapter.page.scss'],
})
export class ListChapterPage  {

  constructor(public navCtrl: NavController) { }

  gochapter(){
    this.navCtrl.navigateForward('chapter')

  }

}
