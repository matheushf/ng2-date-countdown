const gulp = require('gulp');
const sass = require('node-sass');
const inlineNg2Template = require('gulp-inline-ng2-template');

const INLINE_TEMPLATES = {
    SRC: './src/**/*.ts',
    DIST: './tmp/src-inlined',
    CONFIG: {
        base: '/src',
        target: 'es6',
        useRelativePaths: true,
        styleProcessor: compileSass
    }
};

gulp.task('inline-build-templates', () => {
    return gulp.src(INLINE_TEMPLATES.SRC)
        .pipe(inlineNg2Template(INLINE_TEMPLATES.CONFIG))
        .pipe(gulp.dest(INLINE_TEMPLATES.DIST));
});

/**
 * Compile SASS to CSS.
 * @see https://github.com/ludohenin/gulp-inline-ng2-template
 * @see https://github.com/sass/node-sass
 */
function compileSass(path, ext, file, callback) {
    let compiledCss = sass.renderSync({
        file: path,
        outputStyle: 'compressed',
    });
    callback(null, compiledCss.css);
}