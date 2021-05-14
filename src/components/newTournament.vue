<template>
    <b-modal id="modal-tournament" centered  ref="modal" title-class="font-22"
             hide-footer hide-header @shown="create">

            <div class="row">

                <div class="col-xl-12 m-auto font-size-14">
                    <form @submit.prevent="addTournament">
                        <div class="form-group  mt-3 mb-0">
                            <label class="col-xl-4">Name :</label>
                            <b-form-input class="col-xl-8" type="text" v-model="tournament.name" placeholder="Enter Tournament name"></b-form-input>
                        </div>
                        <div class="form-group mt-3 mb-0">
                            <label class="col-xl-4">Fee :</label>
                            <b-form-input  class="col-xl-8" type="number" v-model="tournament.fee" placeholder="Enter Fee"></b-form-input>
                        </div>
                        <div class="form-group  mt-3 mb-0">
                            <label class="col-xl-4">No of Players :</label>
                            <b-form-input class="col-xl-8" type="text" v-model="tournament.players" placeholder="Nb of Players"></b-form-input>
                        </div>
                      <div class="form-group mt-3 mb-0">
                            <label class="col-xl-4">Game :</label>
                            <b-form-select  class="col-xl-8" v-model="tournament.game_id">
                                <option v-for="game in games" :key=game.id v-bind:value=game.id> {{game.name}}</option>
                            </b-form-select>
                        </div>
                        <div class="form-group mt-3 mb-0">
                            <label class="col-xl-4">Large Image :</label>
                            <b-form-file  class="col-xl-8"  accept="image/*" ref="large_image"  name="large_image" :placeholder="tournament.large_image"></b-form-file>
                        </div>
                        <div class="form-group mt-3 mb-0">
                            <label class="col-xl-4">Short Image :</label>
                            <b-form-file  class="col-xl-8" accept="image/*" ref="min_image"  name="min_image"  :placeholder="tournament.min_image"></b-form-file>
                        </div>
                        <div class="row form-group mt-3 mb-0">
                            <div class="col-xl-6 d-flex mb-2">
                                <label class="col-xl-7">First Place :</label>
                                <b-form-input  class="col-xl-5" type="number" min="0" v-model="tournament.first_place" placeholder="1er"></b-form-input>
                            </div>
                            <div class="col-xl-6 d-flex ">
                                <label class="col-xl-7">Second Place:</label>
                                <b-form-input  class="col-xl-5" type="number" min="0"  v-model="tournament.second_place" placeholder="2em"></b-form-input>
                            </div>
                        </div>
                        <div class="row form-group mt-3 mb-0">
                            <div class="col-xl-6 d-flex mb-2">
                                <label class="col-xl-7">Third Place :</label>
                                <b-form-input  class="col-xl-5" type="number" min="0"  v-model="tournament.third_place" placeholder="3em"></b-form-input>
                            </div>
                            <div class="col-xl-6 d-flex ">
                                <label class="col-xl-7">Fourth Place :</label>
                                <b-form-input  class="col-xl-5" type="number" min="0"   v-model="tournament.fourth_place" placeholder="4em"></b-form-input>
                            </div>
                        </div>


                        <div class="row pt-3 m-auto">
                            <div class="col-xl-4 m-auto">
                                <input type="submit"  class="btn btn-primary btn-block"  value="Add"/>
                            </div>
                            <div class="col-xl-4 m-auto">
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
        name: "newTournament",

        data(){
            return{
                games:[],
                tournament:{},
            }
        }, methods: {
            create(){
               this.tournament={}
               this.loadGames();
            },
            hideModal() {
                this.tournament={}
                this.$refs['modal'].hide()
            },
            addTournament()
            {
                let formData = new FormData();
                formData.append('name', this.tournament.name);
                formData.append('fee', this.tournament.fee);
                formData.append('players', this.tournament.players);
                formData.append('game_id', this.tournament.game_id);
                formData.append('first_place', this.tournament.first_place);
                formData.append('second_place', this.tournament.second_place);
                formData.append('third_place', this.tournament.third_place);
                formData.append('fourth_place', this.tournament.fourth_place);
                if(this.$refs.large_image.files.length) formData.append('large_image', this.$refs.large_image.files[0]);
                if(this.$refs.min_image.files.length) formData.append('min_image', this.$refs.min_image.files[0]);
                 this.$http
                    .post('tournaments',formData)
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
            loadGames()
            {
                 this.$http
                    .get('games')
                    .then(response => {
                        console.log(response.data)
                        this.games = response.data.data;
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            }
    }

</script>

<style scoped>
    /deep/ .modal-content{
        background-color: #393e46;
        border-radius: 20px!important;
    }
    /deep/ .modal-title{
        margin: auto;
        font-size: 30px;
        font-weight: bold;

    }
    label{
        color: #eee;
        margin:auto;
    }
    /deep/ .modal-header .close{
        margin: 0;
    }


    input[type='text'], input[type='file'], input[type='textarea']{
        border: 0;
        background-color: white;
        color: #222831;
        padding: 10px 10px;
    }


    @media screen and (min-width: 900px) {
        .form-group{
            display: flex;
        }
    }



</style>