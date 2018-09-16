import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  router : Router;
  constructor(_router :Router) {
    this.router = _router;
  }

  ngOnInit() {
    let arr = Object.keys(this.router);
    arr.forEach((val)=>{
      console.log("###"+val + ":" +this.router[val]);
    })

  }

  ngOnChanges(){
    console.log("on change:"+this.router.url)
  }

}
