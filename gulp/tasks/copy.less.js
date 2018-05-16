
'use strict';

module.exports = function() {
  $.gulp.task('copy:less', function() {
    return $.gulp.src('./source/css/**/*.*', { since: $.gulp.lastRun('copy:less') }) 
      .pipe($.gulp.dest($.config.root + '/less'))
      .pipe($.browserSync.stream()); 
  });
};