// プラグインの読み込み
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

// sassコンパイルタスク
const compileSass = () =>
  src('sass/style.scss')
    .pipe(
      sass({
        outputStyle: 'expanded'
      })
    )
    .pipe(dest('css'));

// sassファイル監視
const watchSassFiles = () => watch('sass/style.scss', compileSass);
exports.default = watchSassFiles;
