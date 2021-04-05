import {Injectable} from '@angular/core';
import {Microfrontend} from './microfrontend';

@Injectable({providedIn: 'root'})
export class LookupService {
  lookup(): Promise<Microfrontend[]> {
    return Promise.resolve([
      {
        // For Loading
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'hire',
        exposedModule: './Module',

        // For Routing
        displayName: 'Hire',
        routePath: 'hire',
        ngModuleName: 'PagesModule'
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3002/remoteEntry.js',
        remoteName: 'boarding',
        exposedModule: './Module',

        // For Routing
        displayName: 'Boarding',
        routePath: 'boarding',
        ngModuleName: 'PagesModule'
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3003/remoteEntry.js',
        remoteName: 'my365',
        exposedModule: './Module',

        // For Routing
        displayName: 'My365',
        routePath: 'my365',
        ngModuleName: 'PagesModule'
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3005/remoteEntry.js',
        remoteName: 'time',
        exposedModule: './Module',

        // For Routing
        displayName: 'Time',
        routePath: 'time',
        ngModuleName: 'PagesModule'
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3015/remoteEntry.js',
        remoteName: 'settings',
        exposedModule: './Module',

        // For Routing
        displayName: 'Settings',
        routePath: 'settings',
        ngModuleName: 'PagesModule'
      },
    ] as Microfrontend[]);
  }

  getMenu(): Promise<Microfrontend[]> {
    return Promise.resolve([
      {
        // For Loading
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'hire',
        exposedModule: './Module',

        // For Routing
        displayName: 'Hire',
        routePath: 'hire',
        ngModuleName: 'PagesModule'
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3002/remoteEntry.js',
        remoteName: 'boarding',
        exposedModule: './Module',

        // For Routing
        displayName: 'Boarding',
        routePath: 'boarding',
        ngModuleName: 'PagesModule'
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3003/remoteEntry.js',
        remoteName: 'my365',
        exposedModule: './Module',

        // For Routing
        displayName: 'My365',
        routePath: 'my365',
        ngModuleName: 'PagesModule'
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3005/remoteEntry.js',
        remoteName: 'time',
        exposedModule: './Module',

        // For Routing
        displayName: 'Time',
        routePath: 'time',
        ngModuleName: 'PagesModule'
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3015/remoteEntry.js',
        remoteName: 'settings',
        exposedModule: './Module',

        // For Routing
        displayName: 'Settings',
        routePath: 'settings',
        ngModuleName: 'PagesModule'
      },
    ] as Microfrontend[]);
  }
}
