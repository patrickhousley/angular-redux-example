import angular from 'angular';

const module = angular.module('ngReduxExample', [
  // Components
  'angularReduxEx.components.filters',
  'angularReduxEx.components.filters-accounts',
  'angularReduxEx.components.filters-years',
  'angularReduxEx.components.latest-posts',

  // Routes
  'angularReduxEx.routes.main'
]);

export default module;
