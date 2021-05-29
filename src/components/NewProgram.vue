<template>
    <main>

        <div class="row m-5">
            <h2 class="text-white col-xl-11 ">New Program</h2>
            <button @click="handleSubmit" id="deploy" class=" col-xl-1" >Add</button>
        </div>

        <div class="row m-0">

            <div class="col-xl-5 mx-auto card">


                <div class="form-group mt-3 mb-0">
                    <label class="pb-2">Challenge Name :</label>
                    <b-form-input type="text" placeholder="Name" v-model="chall.name"
                                  :class="{ 'is-invalid': submitted && $v.chall.name.$error }"></b-form-input>
                    <div v-if="submitted && $v.chall.name.$error" class="invalid-feedback ">
                        <span v-if="!$v.chall.name.required">Name is required !</span>
                        <span v-if="(!$v.chall.name.minLength || !$v.chall.name.maxLength) && $v.chall.name.valid">3 - 25 caracters</span>
                        <span v-if="!$v.chall.name.valid && $v.chall.name.required">Invalid Name</span>
                    </div>
                </div>
                <div class="form-group mt-3 mb-0">
                    <div class="row">
                        <div class="col-xl-6">
                            <label class="pb-2">Score :</label>
                            <b-form-input type="number" min="0" placeholder="Score" v-model="chall.score"
                                          :class="{ 'is-invalid': submitted && $v.chall.score.$error }"></b-form-input>
                            <div v-if="submitted && $v.chall.score.$error" class="invalid-feedback ">
                                <span v-if="!$v.chall.score.required">Score is required !</span>
                                <span v-if="!$v.chall.score.integer || !$v.chall.score.minValue">Invalid Score</span>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="pb-2">Category :</label>
                            <b-form-select v-model="chall.category" :options="categories" value-field="id"
                                           text-field="name"
                                           :class="{ 'is-invalid': submitted && $v.chall.category.$error }"></b-form-select>
                            <div v-if="submitted && $v.chall.category.$error" class="invalid-feedback ">
                                <span v-if="!$v.chall.category.required">Category is required !</span>
                                <span v-if="!$v.chall.category.integer || !$v.chall.category.minValue">Invalid Category</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group mt-3 mb-0">
                    <div class="row">
                        <div class="col-xl-6">
                            <label class="pb-2">Level :</label>
                            <b-form-select v-model="chall.level" :options="levels"
                                           :class="{ 'is-invalid': submitted && $v.chall.level.$error }"></b-form-select>
                            <div v-if="submitted && $v.chall.level.$error " class="invalid-feedback ">
                                <span v-if="!$v.chall.level.required">Level is required !</span>
                                <span v-if="!$v.chall.level.valid && $v.chall.level.required"> Invalid Level</span>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="pb-2">Type :</label>
                            <b-form-select v-model="chall.type" :options="types"
                                           :class="{ 'is-invalid': submitted && $v.chall.type.$error }"></b-form-select>
                            <div v-if="submitted && $v.chall.type.$error" class="invalid-feedback ">
                                <span v-if="!$v.chall.type.required">Type is required !</span>
                                <span v-if="!$v.chall.type.valid && $v.chall.type.required">Invalid Type</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="form-group mt-3 mb-0" v-if="chall.type=='dynamic'">
                    <div class="row">
                        <div class="col-xl-6">
                            <label class="pb-2">Min Score :</label>
                            <b-form-input  type="number" min="0" placeholder="Minimum Score" v-if="chall.type=='dynamic'" name="min_score"
                                           v-model="chall.min_score"
                                           :class="{ 'is-invalid': submitted  && chall.type=='dynamic' && $v.chall.min_score.$error }"></b-form-input>
                            <div v-if="submitted && $v.chall.min_score.$error" class="invalid-feedback ">
                                <span v-if="!$v.chall.min_score.required">Min Score is required !</span>
                                <span v-if="!$v.chall.min_score.integer || !$v.chall.min_score.minValue">Invalid min score</span>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="pb-2">Decay Limit :</label>
                            <b-form-input type="number" min="0" placeholder="Decay limit" v-if="chall.type=='dynamic'" name="decay_limit"
                                          v-model="chall.decay_limit"
                                          :class="{ 'is-invalid': submitted && chall.type=='dynamic' && $v.chall.decay_limit.$error }"></b-form-input>
                            <div v-if="submitted && $v.chall.decay_limit.$error" class="invalid-feedback ">
                                <span v-if="!$v.chall.decay_limit.required">Decay Limit is required !</span>
                                <span v-if="!$v.chall.decay_limit.integer || !$v.chall.decay_limit.minValue">Invalid decay limit</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group mt-3 mb-0">
                    <label class="pb-2">Flag :</label>
                    <b-form-input type="text" placeholder="CRISIS{TH!5_I5_THE_FL15}" v-model="chall.flag"
                                  :class="{ 'is-invalid': submitted && $v.chall.flag.$error }"></b-form-input>
                    <div v-if="submitted &&  $v.chall.flag.$error" class="invalid-feedback ">
                        <span v-if="!$v.chall.flag.required">Flag is required !</span>
                        <span v-if="!$v.chall.flag.valid && $v.chall.flag.required">Invalid Flag</span>
                    </div>
                </div>

            </div>
            <div class="col-xl-6 mx-auto card">
                <div class="form-group my-3 mb-0">
                    <label class="pb-2">Description :</label>
                    <vue-editor v-model="chall.description" :class="{ 'is-invalid': submitted && $v.chall.description.$error }"></vue-editor>
                    <div v-if="submitted && !$v.chall.description.required" class="invalid-feedback ">
                        <span v-if="!$v.chall.description.required">Description is required !</span>
                    </div>
                </div>
                <div class="form-group mt-3 mb-0">
                    <div class="row">
                        <div class="col-xl-6">
                            <label class="pb-2">Url Web :</label>
                            <b-form-input type="text" placeholder="URL Web" v-model="chall.url"
                                          :class="{ 'is-invalid': submitted &&  $v.chall.url.$error }"></b-form-input>
                            <div v-if=" submitted && !$v.chall.url.url" class="invalid-feedback ">Invalid URl </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="pb-2">Attachment:</label>
                            <b-form-file v-model="file" ref="file" id="file" name="file"  accept=".zip,.rar,.7zip,application/x-rar-compressed,application/zip" maxSize="50000000"
                            ></b-form-file>
                            <div  v-if="error_file" class="text-danger" >Max file Size = 50Mo</div>
                        </div>
                    </div>
                </div>


            </div>

        </div>


    </main>
</template>

<script>
    import {required,minLength,maxLength,minValue,integer,url,maxValue} from "vuelidate/lib/validators";
    import { VueEditor } from "vue2-editor";
    export default {
        name: "New Program",
        components: {
            VueEditor
        },
        data() {
            return {
                types: [ 'static','dynamic', 'manual'],
                levels: ['easy', 'medium', 'hard'],
                chall: { },
                file:null,
                submitted: false,
                error_file: false,

                categories: [],
            }
        },
        watch: {
            file(newFile) {
                if(newFile){
                    this.error_file = false
                }
                if(newFile && newFile.size > 50000000) {

                    this.$nextTick(() => {
                        this.error_file = true
                        this.file = null;

                    })
                }


            }
        },
        computed: {
            rules() {
                if (this.chall.type == "dynamic")
                    return {
                        name: {
                            required,
                            minLength: minLength(3),
                            maxLength: maxLength(25),
                            valid: function(value) {
                                return /^[a-zA-Z0-9\s]+$/.test(value)
                            }
                        },
                        description: {required},
                        score: {
                            required,
                            integer,
                            minValue: minValue(1)
                        },
                        type: {
                            required,
                            valid: function (value) {
                                return /^dynamic|static|manual$/.test(value)
                            }
                        },
                        level: {
                            required,
                            valid: function (value) {
                                return /^easy|medium|hard$/.test(value)
                            }
                        },
                        category: {
                            required,
                            integer,
                            minValue: minValue(1)
                        },
                        min_score: {
                            required,
                            integer,
                            minValue: minValue(1),
                            maxValue: maxValue(this.chall.score)
                        },
                        decay_limit: {
                            required,
                            integer,
                            minValue: minValue(1),
                            maxValue: maxValue(this.chall.score)
                        },
                        url:{
                            url
                        },
                        flag: {
                            required,
                            valid: function (value) {
                                return /^CRISIS\{[a-zA-Z0-9_@$]{6,20}\}$/.test(value)
                            }
                        },
                    }

                else {
                    return {
                        name: {
                            required,
                            minLength: minLength(3),
                            maxLength: maxLength(25),
                            valid: function(value) {
                                return /^[a-zA-Z0-9\s]+$/.test(value)
                            }
                        },
                        description: {required},
                        score: {
                            required,
                            integer,
                            minValue: minValue(1)
                        },
                        type: {
                            required,
                            valid: function (value) {
                                return /^dynamic|static|manual$/.test(value)
                            }
                        },
                        level: {
                            required,
                            valid: function (value) {
                                return /^easy|medium|hard$/.test(value)
                            }
                        },
                        category: {
                            required,
                            integer,
                            minValue: minValue(1)
                        },
                        url:{
                            url
                        },
                        flag: {
                            required,
                            valid: function (value) {
                                return /^CRISIS\{[a-zA-Z0-9_@$]{6,20}\}$/.test(value)
                            }
                        },
                    }
                }
            }
        },

        validations() {
            console.log(this.rules)
            return {
                chall: this.rules
            }
        },
        created() {
            this.loadCategories();
            this.chall = {
                name: "",
                description: "",
                score: '',
                type: this.types[0],
                level: this.levels[0],
                category: '',
                min_score: 0,
                decay_limit: 0,
                attachment: "",
                flag: "",
                url: ""
            }
            this.submitted = false
        },

        methods: {

            handleSubmit() {
                this.submitted = true;
                this.$v.$touch();
                if (this.$v.$invalid) {
                    console.log("invalid")
                    return;
                }
                console.log("valid")

                this.addChallenge();
            },
            loadCategories() {
                this.$http
                    .get('categories')
                    .then(response => {
                        this.categories = response.data;
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            addChallenge() {
                let formData = new FormData();
                formData.append('name', this.chall.name);
                formData.append('description', this.chall.description);
                formData.append('score', this.chall.score);
                formData.append('type', this.chall.type);
                formData.append('level', this.chall.level);
                formData.append('category', this.chall.category);
                if(this.chall.min_score) formData.append('min_score', this.chall.min_score);
                if(this.chall.decay_limit) formData.append('decay_limit', this.chall.decay_limit);
                if(this.$refs.file.files.length)formData.append('attachment', this.$refs.file.files[0]);
                formData.append('flag', this.chall.flag);
                if(this.chall.url) formData.append('url', this.chall.url);
                this.$http
                    .post('challenges',formData)
                    .then(response => {
                        this.$alertify.success(" success")
                        this.$router.push({name:'Challenge-Profil',params:{id:response.data.data.id} })
                    })
                    .catch(error => {
                        this.showError(Object.values(error.response.data.errors))
                    })
            },
            showError(e) {
                for (var i = 0; i < e.length; i++) {
                    this.$alertify.error(e[i][0]);
                }

            }
        },

    };
</script>

<style scoped>
    .card {
        color: white;
        margin-bottom: 30px;
        border-radius: 12px;
        padding :30px;
        height: fit-content;
        background-color:#19203C;
        font-family: Montserrat;
        font-style: normal;
        font-size: 14px;
        line-height: 30px;

    }
    #deploy{
        background-color: #ECBD34;
        color: #2A2E51;
        font-size: 12px;
        border-radius: 5px;
        line-height: 23px;
        font-weight: bold;
    }
    /deep/ .quillWrapper{
        background-color: white;
        color: black;
    }
    /deep/.ql-formats{
        margin:0!important;
    }
</style>