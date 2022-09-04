<template>
  <div className="app">
    <NavBar />
      <div class="container">
      <CountriesList />
      <router-view />
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'pinia';
  //<!-- import MyStore from './store/MyStore'
  import CountryStore from './store/modules/CountryStore'
  import NavBar from './components/NavBar.vue'
  import CountriesList from './components/CountriesList.vue'
//import { transformWithEsbuild } from 'vite';

export default {
  name: 'App',
  components: {
    NavBar,
    CountriesList,
  },
  methods: {
    ...mapActions(CountryStore, ['getCountries']),
  },
  created () {
    this.fetchCountries();
  },
};
</script>