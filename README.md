<p align="center">
  <img src="https://raw.githubusercontent.com/vuefrag/vue-use-whenever/main/banner.svg" alt="vue-use-whenever" width="100%" />
</p>

<h1 align="center">vue-use-whenever</h1>

<p align="center">A Vue 3 composition API utility that triggers a callback whenever a watched value becomes truthy, ignoring falsy-to-falsy transitions.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-use-whenever"><img src="https://img.shields.io/npm/v/vue-use-whenever.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-use-whenever"><img src="https://img.shields.io/npm/dm/vue-use-whenever.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-use-whenever
```

## Usage

```ts
import { whenever } from 'vue-use-whenever'
import { ref } from 'vue'

const isReady = ref(false)

whenever(isReady, () => {
  console.log('Ready!')
})

setTimeout(() => {
  isReady.value = true
}, 100)
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
