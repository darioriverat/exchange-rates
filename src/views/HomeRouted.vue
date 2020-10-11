<template>
  <div class="container">
    <currency-rate-routed :currency="currency" />
  </div>
</template>

<script>
import CurrencyRateRouted from "@/components/CurrencyRateRouted.vue";

export default {
  data() {
    return {
      currency: "",
      currencies: [],
    };
  },
  components: {
    CurrencyRateRouted,
  },
  watch: {
    $route() {
      if (this.$route.params.currency) {
        this.currency = this.$route.params.currency;
      }
    },
  },
  created() {
    this.currency = this.$route.params.currency ?? "USD";
  },
};
</script>
