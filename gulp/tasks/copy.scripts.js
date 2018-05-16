'use strict';

module.exports = function() {
  $.gulp.task('copy:scripts', function() {
    return $.gulp.src('./source/js/**/*.*', { since: $.gulp.lastRun('copy:scripts') })
      .pipe($.gulp.dest($.config.root + '/js'))
      .pipe($.browserSync.stream());
  });
};
