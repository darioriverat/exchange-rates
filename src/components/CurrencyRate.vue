<template>
  <div>
    <h1 class="text-center mb-5">Exchange Rates Today</h1>
    <div class="row">
      <div class="col-sm-4 mb-2">
        <card :title="currency">
          <div class="currency" slot="title">{{ currency }}</div>
          <span>{{ date }}</span>
        </card>
      </div>
      <div class="col-sm-8">
        <div class="row">
          <div
            class="col-4 col-sm-3 col-md-2 text-center mb-2"
            v-for="(value, rate) in rates"
            :key="value"
          >
            <button
              type="button"
              class="btn btn-link"
              @click="$emit('currency-change', rate)"
            >
              {{ rate }}
            </button>
            <br />
            {{ value.toFixed(3) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  components: {
    Card,
  },
  props: {
    currency: {
      type: String,
      default: "USD",
    },
  },
  data() {
    return {
      date: "",
      rates: {},
    };
  },
  methods: {
    getExchangeRates(currency) {
      this.$http
        .get(`https://api.ratesapi.io/api/latest?base=${currency}`)
        .then((res) => {
          this.date = res.body.date;
          this.rates = res.body.rates;
        });
    },
  },
  watch: {
    currency(value) {
      this.getExchangeRates(value);
    },
  },
  created() {
    this.getExchangeRates(this.currency);
  },
};
</script>

<style scoped>
.currency {
  font-size: 3rem;
  padding: 40px 0;
}
.card {
  width: 100% !important;
}
</style>
