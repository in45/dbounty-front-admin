<template>
    <b-modal id="new-vuln" centered  ref="modal" size="md" title-class="font-18"
             hide-footer title="Add Vulnerability" @shown="create">

            <div class="row">

                <div class="col-xl-12 m-auto font-size-14">
                    <form @submit.prevent="addVuln">
                        <div class="form-group  mt-3 mb-0">
                            <label class="mb-2">Name :</label>
                            <b-form-input  type="text" v-model="vuln.name" placeholder="Enter Vulnerability Name"></b-form-input>
                        </div>
                        <div class="form-group  mt-3 mb-0">
                            <label class="mb-2">Category :</label>
                            <b-form-input  type="text" v-model="vuln.category" placeholder="Enter Vulnerability Category"></b-form-input>
                        </div>
                        <div class="form-group mt-3 mb-0">
                            <label class="mb-2">Description :</label>
                            <b-form-textarea  rows="4"  v-model="vuln.description" placeholder="Enter Description"></b-form-textarea>
                        </div>
                        <div class="form-group mt-3 mb-0">
                            <label class="mb-2">Recommendation :</label>
                            <b-form-textarea  rows="4"  v-model="vuln.recommendation" placeholder="Enter Recommendation"></b-form-textarea>
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
        name: "newVuln",

        data(){
            return{

                vuln:{},
            }
        }, methods: {
            create(){
               this.vuln={}

            },
            hideModal() {
                this.vuln={}
                this.$refs['modal'].hide()
            },
            addVuln()
            {
                 this.$http
                    .post('vulnerabilities',this.vuln)
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