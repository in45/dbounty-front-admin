<template>
    <b-modal id="edit-company" centered  ref="modal" size="md" title-class="font-18"
             hide-footer title="Edit Company" @shown="create">

            <div class="row">

                <div class="col-xl-12 m-auto font-size-14">
                    <form @submit.prevent="editCompany">
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

                        <div class="form-group mt-3 mb-0">
                            <label class="mb-2">Logo :</label>
                            <b-form-file   accept="image/*" ref="logo"  name="logo" :placeholder="company.logo"></b-form-file>
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
        name: "editCompany",
        props:['companie'],

        data(){
            return{

                company:{},
            }
        }, methods: {
            create(){
               this.company={...this.companie}

            },
            hideModal() {
                this.company={}
                this.$refs['modal'].hide()
            },
            editCompany(){
                let formData = new FormData();
                formData.append('name', this.company.name);
                formData.append('website', this.company.website);
                formData.append('email', this.company.email);
                formData.append('description', this.company.description);
                if(this.$refs.logo.files.length) formData.append('logo', this.$refs.logo.files[0]);
                 this.$http
                    .post('companies/'+this.companie.id,formData)
                    .then(response => {
                        this.$emit('refresh-edit',response.data)
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