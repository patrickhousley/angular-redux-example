import module from './filters-accounts.module';

module.component('filtersAccounts', {
  controllerAs: '$view',
  template: require('./filters-accounts.pug'),
  bindings: {
    registerAs: '@'
  }
});
