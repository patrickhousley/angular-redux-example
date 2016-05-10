import module from './filters-years.module';

module.component('filtersYears', {
  controllerAs: '$view',
  template: require('./filters-years.pug'),
  bindings: {
    registerAs: '@'
  }
});
