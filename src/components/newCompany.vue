<template>
    <b-modal id="add-company" centered  ref="modal" size="md" title-class="font-18"
             hide-footer title="Add Company" @shown="create">

            <div class="row">

                <div class="col-xl-12 m-auto font-size-14">
                    <form @submit.prevent="addCompany">
                        <div class="form-group  mt-3 mb-0">
                            <label class="mb-2">Company Name :</label>
                            <b-form-input  type="text" v-model="company.name" placeholder="Enter Company Name"></b-form-input>
                        </div>
                        <div class="form-group  mt-3 mb-0">
                            <label class="mb-2">Website :</label>
                            <b-form-input  type="text" v-model="company.website" placeholder="Enter Company Website"></b-form-input>
                        </div>
                        <div class="row m-0">
                           <div class="form-group col-xl-6  pl-0 mt-3 mb-0">
                                    <label class="mb-2">Email Professionel :</label>
                                    <b-form-input  type="email" v-model="company.email" placeholder="Enter Company Email"></b-form-input>
                                </div>
                            <div class="form-group col-xl-6 pr-0 mt-3 mb-0">
                                <label class="mb-2">Phone Number :</label>
                                <b-form-input  type="text" v-model="company.phone" placeholder="Enter Company Phone"></b-form-input>
                            </div>
                        </div>


                        <div class="form-group mt-3 mb-0">
                            <label class="mb-2">Description :</label>
                            <b-form-textarea  rows="4"  v-model="company.description" placeholder="Enter Description"></b-form-textarea>
                        </div>
                        <div class="row m-0">
                            <div class="form-group col-xl-6 pl-0 mt-3 mb-0">
                                <label class="mb-2">Balance :</label>
                                <b-form-input  type="text" v-model="company.balance" placeholder="Enter Company Balance"></b-form-input>
                            </div>
                            <div class="form-group col-xl-6  pr-0 mt-3 mb-0">
                            <label class="mb-2">Logo :</label>
                            <b-form-file   accept="image/*" ref="logo"  name="logo"></b-form-file>
                             </div>
                        </div>
                        <div class="row pt-3 m-auto">
                            <div class="col-xl-3 m-auto">
                                <input type="submit"  class="btn btn-primary btn-block"  value="Add"/>
                            </div>
                            <div class="col-xl-3 m-auto">
                                <input type="button"  class="btn btn-primary btn-block" @click="hideModal"   value="Cancel" />
                            </div>

                        </div>
                    </form>

                </div>


            </div>

    </b-modal>
</template>

<script>

    export default {
        name: "newCompany",

        data(){
            return{

                company:{},
            }
        }, methods: {
            create(){
               this.company={}

            },
            hideModal() {
                this.company={}
                this.$refs['modal'].hide()
            },
            addCompany(){
                let formData = new FormData();
                formData.append('name', this.company.name);
                formData.append('website', this.company.website);
                formData.append('email', this.company.email);
                formData.append('phone', this.company.phone);
                formData.append('balance', this.company.balance);
                formData.append('description', this.company.description);
                if(this.$refs.logo.files.length) formData.append('logo', this.$refs.logo.files[0]);
                 this.$http
                    .post('companies',formData)
                    .then(response => {
                        this.$emit('refresh-add')
                        console.log(response.data)
                        this.$alertify.success("Success :)")
                        this.hideModal()
                    })
                    .catch(error => {
                        console.log(error)
                        this.$alertify.error("Error !!");
                    })
            },

            }
    }

</script>


<style scoped  src="@/assets/style/popup.css"></style>