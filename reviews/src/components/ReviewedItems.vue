<template>
  <div class="wrapper">
    <h1 style="color:#007aa9;">Hello {{this.$root.$data.user.firstName}} {{this.$root.$data.user.lastName}}!</h1>
    <h2><a @click="logout">Sign Out <i class="fas fa-sign-out-alt"></i></a></h2>
    <br>
    <div style="text-align:center;font-size:18px;" v-if="items.length > 0">
        Here are all the items that you have reviewed:
    </div>
    <div class="listItems" v-if="items.length > 0">

      <div class="product" v-for="item in items" :key="item.id">

        <div class="image">
          <img :src="'/images/' + item.image">
        </div>

        <div class="info">
          <h1>{{item.name}}</h1>
        <div>
          <h2>description:</h2>
          <p>
            {{item.description}}
          </p>
        </div>

          <div class="price">
            <h3>Item normally priced at {{item.price}}</h3>
          </div>

          <router-link to="/Product">
              <button @click="selectItem(item.id)" class="categories">View this item</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class='listItems' v-else>
      You have not reviewed any items yet! Once you have reviewed an item, it will appear here.
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'ReviewedItems',
    props: {
      items: Array
    },
    async created() {
      try {
        let response = await axios.get('/api/userReviews/' + this.$root.$data.user.username);
        let userItems = [];
        for (let i = 0; i < response.data.length; i++) {
          userItems.push(this.$root.$data.items[response.data[i] - 1])
        }
        this.items = userItems;

      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    methods: {
        selectItem(id) {
            this.$root.$data.reviewItem = this.$root.$data.items[id - 1];
        },
        async logout() {
          try {
            await axios.delete("/api/users");
            this.$root.$data.user = null;
          } catch (error) {
            this.$root.$data.user = null;
          }
        },
     }
  }
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.listItems {
  margin:10px;
  margin-right: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.product {
  display: flex;
  justify-content: center;
  margin-left: 20px;
  margin-top: 50px;
  align-items: center;
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
  flex-direction: column;
  justify-content: space-between;
  margin-left: 25px;
}

.info h1 {
  font-size: 32px;
}

.info h2 {
  font-size: 24px;
  color: #00008B;
}

.info p {
  font-size: 18px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #e9dff7;
  color: 	#006400;
  border: 2px solid #000000;
}

.auto {
  margin-left: auto;
}
</style>
