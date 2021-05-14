<template>
    <b-modal id="edit-badge" centered  ref="modal" size="md" title-class="font-18"
             hide-footer title="Edit Badge" @shown="create">

            <div class="row">

                <div class="col-xl-12 m-auto font-size-14">
                    <form @submit.prevent="editBadge">
                        <div class="form-group  mt-3 mb-0">
                            <label class="mb-2">Title :</label>
                            <b-form-input  type="text" v-model="badge.title" placeholder="Enter Badge Title"></b-form-input>
                        </div>
                        <div class="form-group mt-3 mb-0">
                            <label class="mb-2">Description :</label>
                            <b-form-textarea  rows="4"  v-model="badge.description" placeholder="Enter Description"></b-form-textarea>
                        </div>

                        <div class="form-group mt-3 mb-0">
                            <label class="mb-2">Avatar :</label>
                            <b-form-file   accept="image/*" ref="avatar"  name="avatar"  :placeholder="badge.avatar"></b-form-file>
                        </div>
                        <div class="row pt-3 m-auto">
                            <div class="col-xl-3 m-auto">
                                <input type="submit"  class="btn btn-primary btn-block"  value="Save"/>
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
        name: "editBadge",
        props:['bdg'],

        data(){
            return{
                badge:{},
            }
        }, methods: {
            create(){
               this.badge={ ...this.bdg}

            },
            hideModal() {
                this.badge={}
                this.$refs['modal'].hide()
            },
            editBadge()
            {
                let formData = new FormData();
                formData.append('title', this.badge.title);
                formData.append('description', this.badge.description);
                if(this.$refs.avatar.files.length) formData.append('avatar', this.$refs.avatar.files[0]);
                 this.$http
                    .post('badges/'+this.bdg.id,formData)
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