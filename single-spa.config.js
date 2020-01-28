import { registerApplication, start } from 'single-spa'

registerApplication(
  // Name of our single-spa application
  'home',
  // loadingFunction
  () => import('./src/home/home.app.js'),

  // activityFunction
  (location) => location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith('/home')
);

registerApplication(
  'navBar',
  () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
  () => true // always active
);

registerApplication(
  'angularJS',
  () => import ('./src/angularJS/angularJS.app.js'),
  pathPrefix('/angularJS')
);

registerApplication(
  'presi',
  () => import ('./src/plainHtml/html.app.js'),
  pathPrefix('/presi'),
  {
    src: 'https://evanpresentations.firebaseapp.com/evan_intro.html'
  } // custom props
);

// Alternatively, use the more out-of-date System.import (instead of SystemJS.import)
// registerApplication('app-name-2', () => System.import('./my-other-app.js'), pathPrefix('/systemjs'));


start();

function pathPrefix(prefix) {
  return function(location) {
      return location.pathname.startsWith(prefix);
  }
}
