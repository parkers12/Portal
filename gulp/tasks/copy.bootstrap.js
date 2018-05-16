
'use strict';

module.exports = function() {
  $.gulp.task('copy:bootstrap', function() {
    return $.gulp.src('./source/css/all/bootstrap/less/**/*.less', { since: $.gulp.lastRun('copy:bootstrap') }) 
      .pipe($.gulp.dest($.config.root + '/less'))
      .pipe($.browserSync.stream()); 
  });
};