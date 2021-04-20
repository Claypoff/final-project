<template>
  <div>
    <div style="text-align:center;font-size:16px;padding-left:5%;padding-right:5%;padding-bottom:35px;">
      Welcome to Best Reviews! This website offers a variety of different items that you can read, add, and delete reviews from. Here is a catalog of all the items that we currently
      support. If you would rather search for items by categories, click on the 'search by categories' button.
    </div>

    <div class="container">
      <router-link to="/Categories">
        <div class="categories">
          <button class="categories">Search by Categories</button>
        </div>
      </router-link>
    </div>

    <ItemList :items="items" />
  </div>

</template>

<script>
  import ItemList from "../components/ItemList.vue"
  export default {
    name: 'Home',
    components: {
      ItemList
    },
    computed: {
      items() {
        return this.$root.$data.items;
      }
    },
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .categories {
    background-color: #70bf44;
    border: 2px solid #000000;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  button {
    padding: 15px;
  }
</style>
