<template>
    <b-modal id="company-code" centered ref="modal"   title-class="font-20" hide-footer
             hide-header @shown="create">
        <b-tabs justified nav-class="nav-tabs-custom" content-class="p-3 text-white">
            <b-tab active>
                <template v-slot:title>
                    <span class="d-sm-inline-block font-weight-bold text-muted">Alpha Code</span>
                </template>

                    <div class="form-group mt-3 mb-0">
                        <b-form-input  type="text" v-model="item.alpha_code"  disabled></b-form-input>
                    </div>

                    <div class="row pt-3 m-auto">
                        <div class="col-xl-4 m-auto">
                            <input type="button"  class="btn btn-primary btn-block"  value="Generate" @click="Generate('alpha_code')"/>
                        </div>
                        <div class="col-xl-3 m-auto">
                            <input type="button"  class="btn btn-primary btn-block" @click="hideModal"  value="Cancel" />
                        </div>

                    </div>

            </b-tab>
            <b-tab>
                <template v-slot:title>
                    <span class="d-sm-inline-block font-weight-bold text-muted">Beta Code</span>
                </template>

                    <div class="form-group mt-3 mb-0">
                        <b-form-input  type="text" v-model="item.beta_code"  disabled></b-form-input>
                    </div>

                    <div class="row pt-3 m-auto">
                        <div class="col-xl-3 m-auto">
                            <input type="button"  class="btn btn-primary btn-block"  value="Generate" @click="Generate('beta_code')"/>
                        </div>
                        <div class="col-xl-3 m-auto">
                            <input type="button"  class="btn btn-primary btn-block" @click="hideModal"  value="Cancel" />
                        </div>

                    </div>

            </b-tab>

        </b-tabs>

    </b-modal>
</template>

<script>
    export default {
        name: "companyCode",
        props:['id'],
        data(){
            return{
                item:{},
            }
        },
        methods:{
            create(){
                this.loadCompanyCode()
            },

            hideModal() {
                this.item={}
                this.$refs['modal'].hide()
            },
            loadCompanyCode(){
                this.$http
                    .get('companies/'+this.id+'/code')
                    .then(response => {
                        console.log(response.data)
                        this.item = response.data;

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            Generate(type)
            {
                this.$http
                    .post('companies/'+this.id+'/code',{'type':type})
                    .then(response => {
                        this.item = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        }
    }
</script>

<style scoped>
    /deep/ .modal-content{
        padding: 12px;
        background-color: #393e46;
        border-radius: 20px!important;

    }
    label{
        color: #eee;
        margin:auto;
    }


    /deep/ .nav-tabs .nav-link.active{
        background-color: inherit;
        border: 0;
        border-bottom:solid 1px white;
    }
    /deep/ .nav-tabs .nav-link.active span{
        color: white!important;
    }

    input[type='text'], input[type='file'], input[type='textarea']{
        border: 0;
        background-color: white;
        color: #222831;
        padding: 10px 10px;
    }







</style>