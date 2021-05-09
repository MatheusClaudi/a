import { Component, OnInit } from '@angular/core';
import { AdminNavigation } from 'src/app/core/_path/admin/admin-navigation';
import { LoggedOptions } from 'src/app/core/_path/unlogged/logged-options';

@Component({
  selector: 'app-standart',
  templateUrl: './standart.component.html',
  styleUrls: ['./standart.component.css']
})
export class StandartComponent implements OnInit {

  topOptions: LoggedOptions = new LoggedOptions();

  navigation: AdminNavigation = new AdminNavigation();

  constructor() { }

  ngOnInit(): void {
  }

}
