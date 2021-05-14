<template>
    <main>

            <h2 class="my-5">  <b-avatar :src="company.logo" class="mr-2" :alt="company.name"></b-avatar> {{company.name}}</h2>
            <div class="row m-0">
                <div class="col-xl-5">
                    <div class="card">
                        <div class="card-body">
                            <h4>Infos</h4>
                            <ul>
                                <li>Website : {{company.website}}</li>
                                <li>Email : {{company.email}}</li>
                                <li>Phone : {{company.phone}}</li>
                                <li>Balance : {{company.balance}}</li>
                            </ul>
                            <p>{{company.description}}</p>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="card-body">
                            <h4>Managers</h4>
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
                            <h4>Programs</h4>
                                <div class="row m-1 p-1 prio ">
                                        <div class="col-xl-6">
                                            <b-avatar class="mr-2"></b-avatar>
                                            <span class="aspect-name mr-2">Lorem ipsum</span>
                                            <b-badge pill variant="info">Status</b-badge>
                                        </div>
                                        <div class="col-xl-6">
                                            <span class="positive-count"><i class="flaticon-bug text-primary mr-2" title="bugs"></i>4</span>
                                            <span class="neutral-count"><i class="flaticon-skull  text-primary mr-2" title="reports"></i>13</span>
                                            <span class="negative-count"><i class="flaticon-hacker-2 text-primary mr-2" title="hunters"></i>130</span>
                                        </div>
                                </div>

                        </div>

                    </div>
                </div>
            </div>
    </main>
</template>

<script>
    export default {
        name: "ProfilCompany",
        data(){
            return{
                company:{},
                managers:[]
            }
        },
        created(){
            this.loadCompany()
            this.getManagers()
        },
        methods:{
            changeRole(){

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
        }
    }
</script>

<style scoped  src="@/assets/style/prog.css"></style>