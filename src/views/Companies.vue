<template>
    <main>
        <div class="row mt-5 m-0">
            <div class="col-xl-12 m-auto">
                <div class="row mb-4">
                    <h2 class="col-10">Companies</h2>
                    <button class="col-2  btn btn-primary ml-auto"  v-b-modal.add-company>Add</button>
                </div>

                <div  style="border-radius:12px;border: solid 3px #32394e">
                    <table class="text-center">
                        <thead>
                        <tr>
                            <th scope="col" >#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Website</th>
                            <th scope="col">Balance</th>
                            <th scope="col">Managers</th>
                            <th scope="col"  style="min-width: 100px"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="data in companies" v-bind:key="data.id">
                            <td data-label="#">
                                <b-avatar :src="data.logo" :alt="data.name"></b-avatar>
                            </td>
                            <td data-label="Name ">
                               <router-link  :to="{name:'ProfilCompany',params:{id:data.id}}"> {{data.name}}</router-link>
                            </td>
                            <td data-label="Balance "> {{data.website}}</td>
                            <td data-label="Balance "> {{data.balance}}</td>
                            <td data-label="Managers">{{data.managers_count}}</td>
                            <td data-label="Actions">
                                <ul class="list-inline m-auto">
                                    <li class="list-inline-item m-0 " @click="showEdit(data)"><vue-fontawesome icon="cog" size="1" color="deepskyblue"></vue-fontawesome></li>
                                    <li class="list-inline-item m-0 " @click="showCode(data.id)"><vue-fontawesome icon="lock" size="1" color="black" title="code"></vue-fontawesome></li>
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

        <new-company v-on:refresh-add="loadCompanies(1)"/>
        <edit-company :companie="company" v-on:refresh-edit="refresh_edit"/>
        <delete-confirmation :id="selectedId" type="companies/" v-on:refresh="refresh_delete"/>
        <company-code :id="selectedId" v-on:refresh="refresh_delete"/>
    </main>
</template>

<script>
    import Paginate from "../components/pagination";
    import DeleteConfirmation from "../components/deleteConfirmation";
    import CompanyCode from "../components/companyCode";
    import NewCompany from "../components/newCompany";
    import EditCompany from "../components/editCompany";

    export default {
        name: "Companies",
        components: {EditCompany, NewCompany, CompanyCode, DeleteConfirmation, Paginate},
        created () {
            this.loadCompanies(1);
        },
        data(){
            return{
                current_page: 1,
                selectedId: '',
                company:{},
                companies:[],
                last_page_url:10,


            }
        },

        methods:{
            changePage(page){
                this.current_page = page
                this.loadCompanies(page);
            },
            refresh_delete(){
                let index = this.companies.findIndex(c => c.id === this.selectedId)
                this.companies.splice(index,1)
            },
            refresh_edit(b){
                console.log(b)
                let index = this.companies.findIndex(c => c.id === this.company.id)
                console.log(index)
                this.companies[index]= b

            },
            showEdit(b){
                this.company= b
                this.$root.$emit('bv::show::modal', 'edit-company')

            },
            showCode(id){
                this.selectedId= id
                this.$root.$emit('bv::show::modal', 'company-code')

            },
            deleteItem(id) {
                this.selectedId= id
                this.$root.$emit('bv::show::modal', 'delete')

            },
            loadCompanies(page){
                this.$http
                    .get('companies?page='+page)
                    .then(response => {
                        console.log(response.data)
                        this.companies = response.data.data;
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
