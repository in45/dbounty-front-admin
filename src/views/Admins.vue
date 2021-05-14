<template>
    <main>
        <div class="row mt-5 m-0">
            <div class="col-xl-12 m-auto">
                <div class="row mb-4">
                    <h2 class="col-10">Admins</h2>
                    <button class="col-2  btn btn-primary ml-auto"  v-b-modal.new-admin>Add</button>
                </div>

                <div  style="border-radius:12px;border: solid 3px #32394e">
                    <table class="text-center">
                        <thead>
                        <tr>
                            <th scope="col" >#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col" >Role</th>
                            <th scope="col"  style="min-width: 90px"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(data,index) in admins" v-bind:key="data.compte_address">

                            <td data-label="#">
                                <b-avatar :src="data.avatar" :alt="data.title"></b-avatar>
                            </td>
                            <td data-label="Username ">
                               <span> @{{data.username}}</span><br/>
                                <span class="px-1" style="border-radius: 4px;border: 1px solid #32394e;">{{data.compte_address}}</span>
                            </td>
                            <td data-label="Email "> {{data.email}}</td>
                            <td data-label="Role " >
                                <b-form-select @change="changeRole(index)" v-model="data.role" :options="['sudo', 'sysmanage', 'sysmoni']" ></b-form-select>
                            </td>
                            <td data-label="Actions">
                                <ul class="list-inline m-auto">
                                    <li class="list-inline-item m-0 " @click="showEdit(data)"><vue-fontawesome icon="cog" size="1" color="deepskyblue"></vue-fontawesome></li>
                                    <li class="list-inline-item m-0 " @click="deleteItem(data.compte_address)"><vue-fontawesome icon="trash" size="1" color="red"></vue-fontawesome></li>
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

        <new-vuln v-on:refresh-add="loadAdmins(1)"/>
        <edit-vuln :admin="admin" v-on:refresh-edit="refresh_edit"/>
        <delete-confirmation :id="selectedId" type="admins/" v-on:refresh="refresh_delete"/>
    </main>
</template>

<script>
    import Paginate from "../components/pagination";
    import DeleteConfirmation from "../components/deleteConfirmation";
    import NewVuln from "../components/newVuln";
    import EditVuln from "../components/editVuln";

    export default {
        name: "Admins",
        components: {EditVuln, NewVuln, DeleteConfirmation, Paginate},
        created () {
            this.loadAdmins(1);
        },
        data(){
            return{
                current_page: 1,
                selectedId: '',
                admin:{},
                admins:[],
                last_page_url:10,


            }
        },

        methods:{
            changePage(page){
                this.current_page = page
                this.loadVulns(page);
            },
            refresh_delete(){
                let index = this.admins.findIndex(c => c.id === this.selectedId)
                this.admins.splice(index,1)
            },
            refresh_edit(b){
                console.log(b)
                let index = this.admins.findIndex(c => c.id === this.admin.id)
                console.log(index)
                this.admins[index]= b

            },
            showEdit(b){
                this.admin= b
                this.$root.$emit('bv::show::modal', 'edit-admin')

            },
            changeRole(index){
                this.$http
                    .post('admins/'+this.admins[index].compte_address,{'role':this.admins[index].role})
                    .then(response => {
                        console.log(response.data)
                        this.$alertify.success(" success")

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            deleteItem(id) {
                this.selectedId= id
                this.$root.$emit('bv::show::modal', 'delete')

            },
            loadAdmins(page){
                this.$http
                    .get('admins?page='+page)
                    .then(response => {
                        console.log(response.data)
                        this.admins = response.data.data;
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
