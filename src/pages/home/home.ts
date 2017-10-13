import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { LoadAction } from '../../app/actions/playlist'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listUrl = 'api/playlist/detail?id=160854883';

  constructor(
    public navCtrl: NavController,
    private http$: Http,
    private store$: Store<any>,
  ) {
    http$.get(this.listUrl).subscribe(res => {
      let data = res.json();
      let playlist = data.result;
      console.log(playlist);
      this.store$.dispatch(new LoadAction(playlist));
    });
    store$.select('playlist').subscribe(res => {
      console.log(res);
    })
  }

}
