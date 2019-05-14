<template>
    <v-form @submit.prevent="proceed">
        <div class="pl-3 pt-4 pr-3 pb-1" align="left">
            <v-btn small flat class="pa-0 ma-0 text-none" color="blue darken-1" @click="$emit('previous')">
                <v-icon small class="mr-2">arrow_back</v-icon>
                Kembali
            </v-btn>
        </div>
        <div class="pl-4 pr-4 pt-1 pb-4" align="left">
            <div>
                <span class="headline font-weight-bold">Informasi kontak</span> <span class="grey--text ml-2">2/5</span>
            </div>
            <p class="mt-1 grey--text text--darken-1">Isi data diri kamu dengan jujur ya..</p>

            <v-text-field label="Alamat email" v-model="email"></v-text-field>
            <v-text-field label="ID LINE" v-model="line"></v-text-field>
            <v-text-field label="Nomor ponsel" v-model="mobile"></v-text-field>
            <v-text-field label="Alamat Rumah" v-model="address_home"></v-text-field>
            <v-text-field label="Alamat di Bandung" v-model="address_local"></v-text-field>

            <v-btn depressed block style="text-transform: none; color: black" color="primary" class="font-weight-bold mt-3" type="submit">Lanjutkan</v-btn>
        </div>
    </v-form>
</template>

<script>
    export default {
        name: "Contact",
        data() {
            return {
                email: '',
                line: '',
                mobile: '',
                address_home: '',
                address_local: ''
            }
        },
        methods: {
            proceed() {
                this.$emit('proceed', {
                    email: this.email,
                    line: this.line,
                    mobile: this.mobile,
                    address_home: this.address_home,
                    address_local: this.address_local
                });
            }
        }
    }
</script>

<style scoped>

</style>