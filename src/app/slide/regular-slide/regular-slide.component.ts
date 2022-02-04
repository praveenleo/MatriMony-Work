import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-slide',
  templateUrl: './regular-slide.component.html',
  styleUrls: ['./regular-slide.component.scss']
})
export class RegularSlideComponent implements OnInit {
  @Input() profileList: any[] = [];
  _footerHide: any;

  @Input()
  set footerHide(res: any) {
    this._footerHide = res;
  }

  get footerHide(): any {
    return this._footerHide;
  }
  imgCount = 50;

  constructor() { }

  ngOnInit(): void {
    // $(window).scroll(() => {
    //   if ($(this).scrollTop() > 300) {
    //     $('.headercolor').addClass('scroll_page');
    //     console.log('the footer is givne as;');
    //   } else {
    //     $('.headercolor').removeClass('scroll_page');
    //   }
    // });
  }



}
