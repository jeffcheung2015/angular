import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../../../services/loginUser.service';

@Component({
  selector: 'app-globalfooter',
  templateUrl: './globalfooter.component.html',
  styleUrls: ['./globalfooter.component.scss']
})
export class GlobalfooterComponent implements OnInit {

  constructor(private loginUserService : LoginUserService) { }

  ngOnInit() {
  }

}
