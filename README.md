# ci-currency-vue
CafeInit Currency for VueJS


## Install

```
npm install ci-currency-vue --save

```

## Get Started

```
import Vue from 'vue'
import CICurrency from 'ci-currency-vue'

Vue.use(CICurrency.plug)

```

## Import less

```
@import "../node_modules/ci-currency-vue/src/ci-currency";

```

## Use

```
<ci-currency v-bind:amount="20.00"></ci-currency>

<ci-currency v-bind:amount="20.00" symbol="$"></ci-currency>

```
