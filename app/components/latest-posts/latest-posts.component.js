import module from './latest-posts.module';

module.component('latestPosts', {
  controllerAs: '$view',
  template: require('./latest-posts.pug'),
  bindings: {
    registerAs: '@'
  }
});
