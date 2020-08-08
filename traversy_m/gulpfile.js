// gulpプラグインの読み込み
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

// sassをコンパイルするタスク
const compileSass = () =>
  src('sass/style.scss')
    .pipe(
      sass({
        outputStyle: 'expanded'
      })
    )
    .pipe(dest('css'));

// sassファイルを監視
const watchSassFiles = () => watch('sass/style.scss', compileSass);
// npx gulpコマンドを実行した時、watchSassFilesが実行されるようにする
exports.default = watchSassFiles;
