import { defineStore } from 'pinia';

export default defineStore ('myStore', {
    state: () => {
        return {
            countries: [{
                name: 'Espanita',
            }],
        };
    }  
})