import {LoadRemoteModuleOptions} from '@angular-architects/module-federation';

export type ModuleRoute = LoadRemoteModuleOptions & {
  displayName: string;
  routePath: string;
  ngModuleName: string;
  deflateModule?: ModulesName;
  imageUrl?: string;
  packageName?: string;
};

export type MenuItem = ModuleRoute & {
  icon: string;
  pages: Array<PageDetails>;
};

export type PageDetails = {
  name: string;
  path: string;
  icon: string;
};

export enum ModulesName {
  settings = 1,
  analytics = 2,
  boarding = 3,
  careers = 4,
  engagement = 5,
  hire = 6,
  innovation = 7,
  learning = 8,
  my365 = 9,
  pay = 11,
  people = 12,
  performance = 13,
  planning = 14,
  succession = 15,
  time = 16
}
