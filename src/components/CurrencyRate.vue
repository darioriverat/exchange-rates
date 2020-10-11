<template>
  <div>
    <h1 class="text-center mb-5">Exchange Rates Today</h1>
    <div class="row">
      <div class="col-sm-4 mb-2">
        <div class="card" style="width: 18rem;">
          <h1 class="currency text-center">{{ currency }}</h1>
          <div class="card-body">
            <p class="card-text text-center">
              {{ date }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="row">
          <div
            class="col-4 col-sm-3 col-md-2 text-center mb-2"
            v-for="(value, rate) in rates"
            :key="value"
          >
            {{ rate }} <br />
            {{ value.toFixed(3) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  created() {
    console.log(this.currency);
    this.$http
      .get(`https://api.ratesapi.io/api/latest?base=${this.currency}`)
      .then((res) => {
        console.info(res);
        this.date = res.body.date;
        this.rates = res.body.rates;
      });
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
