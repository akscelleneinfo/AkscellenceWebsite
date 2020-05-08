import { Component, OnInit, Output, EventEmitter, ElementRef,Renderer } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() setPageMetaData = new EventEmitter();

setMetaData(){
  this.setPageMetaData.emit();
}
  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
  }
  closeMenu() {
    this.renderer.setElementClass(
      this.el.nativeElement.querySelector(".navbar-collapse"),
      "in",
      false
    );
  }
}
