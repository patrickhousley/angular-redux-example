import angular from 'angular';

const module = angular.module('ngReduxExample', [
  // Components
  'angularReduxEx.components.filters',
  
  // Routes
  'angularReduxEx.routes.main'
]);

export default module;
