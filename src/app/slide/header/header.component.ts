import { Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserDataService } from 'src/app/shared/service/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarType: any = 'default';
  defaultTabData: tabAlign | any;
  totalData: totalUsers | any;
  headerlist = [
    { tab_display_name: 'JUST JOINED', id: '1' },
    { tab_display_name: 'MATCHES', id: '2' },
    { tab_display_name: 'PREMIUM', id: '3' },
    { tab_display_name: 'MUTUAL MATCHES', id: '4' }
  ]
  tabSelected = 0;
  showFooter! : boolean;

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
      this.totalData = result.userdata as totalUsers;
      this.getTabInfo('1');
    }, err => {
      this.spinner.hide();
    });
  }
  getTabInfo(tab: string) {
    this.defaultTabData = this.totalData[tab] as tabAlign;
  }
  specificTabSelection(event: number) {
    this.spinner.show();
    setTimeout(() => {
      this.getTabInfo(this.headerlist[event].id);
      this.spinner.hide();
    }, 1000);
  }
}

interface tabAlign {
  currentTabData: any [];
}
interface totalUsers {
  dataList: any [];
}



