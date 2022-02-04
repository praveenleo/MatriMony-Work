import { Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserDataService } from 'src/app/shared/service/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarType: any = 'regular';
  currentTabData: any[] = []
  totalData: any;
  tabs = [
    { name: 'JUST JOINED', id: '1' },
    { name: 'MATCHES', id: '2' },
    { name: 'PREMIUM', id: '3' },
    { name: 'MUTUAL MATCHES', id: '4' }
  ]
  tabSelected = 0;
  showFooter!: boolean;

  constructor(
    private service: UserDataService, private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.getList();
  }
  switchTab(type: string) {
    this.navbarType = type;
  }

  @HostListener('window:scroll', ['$event.target'])

  scrollTop(event: any) {
    const scrollDown = event.scrollingElement.scrollTop;
    if (scrollDown > 250) {
      this.showFooter = true;
      1
    } else {
      this.showFooter = false;
    }
  }

  getList() {
    this.spinner.show();
    this.service.getListInfo().subscribe((result: any) => {
      this.spinner.hide();
      this.totalData = result.userdata;
      this.getTabInfo('1');
    }, err => {
      this.spinner.hide();
    });
  }
  getTabInfo(tab: string) {
    this.currentTabData = this.totalData[tab];
  }
  specificTabSelection(event: number) {
    this.spinner.show();
    setTimeout(() => {
      this.getTabInfo(this.tabs[event].id);
      this.spinner.hide();
    }, 1000);
  }
}
