const {src, dest, watch, series} = require("gulp");
const del = require("del");
const banner = require('gulp-banner');
const eslint = require("gulp-eslint");
const project = require("../package.json");
const ts = require('gulp-typescript').createProject("tsconfig.json");
const stripIndent = require("common-tags").stripIndent;

const paths = {
    src: {
        ts: ["src/**/*.ts"]
    },
    build: {
        all: ["dist/**/*"],
        dest: "dist"
    }
};

const userScript = stripIndent`
    // ==UserScript==
    // @name         DO iNTUItive
    // @namespace    https://github.com/DO-Tools/iNTUItive
    // @version      ${project.version}
    // @description  ${project.description}
    // @author       ${project.author}
    // @match        https://www.dugout-online.com/competitions/*
    // @grant        GM_getResourceText
    // @resource     worldCups https://raw.githubusercontent.com/DO-Tools/iNTUItive/${project.version}/data/world-cups.json
    // ==/UserScript==`
    + "\n\n";

let cleanTask = () => {
    return del(paths.build.all);
};

let lintTask = () => {
    return src(paths.src.ts)
        .pipe(eslint())
        .pipe(eslint.format());
};

let transpileTask = () => {
    return src(paths.src.ts)
        .pipe(ts())
        .pipe(banner(userScript))
        .pipe(dest(paths.build.dest));
};

let tsTask = series(lintTask, transpileTask);

let testTask = (cb: Function) => {
    console.log("TODO write tests!");
    cb();
}

let watchTask = () => {
    watch(paths.src.ts, series(tsTask, testTask));
}

exports.build = series(cleanTask, tsTask);
exports.test = series(testTask);
exports.default = series(cleanTask, tsTask, watchTask);