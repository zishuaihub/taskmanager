import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {
  }
  openSidebar() {
    this.toggle.emit();
  }
}
