import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.toggleClicked.emit();
  }

}
