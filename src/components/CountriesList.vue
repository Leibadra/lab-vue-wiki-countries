<template>
    <div class="countries-list--container">
        <div class="scrollable--container">
            <router-link v-for="country in CountriesFormatted" :key="country.id" :to="country.alpha3Code">
            <img :src="`http://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`" :alt="`Flag of the ${country.name}`"> {{ country.name }}
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import CountryStore from '../store/modules/CountryStore';
    export default {
        name: 'CountriesListView',
        computed: {
            ...mapState(CountryStore, ['CountriesFormatted'])
           
        },
    }
</script>

<style>
    .countries-list--container {
        flex: 0.2;
        display: flex;
        justify-content: center;
    }
</style>