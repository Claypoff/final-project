<template>

    <AllReviews :reviews="reviews" />

</template>

<script>
  import ReviewList from "../components/ReviewList.vue"
  import AllReviews from "../components/AllReviews.vue"
  export default {
    name: 'Product',
    components: {
      ReviewList,
      AllReviews
    },
    computed: {
      reviews() {
        return this.$root.$data.items[this.$root.$data.reviewItem.id - 1].reviews;
      }
    },
    methods: {

    }
  }
</script>
