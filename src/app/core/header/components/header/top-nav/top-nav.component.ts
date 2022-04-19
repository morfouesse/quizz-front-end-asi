import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.less']
})
export class TopNavComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }


}
