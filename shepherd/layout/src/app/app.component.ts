import {AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {buildRoutes} from '../menu-utils';
import {LookupService} from './microfrontends/lookup.service';
import {MenuItem, PageDetails} from './microfrontends/microfrontend';

@Component({
  selector: 'app-layout-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  moduleRoute: MenuItem[] = [];
  expanded = true;
  menuItems: PageDetails[] = [];
  /***************/
  @ViewChild('anchor', {static: false})
  public anchor: ElementRef<HTMLElement>;
  public items: any[] = [
    {
      text: 'Kendo UI Project',
      items: [{text: 'about.html'}, {text: 'index.html'}, {text: 'logo.png'}]
    },
    {
      text: 'New Web Site',
      items: [{text: 'mockup.jpg'}, {text: 'Research.pdf'}]
    },
    {
      text: 'Reports',
      items: [{text: 'February.pdf'}, {text: 'March.pdf'}, {text: 'April.pdf'}]
    }
  ];

  public margin = {horizontal: -46, vertical: 7};
  public show = false;
  imageUrl = 'assets/images/user.svg';
  showModule = false;

  constructor(
    public router: Router,
    public lookupService: LookupService,
    public zone: NgZone) {
  }


  public onToggle(): void {
    this.show = !this.show;
  }

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      window.addEventListener('resize', () => {
        if (this.show) {
          this.zone.run(() => this.onToggle());
        }
      });
    });
  }

  async ngOnInit(): Promise<void> {
    this.moduleRoute = await this.lookupService.lookup();
    const routes = buildRoutes(this.moduleRoute);
    this.router.resetConfig(routes);
    this.onSetMenuItems();
  }

  onSetMenuItems() {
    for (const module of this.moduleRoute) {
      if (module.deflateModule) {
        this.menuItems = module.pages;
        this.router.navigate([module.routePath]);
        return;
      }
    }
  }

}

