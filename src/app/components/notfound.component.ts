import { Component, OnInit } from '@angular/core';

@Component({
  template: '<h2>Page not found!!</h2>'
})
export class PageNotFoundComponent implements OnInit {

  constructor(){

  }

  ngOnInit(){
    //once clicked remove the active tab of parent tab
    $("#sidebar").children(".active").removeClass("active");
    //hide the sub tab once clicked the home page icon
    $(".hasChild ul.acc-menu").css("display", "none");
  }
}
