import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsedDropdown = true;
  @Output() public featureSelected = new EventEmitter<string>(); //output navigation data

  constructor() { }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  ngOnInit(): void {
  }

}
