import { defineStore } from 'pinia';

export default defineStore('CountryStore', {
    state: () => {
        return {
            countries: [],
            countryCodeSelected: '',
        }
    },
    getters: {
        CountriesFormatted() {
            let countryId = 0;
            return this.countries.map(country => {
                return {
                    id: countryId++,
                    name: country.name.common,
                    alpha2Code: country.alpha2Code.toLowerCase(),
                    alpah3Code: country.alpah3Code,
                }
            });
        },  
        countrySelected () {
           const countryFound = this.countries.find(country => country.alpah3Code === this.countryCodeSelected);
           if (countryFound) {
                return {
                    area: countryFound.area,
                    alpha2Code: countryFound.alpha2Code.toLowerCase(),
                    name: countryFound.name.common,
                    capital: countryFound.capital[0],
                    borders: countryFound.borders,
                }
            }
            return null;
        },
    },
    actions: {
        async fetchCountries () {
            const reponse = await fetch ('https://ih-countries.api.herokuapp.com/countries');
            const countriesData = await reponse.json();
            this.countries = countriesData.reverse();
        },
        selectCoutry(countryCode) {
            this.countryCodeSelected = countryCode;
        }
        }
    },
);