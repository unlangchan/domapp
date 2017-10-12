import { Component } from '@angular/core';
import { Http} from '@angular/http';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listUrl = 'api/playlist/detail?id=160854883';

  constructor(
    public navCtrl: NavController,
    private $http: Http
  ) {
    $http.get(this.listUrl).subscribe(res => {
      console.log(res.json());
    });
  }

}
