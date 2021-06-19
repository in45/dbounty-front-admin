<template>
    <main>
        <div class="row mt-5 m-0">
            <div class="col-xl-12 m-auto">
                <div class="row mb-4">
                    <h2 class="col-10">Vulnerabilities</h2>
                    <button class="col-2  btn btn-primary ml-auto"  v-b-modal.new-vuln v-if="is_sudo">Add</button>
                </div>

                <div  style="border-radius:12px;border: solid 3px #32394e">
                    <table class="text-center">
                        <thead>
                        <tr>
                            <th scope="col" >Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                            <th scope="col"  style="min-width: 90px" v-if="is_sudo"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="data in vulnerabilities" v-bind:key="data.id">

                            <td data-label="Name "> {{data.name}}</td>
                            <td data-label="Category "> {{data.category}}</td>
                            <td data-label="Description"> <p class="m-0 p-1" style="border-radius: 4px;border: 1px solid #32394e;">{{data.description}}</p></td>
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

        <new-vuln v-on:refresh-add="loadVulns(1)"/>
        <edit-vuln :v="vuln" v-on:refresh-edit="refresh_edit"/>
        <delete-confirmation :id="selectedId" type="vulnerabilities/" v-on:refresh="refresh_delete"/>
    </main>
</template>

<script>
    import Paginate from "../components/pagination";
    import DeleteConfirmation from "../components/deleteConfirmation";
    import NewVuln from "../components/newVuln";
    import EditVuln from "../components/editVuln";

    export default {
        name: "Vulnerabilities",
        components: {EditVuln, NewVuln, DeleteConfirmation, Paginate},
        created () {
            this.loadVulns(1);
        },
        data(){
            return{
                current_page: 1,
                selectedId: '',
                vuln:{},
                vulnerabilities:[],
                last_page_url:10,
                is_sudo:false


            }
        },

        methods:{
            changePage(page){
                this.current_page = page
                this.loadVulns(page);
            },
            refresh_delete(){
                let index = this.vulnerabilities.findIndex(c => c.id === this.selectedId)
                this.vulnerabilities.splice(index,1)
            },
            refresh_edit(b){
                console.log(b)
                let index = this.vulnerabilities.findIndex(c => c.id === this.vuln.id)
                console.log(index)
                this.vulnerabilities[index]= b

            },
            showEdit(b){
                this.vuln= b
                this.$root.$emit('bv::show::modal', 'edit-vuln')

            },
            deleteItem(id) {
                this.selectedId= id
                this.$root.$emit('bv::show::modal', 'delete')

            },
            loadVulns(page){
                this.$http
                    .get('vulnerabilities?page='+page)
                    .then(response => {
                        console.log(response.data)
                        if(this.$store.state.admin.role === 'sudo') this.is_sudo = true
                        if(this.$store.state.admin.role) {
                            this.vulnerabilities = response.data.data;
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
