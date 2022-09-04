<template>
    <div class="countries-details--container" v-if="countrySelected <>">
        <img :src="`http://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`" :alt="`Flag of the ${countrySelected.name}`"> 
        <h1>{{ countrySelected.name }}</h1>
        <p>Capital: {{countrySelected.capital }}</p>
        <p>Area: {{ country.Info.area}} km2</p>
        <router-link v-for="border in countrySelected.borders" :key="borders" :to="borders"> {{ borders }}          
        </router-link>
    </div>
</template>


<script>
import { mapActions, mapState } from 'pinia';
import CountryStore from '../store/modules/CountryStore'
export default {
    name:'CountriesDetailsView',
    computed: {
        ...mapState(CountryStore, ['countrySelected']),
    },
    methods: {
        ...mapActions(CountryStore, ['selectCoutry']),
    }
created() {
    const { countryCode } = this.$route.params;
    if (countryCode) {
        this.selectCountry(countryCode);
    }

    this.$watch(
        () => this.$route.params,
        (toParams, previousParams) => {
            if (toParams.countryCode) {
                this.selectCountry(toParams.countryCode);
            }
            }
            )
        },
}
</script>