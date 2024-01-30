import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-canteen',
  templateUrl: './canteen.component.html',
  styleUrls: ['./canteen.component.scss']
})
export class CanteenComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  size: NzButtonSize = 'large';

  back() {
    window.history.back();
  }
  view(){
    this.router.navigate(['/view']);
  }

  report(){

  }
  entry(){
    this.router.navigate(['/entry']);
  }




}
