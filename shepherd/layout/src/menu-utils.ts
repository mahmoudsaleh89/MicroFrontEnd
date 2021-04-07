import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { ModuleRoute } from './app/microfrontends/microfrontend';
import { APP_ROUTES } from './app/app.routes';

export function buildRoutes(options: ModuleRoute[]): Routes {

  const lazyRoutes: Routes = options.map(o => ({
    path: o.routePath,
    loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
  }));

  return [...APP_ROUTES, ...lazyRoutes];
}
