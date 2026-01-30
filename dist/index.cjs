'use strict';

const vue = require('vue');

function whenever(source, cb, options) {
  const stop = vue.watch(
    source,
    (v, ov, onInvalidate) => {
      if (v) {
        if (options?.once)
          vue.nextTick(() => stop());
        cb(v, ov, onInvalidate);
      }
    },
    {
      ...options,
      once: false
    }
  );
  return stop;
}

exports.whenever = whenever;
