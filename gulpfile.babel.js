// Vendor Imports
import gulp from 'gulp';
import gutil from 'gulp-util';
import runSequence from 'run-sequence';
import path from 'path';
import del from 'del';
import webpack from 'webpack';
import server from 'gulp-express';
import pug from 'gulp-pug';

// Module Imports
import webpackConfig from './webpack.config';

/******************************************************************************
* Common and Default Section
*******************************************************************************/

gulp.task('default', ['clean:dist'], () => {
  runSequence(
    ['pug:build', 'styles:build'],
    ['express', 'webpack:watch', 'pug:watch', 'styles:watch']
  );
});

gulp.task('build', ['clean:dist'], (cb) => {
  runSequence(
    ['webpack:build', 'pug:build', 'styles:build'],
    cb
  );
});

gulp.task('clean:dist', (callback) => {
  return del(path.join(__dirname, 'dist'));
});

/******************************************************************************
* pug Indexes Section
*******************************************************************************/

let pugIndexes = [
  path.join(__dirname, 'app', 'app.pug')
];

gulp.task('pug:build', () => {
  return gulp.src(pugIndexes)
  .pipe(pug())
  .pipe(gulp.dest(path.join(__dirname, 'dist')));
});

gulp.task('pug:watch', () => {
  gulp.watch(pugIndexes, ['pug:build']);
});

/******************************************************************************
* Styles Section
*******************************************************************************/

let styleIndexes = [
  path.join(__dirname, 'app', 'app.css'),
  path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css', '*.css')
];

gulp.task('styles:build', () => {
  return gulp.src(styleIndexes)
  .pipe(gulp.dest(path.join(__dirname, 'dist')));
});

gulp.task('styles:watch', () => {
  gulp.watch(styleIndexes, ['styles:build']);
});

/******************************************************************************
* Webpack Section
*******************************************************************************/

gulp.task('webpack:build', (cb) => {
  let compiler = webpack([webpackConfig]);
  compiler.run((err, stats) => {
    gutil.log(
      stats.toString({
        colors: true,
        assets: false,
        chunkModules: false
      })
    );

    cb();
  });
});

gulp.task('webpack:watch', () => {
  let configOptions = {
    watch: true
  };

  let compiler = webpack([webpackConfig]);
  compiler.watch({}, (err, stats) => {
    gutil.log(
      stats.toString({
        colors: true,
        assets: false,
        chunkModules: false
      })
    );
  });
});

/******************************************************************************
* Express Server Section
*******************************************************************************/

gulp.task('express', () => {
  server.run([path.join(__dirname, 'server.js')]);
});
