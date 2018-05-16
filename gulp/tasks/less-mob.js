'use strict';

module.exports = function() {
var path = require('path');

  $.gulp.task('less:mob', function() {
    return $.gulp.src('./source/css/style-mob.less')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.less()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/css'))
      .pipe($.browserSync.stream()); 
  })
};
