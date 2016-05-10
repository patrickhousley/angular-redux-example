import module from './filters.module';

module.component('filters', {
  controllerAs: '$view',
  template: require('./filters.pug'),
  bindings: {
    registerAs: '@'
  }
});
