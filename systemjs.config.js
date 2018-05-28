/*
    System Configuration file. Should be updated as per the requirements.
*/
(function(global){
    System.config({
        paths: {
            'npm:': 'node_modules/'
        },

        //map tells the System loader where to look for things
        map: {
            'app': 'app', //'dist'

            // angular bundles
            "@angular": "node_modules/@angular",
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            //Other
            'rxjs': "node_modules/rxjs",
            'rxjs-compat': "node_modules/rxjs-compat/",
            'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api'
        },

        //packages tells the System loader how to load when no file name and/or no extension 
        packages: {
            "app": {
                main: "app.bootLoader.js",
                defaultExtension: 'js'
            },
            "rxjs": {
                defaultExtension: 'js',
                main: 'Rx.js'
            },
            "rxjs/internal-compatibility": {
                defaultExtension: 'js',
                main: 'index.js'
            },
            "rxjs-compat": {
                defaultExtension: 'js'
            },
            "angular2-in-memory-web-api": { 
                 main: 'index.js', 
                 defaultExtension: 'js' 
             }
        }
    });
})(this);