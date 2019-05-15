<template>
    <v-form @submit.prevent="proceed" ref="form">
        <div class="pa-4" align="left">
            <v-img :src="require('../../assets/spartalogo.png')" width="80"></v-img>
            <div class="display-1 font-weight-bold" style="margin-top: 24px">Selamat datang di SPARTA 2018!</div>
            <p class="mt-3">
                Perjalanan kalian masih panjang, jangan menyerah dan teruslah berkarya dan berkontribusi! Sisanya biar medinfo aja ya yg nulis lol.
            </p>
            <p>
                Kamu boleh menutup laman ini.
            </p>
        </div>
    </v-form>
</template>

<script>
    export default {
        name: "Finished"
    }
</script>

<style scoped>

</style>