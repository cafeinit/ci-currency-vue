<template lang="pug">
  span.ci-currency
    i(v-if="symbol").ci-currency__symbol {{symbol}}
    strong {{currency[0]}}
      small .{{currency[1]}}
</template>

<script>
/**
 * @fileoverview CICurrency
 * @author burning (www.cafeinit.com)
 * @version 2017.07.14
 */

export default {
  name: 'ci-currency',

  props: {
    amount: {
      type: [ Number, String ],
      default: 0
    },

    symbol: {
      type: String,
      default: '&yen;'
    }
  },

  computed: {
    currency() {
      let currency = parseFloat(this.amount)
      if (currency > parseInt(currency)) {
        currency = (parseInt(currency * 100) / 100).toString()
      }
      else {
        currency += '.00'
      }
      return currency.split('.')
    }
  }
}
</script>
