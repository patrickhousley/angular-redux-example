import module from './main.module';
import './main.controller';

// @ngInject
function mainConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('main');

  $stateProvider.state('main', {
    url: '',
    controller: 'mainController',
    controllerAs: '$ctrl',
    template: require('./main.jade')
  });
}

module.config(mainConfig);
