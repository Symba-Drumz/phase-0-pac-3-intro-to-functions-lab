global.expect = require('expect');

const babel = require('@babel/core');
const jsdom = require('jsdom');
const path = require('path');

before(function(done) {
  const babelResult = babel.transformFileSync(
    path.resolve(__dirname, '..', 'index.js'), {
      presets: ['@babel/preset-env']
    }
  );

  const html = path.resolve(__dirname, '..', 'index.html');

  jsdom.env({
    html,
    scripts: [
      'https://code.jquery.com/jquery-3.5.1.min.js'
    ],
    src: babelResult.code,
    virtualConsole: jsdom.createVirtualConsole().sendTo(console),
    done: (err, window) => {
      if (err) {
        return done(err);
      }

      Object.keys(window).forEach(key => {
        global[key] = window[key];
      });

      return done();
    }
  });
});
