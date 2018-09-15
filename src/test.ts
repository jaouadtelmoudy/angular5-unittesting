// This file is required by karma.conf.js and loads recursively all the .spec and framework files
//Fixed the Karma/Jasmine version issue as per this - https://github.com/angular/zone.js/issues/1058#issuecomment-377223280
import 'zone.js/dist/zone-testing';
// you only need this one file, and you need to load it first.

import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare const __karma__: any;
declare const require: any;
// Prevent Karma from running prematurely.
__karma__.loaded = function () {
};
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
// Finally, start Karma to run the tests.
__karma__.start();

