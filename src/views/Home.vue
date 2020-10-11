<template>
  <div class="container">
    <currency-rate currency="USD" />
  </div>
</template>

<script>
import CurrencyRate from "@/components/CurrencyRate.vue";

export default {
  components: {
    CurrencyRate,
  },
};
</script>
