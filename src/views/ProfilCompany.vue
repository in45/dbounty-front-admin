<template>
    <main>

            <h2 class="my-5">  <b-avatar :src="company.logo" class="mr-2" :alt="company.name"></b-avatar> {{company.name}}</h2>
            <div class="row m-0">
                <div class="col-xl-5">
                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-2">
                                <h4 class="col-9">Infos</h4>
                                <div class="col-3 text-right">
                                    <vue-fontawesome v-b-modal.edit-company icon="cog" class="mr-2" size="1" color="deepskyblue"></vue-fontawesome>
                                    <vue-fontawesome v-b-modal.company-code icon="lock" size="1" color="black" title="code"></vue-fontawesome>
                                </div>
                            </div>
                                <h6 class="mb-1"><i class="fa fa-globe mr-3"></i>{{company.website}}</h6>
                                <h6 class="mb-1"><i class="fa fa-at mr-3"></i>{{company.email}}</h6>
                                <h6 class="mb-1"><i class="fa fa-phone mr-3"></i>{{company.phone}}</h6>
                                <h6 class="mb-1"><i class="flaticon-ethereum-1 mr-3"></i>{{company.balance}}</h6>

                            <p>{{company.description}}</p>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="card-body">
                            <h4 class="mb-2">Managers</h4>
                            <table class="table table-centered table-nowrap">
                                <thead>
                                <tr class="text-center">
                                    <td></td>
                                    <td>username</td>
                                    <td>role</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="data of managers" :key="data.id">
                                    <td data-label="#">
                                        <b-avatar :src="data.manager.avatar"></b-avatar>
                                    </td>
                                    <td data-label="Username ">{{data.manager.username}}</td>
                                    <td data-label="Role " >
                                        <b-form-select @change="changeRole(data.manager_address)" v-model="data.manager.role" :options="['sysalpha', 'sysbeta']" ></b-form-select>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-xl-7">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="mb-4">Programs</h4>
                                <div class="row mx-1 mb-2 p-1 prio " v-for="data of programs" :key="data.id">
                                        <div class="col-xl-6">
                                            <b-avatar class="mr-2"></b-avatar>
                                            <span class="aspect-name mr-2">{{data.name}}</span>
                                            <b-badge pill variant="info">{{data.status}}</b-badge>
                                        </div>
                                        <div class="col-xl-6 m-auto">
                                            <ul class="row  list-inline my-0 p-0">

                                                <li class="col-3 p-0 ">
                                                    <i class="flaticon-cyber-security-2 text-primary mr-2" title="type"></i>{{data.type}}
                                                </li>
                                                <li class="col-3 p-0 ">
                                                    <i class="flaticon-skull  text-primary mr-2" title="reports"></i>{{data.reports_count}}
                                                </li>
                                                <li class="col-3 p-0 ">
                                                    <i class="flaticon-hacker-2 text-primary mr-2" title="hunters"></i>{{data.users_count}}
                                                </li>


                                            </ul>
                                        </div>
                                </div>

                        </div>

                    </div>
                </div>
            </div>
        <edit-company :companie="company" v-on:refresh-edit="refresh_edit"/>
        <company-code :id="$route.params.id" />
    </main>
</template>

<script>
    import EditCompany from "../components/editCompany";
    import CompanyCode from "../components/companyCode";
    export default {
        name: "ProfilCompany",
        components: {CompanyCode, EditCompany},
        data(){
            return{
                company:{},
                managers:[],
                programs:[]
            }
        },
        created(){
            this.loadCompany()
            this.getPrograms()
            this.getManagers()

        },
        methods:{
            changeRole(){

            },
            refresh_edit(data){
                this.company = data
            },
            loadCompany(){
                this.$http
                    .get('companies/'+this.$route.params.id)
                    .then(response => {
                        console.log(response.data)
                        this.company = response.data;

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getManagers(){
                this.$http
                    .get('companies/'+this.$route.params.id+'/managers')
                    .then(response => {
                        console.log(response.data)
                        this.managers = response.data;

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getPrograms(){
                this.$http
                    .get('companies/'+this.$route.params.id+'/programs')
                    .then(response => {
                        console.log(response.data)
                        this.programs = response.data;


                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        }
    }
</script>

<style scoped>
    .prio{
        box-shadow: 0 8px 10px 0 rgba(0, 0, 0, .2);
        border-radius: 4px;
        border: 1px solid #242a32;
    }
</style>