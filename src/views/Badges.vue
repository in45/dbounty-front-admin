<template>
    <main>
        <div class="row mt-5 m-0">
            <div class="col-xl-12 m-auto">
                <div class="row mb-4">
                    <h2 class="col-10">Badges</h2>
                    <button class="col-2  btn btn-primary ml-auto"  v-b-modal.add-badge v-if="is_sudo">Add</button>
                </div>

                <div  style="border-radius:12px;border: solid 3px #32394e">
                    <table class="text-center">
                        <thead>
                        <tr>
                            <th scope="col" >#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Tokens</th>
                            <th scope="col"  style="min-width: 90px" v-if="is_sudo"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="data in badges" v-bind:key="data.id">
                            <td data-label="#">
                                <b-avatar :src="data.avatar" :alt="data.title"></b-avatar>
                            </td>
                            <td data-label="Title "> {{data.title}}</td>
                            <td data-label="Description"> <p class="m-0 p-1" style="border-radius: 4px;border: 1px solid #32394e;">{{data.description}}</p></td>
                            <td data-label="Tokens" >{{data.tokens}}</td>
                            <td data-label="Actions" v-if="is_sudo">
                                <ul class="list-inline m-auto">
                                    <li class="list-inline-item m-0 " @click="showEdit(data)"><vue-fontawesome icon="cog" size="1" color="deepskyblue"></vue-fontawesome></li>
                                    <li class="list-inline-item m-0 " @click="deleteItem(data.id)"><vue-fontawesome icon="trash" size="1" color="red"></vue-fontawesome></li>
                                </ul>
                            </td>

                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="text-center my-4">
                    <paginate :current_page=current_page :last_page_url=last_page_url
                              v-on:change-page="changePage"/>
                </div>


            </div>
        </div>

        <new-badge v-on:refresh-add="loadBadges(1)"/>
        <edit-badge :bdg="bdg" v-on:refresh-edit="refresh_edit"/>
        <delete-confirmation :id="selectedId" type="badges/" v-on:refresh="refresh_delete"/>
    </main>
</template>

<script>
    import Paginate from "../components/pagination";

    import DeleteConfirmation from "../components/deleteConfirmation";
    import NewBadge from "../components/newBadge";
    import EditBadge from "../components/editBadge";

    export default {
        name: "Badges",
        components: {EditBadge, NewBadge, DeleteConfirmation, Paginate},
         created () {
        this.loadBadges(1);
    },
        data(){
            return{
                current_page: 1,
                selectedId: '',
                bdg:{},
                badges:[],
                last_page_url:10,
                is_sudo:false


            }
        },

        methods:{
            changePage(page){
                this.current_page = page
                this.loadBadges(page);
            },
            refresh_delete(){
                let index = this.badges.findIndex(c => c.id === this.selectedId)
                this.badges.splice(index,1)
            },
            refresh_edit(b){
                console.log(b)
                let index = this.badges.findIndex(c => c.id === this.bdg.id)
                console.log(index)
                this.badges[index]= b

            },
            showEdit(b){
                this.bdg= b
                this.$root.$emit('bv::show::modal', 'edit-badge')

            },
            deleteItem(id) {
                this.selectedId= id
                this.$root.$emit('bv::show::modal', 'delete')

            },
            loadBadges(page){
            this.$http
                    .get('badges?page='+page)
                    .then(response => {
                        console.log(response.data)
                        if(this.$store.state.admin.role === 'sudo') this.is_sudo = true
                        if(this.$store.state.admin.role) {
                            this.badges = response.data.data;
                        }
                        this.last_page_url = response.data.last_page;
                        this.current_page = response.data.current_page

                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped  src="@/assets/style/table.css"></style>
