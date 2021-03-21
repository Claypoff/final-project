<template>
  <div class="wrapper">
    <div class="products">
      <div class="product">

          <h1>{{this.$root.$data.reviewItem.name}}</h1>

          <h3>Category: {{this.$root.$data.reviewItem.category}}</h3>

          <div class="image">
            <img :src="'/images/' + this.$root.$data.reviewItem.image">
          </div>

          <div class="price">
            <h2>this item usually costs around {{this.$root.$data.reviewItem.price}}</h2>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ReviewList',
  }
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
