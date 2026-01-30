import * as vue from 'vue';
import { WatchOptions, WatchSource, WatchCallback } from 'vue';

interface WheneverOptions extends WatchOptions {
    /**
     * Only trigger once when the condition is met
     *
     * Override the `once` option in `WatchOptions`
     *
     * @default false
     */
    once?: boolean;
}
/**
 * Shorthand for watching value to be truthy
 *
 * @see https://vueuse.org/whenever
 */
declare function whenever<T>(source: WatchSource<T | false | null | undefined>, cb: WatchCallback<T>, options?: WheneverOptions): vue.WatchHandle;

export { whenever };
export type { WheneverOptions };
