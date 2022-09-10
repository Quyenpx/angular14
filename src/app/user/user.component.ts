import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public name = 'Quyền Phạm';
  public age = 25;
  constructor() { }

  ngOnInit(): void {
  }

}
