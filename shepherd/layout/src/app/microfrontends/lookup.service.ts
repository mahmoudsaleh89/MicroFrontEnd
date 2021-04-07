import {Injectable} from '@angular/core';
import {MenuItem, ModuleRoute, ModulesName} from './microfrontend';

@Injectable({providedIn: 'root'})
export class LookupService {
  lookup(): Promise<MenuItem[]> {
    return Promise.resolve([
      {
        // For Loading
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'hire',
        exposedModule: './Module',

        // For Routing
        displayName: 'Hire',
        routePath: 'hire',
        ngModuleName: 'PagesModule',
        icon: 'k-i-user'
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3002/remoteEntry.js',
        remoteName: 'boarding',
        exposedModule: './Module',

        // For Routing
        displayName: 'Boarding',
        routePath: 'boarding',
        ngModuleName: 'PagesModule',
        icon: 'k-i-track-changes-enable'
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3003/remoteEntry.js',
        remoteName: 'my365',
        exposedModule: './Module',

        // For Routing
        displayName: 'My365',
        routePath: 'my365',
        ngModuleName: 'PagesModule',
        icon: 'k-i-style-builder'
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3005/remoteEntry.js',
        remoteName: 'time',
        exposedModule: './Module',

        // For Routing
        displayName: 'Time',
        routePath: 'time',
        ngModuleName: 'PagesModule',
        icon: 'k-i-clock'
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3015/remoteEntry.js',
        remoteName: 'settings',
        exposedModule: './Module',

        // For Routing
        displayName: 'Settings',
        routePath: 'settings',
        ngModuleName: 'PagesModule',
        icon: 'k-i-clock',
        deflateModule: ModulesName.settings,
        pages: [
          {name: 'general', icon: 'k-i-wrench', path: 'settings/general'},
          {name: 'permissions', icon: 'k-i-apply-format', path: 'settings/permissions'},
          {name: 'learning', icon: 'k-i-paste-markdown', path: 'settings/learning'}
        ]
      },
    ] as MenuItem[]);
  }
}


