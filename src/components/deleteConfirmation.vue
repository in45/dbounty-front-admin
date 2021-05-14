<template>
    <b-modal id="delete" ref="modal" centered  title="Confirmation de la suppression" @ok="handleOk">

        <p class="my-4">Etes-vous sur de vouloir supprimer cette element ?</p>
    </b-modal>
</template>

<script>

    export default {
        name: "deleteConfirmation",
        props:['id','type'],
        methods:{
            handleOk(bvModalEvt) {
                // Prevent modal from closing
                bvModalEvt.preventDefault()
                this.$http
                    .delete(this.type + this.id)
                    .then(response => {
                        this.$emit('refresh')
                        this.$refs['modal'].hide()
                        this.$alertify.success("Success :)")
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                        this.$alertify.error("Error !!");
                    })

            },


        }
    }
</script>
