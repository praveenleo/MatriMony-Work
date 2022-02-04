import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-slide',
  templateUrl: './regular-slide.component.html',
  styleUrls: ['./regular-slide.component.scss']
})
export class RegularSlideComponent implements OnInit {
  @Input() userList: any[] = [];
  hiddenFooter: any;

  @Input()
  set footerHide(res: any) {
    this.hiddenFooter = res;
  }

  get footerHide(): any {
    return this.hiddenFooter;
  }
  imgCount = 50;

  constructor() { }

  ngOnInit(): void {
 
  }



}
