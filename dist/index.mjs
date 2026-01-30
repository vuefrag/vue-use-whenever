import { watch, nextTick } from 'vue';

function whenever(source, cb, options) {
  const stop = watch(
    source,
    (v, ov, onInvalidate) => {
      if (v) {
        if (options?.once)
          nextTick(() => stop());
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

export { whenever };
