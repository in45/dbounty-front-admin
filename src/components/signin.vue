<template>
    <div class="row mr-0" style="margin-top: 10%;margin-bottom: 8%">
        <div class="col-xl-4 m-auto ">
            <div class="card">
                <div class="card-header">
                    <h1 class="text-center text-white">DBounty</h1>

                </div>
                <div class="card-body">
        <form>
            <div class="row">

                <div class="col-xl-9 m-auto font-size-14">
                    <form id="form"  method="POST" @submit.prevent="handleSubmit">
                        <div class="form-group mt-3 mb-0">
                            <label class="pb-2">Username :</label>
                            <b-form-input type="text" v-model="user.username" placeholder="Enter your username"
                                           :class="{ 'is-invalid': typesubmit && $v.user.username.$error }"></b-form-input>
                            <div v-if="typesubmit && $v.user.username.$error" class="invalid-feedback ">
                                <span v-if="!$v.user.username.required" class="text-danger">The Value is required !</span>
                            </div>
                            <div v-if="typesubmit && $v.user.username.$error" class="invalid-feedback ">
                                <span v-if="!$v.user.username.minLength || !$v.user.username.maxLength" class="text-danger">The username needs to be between 5-20 characters!</span>
                            </div>
                        </div>
                        <div class="form-group mt-3 mb-0">
                            <label class="pb-2">Password :</label>
<!--                            <vue-fontawesome :icon="icon" size="2" color="dark" id="togglePassword" @click="visibility"></vue-fontawesome>-->
                            <b-form-input type="password"  v-model="user.password" id="password" placeholder="Enter your password"
                                             :class="{ 'is-invalid': typesubmit && $v.user.password.$error }"></b-form-input>
                            <div v-if="typesubmit && $v.user.password.$error" class="invalid-feedback ">
                                <span v-if="!$v.user.password.required" class="text-danger"> The Value is required !</span>
                            </div>
                        </div>

                        <div class="mt-3">
                            <input type="submit"  class="btn btn-primary btn-block"  value="Login" />
                        </div>
                    </form>
<!--                    <div class="row mt-3 mb-3">-->
<!--                            <a href="#" class="pl-3">Forgotten Password?</a>-->
<!--                    </div>-->
                </div>


            </div>
        </form>
    </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {maxLength, minLength, required} from "vuelidate/lib/validators";
    import Vue from "vue";
    export default {
        name: "signin",
        data() {
            return {
                typesubmit: false,
                icon: 'eye',
                user: {
                    username: '',
                    password: '',
                }

            }
        },
        validations: {
            user:{
                username: {required,minLength: minLength(5),maxLength: maxLength(20)},
                password: {required},
            },
        },
        created(){
            this.typesubmit=false;
            this.user={}
        },

        methods: {
            // visibility() {
            //
            //     const password = document.querySelector('#password');
            //     // toggle the type attribute
            //     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            //     password.setAttribute('type', type);
            //     // toggle the eye slash icon
            //     this.icon = 'eye-slash';
            // },

            handleSubmit() {
                this.typesubmit = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
               this.login();

            },

            login() {
                this.$http
                    .post('login', this.user)
                    .then(response => {
                        console.log(response.data.access_token)
                        this.$alertify.success("Success :)")
                        const token = response.data.access_token;
                        localStorage.setItem('token', token)
                        Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
                        this.$router.push({'name':'Dashboard'})
                    })
                    .catch(error => {
                        console.log(error)
                        this.$alertify.error("Le mot de passe / l'email est incorrect");
                    })
            }
        }
    }
</script>

<style scoped>

    body{
        background-color: #393e46!important;
    }

    .card{
        background-color: #222831;
        border-radius: 20px!important;
    }
   .card-header h1{
        margin: auto;
        font-size: 30px;
        font-weight: bold;

    }
   label{
       color: white;
   }



    input[type="text"],input[type="password"]{
        border: 0;
        background-color: white;
        color:#222831;
        border-bottom: solid 1px #0072bc;
        padding: 10px 10px;
    }

    i {
        cursor: pointer;
        float: right;
        position: relative;
        top: 32px;
        color: black;
        margin-left: 4px;
    }




</style>