<template>
  <div class="center">
    <div class="pure-menu pure-menu-horizontal">

      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="choose('Clothing')" href="#" class="pure-menu-link">Clothing</a></li>
        <li class="pure-menu-item"><a @click="choose('Phones')" href="#" class="pure-menu-link">Phones</a></li>
        <li class="pure-menu-item"><a @click="choose('Sports')" href="#" class="pure-menu-link">Sports</a></li>
        <li class="pure-menu-item"><a @click="choose('Yardwork')" href="#" class="pure-menu-link">Yardwork</a></li>
        <li class="pure-menu-item"><a @click="choose('Computers')" href="#" class="pure-menu-link">Computers</a></li>
        <li class="pure-menu-item"><a @click="choose('Toys')" href="#" class="pure-menu-link">Toys</a></li>
        <li class="pure-menu-item"><a @click="choose('Cooking')" href="#" class="pure-menu-link">Cooking</a></li>
      </ul>

    </div>

    <ItemList :items="items" />

  </div>
</template>

<script>
  import ItemList from "../components/ItemList.vue"
  export default {
    name: 'Categories',
    components: {
      ItemList
    },
    data() {
      return {
        category: '',
      }
    },
    computed: {
      items() {
        return this.$root.$data.items.filter(item => item.category === this.category);
      }
    },
    methods: {
      choose(category) {
        this.category = category;
      }
    }
  }
</script>

<style>
  .pure-menu-horizontal {
    width: 100%;
    white-space: normal;
    text-align: center !important;
  }

</style>
