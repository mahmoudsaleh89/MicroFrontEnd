import { Component, OnInit } from '@angular/core';
import { LookupService } from '../microfrontends/lookup.service';
import { ModuleRoute } from '../microfrontends/microfrontend';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html'
})
export class ConfigComponent implements OnInit {

  constructor(private lookupService: LookupService) { }

  config: ModuleRoute[];

  async ngOnInit() {
    this.config = await this.lookupService.lookup();
  }

}
