<template>
    <div class="items">
      <div class="product">

        <h1 style="text-align:center;">{{this.$root.$data.reviewItem.name}}</h1>

        <h3 style="text-align:center;">Category: {{this.$root.$data.reviewItem.category}}</h3>

        <div class="image">
          <img :src="'/images/' + this.$root.$data.reviewItem.image">
        </div>

        <h1 style="text-align:center;">description:</h1>
        <p style="text-align:center;">
          {{this.$root.$data.reviewItem.description}}
        <p>

        <div class="price">
          <h3 style="text-align:center;">this item usually costs around {{this.$root.$data.reviewItem.price}}</h3>
        </div>

        <div class="newReview">
          <h1 style="text-align:center;">Add a Review</h1>
          <form style="width:100%;" v-on:submit.prevent="addUserReview">
            <input v-model="name" placeholder="Reviewer Name">
            <br>
            <input v-model="title" placeholder="review title">
            <br>
            <textarea v-model="addReview"></textarea>
            <br>
            <button type="submit">Add Review</button>
          </form>
        </div>
        <br><br>
        <div class="for-reviews" v-for="review in reviews" :key="review.date">
          <h1 style="text-align:center;">{{review.title}}</h1>
          <h3 style="margin-left:8px;">By: {{review.author}}</h3>
          <p style="text-align:center;font-size:21px;margin:10px;">{{review.text}}</p>
          <br>
          <p style="margin-left:8px;">{{review.date}}</p>
          <div class="right">
            <button @click="removeReview(review.title)" class="delete">Delete this review</button>
          </div>
        </div>

      </div>
    </div>

</template>

<script>
  export default {
    name: 'AllReviews',
    props: {
      reviews: Array
    },
    data() {
      return {
        name: '',
        addReview: '',
        title: ''
      }
    },
    methods: {
        addUserReview() {
          this.$root.$data.items[this.$root.$data.reviewItem.id - 1].reviews.push({
            date: new Date().toLocaleString().split(',')[0],
            author: this.name,
            text: this.addReview,
            title: this.title
          })

          this.name = ''
          this.addReview = ''
          this.title = ''
        },
        removeReview(title) {
          this.$root.$data.items[this.$root.$data.reviewItem.id - 1].reviews.splice(this.$root.$data.items[this.$root.$data.reviewItem.id - 1].reviews.map(function(e) { return e.title; }).indexOf(title), 1);
        }
     }
  }
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
}

.product img {
  border: 2px solid #333;
  height: 350px;
  width: 300px;
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
  justify-content: center;
}

button {
  height: 40px;
  background: #7DD3D8;
  color: black;
  border: 2px solid #000000;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

input {
   width: 60%;
}

textarea {
  width: 60%;
  height: 200px;
}

.delete {
  height: 25px;
  background: #ffcccb;
  color: black;
  border: 2px solid #000000;
  margin: 8px;
}

.right {
  display: flex;
  justify-content: flex-end;
}

.for-reviews {
  background: #D3D3D3;
  border: 2px solid #000000;
  margin: 10px;
}

.auto {
  margin-left: auto;
}

</style>
