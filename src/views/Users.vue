<template>
    <main>
        <div class="row mt-5 m-0">
            <div class="col-xl-12 m-auto">
                <h2 class="mb-4">Users</h2>
                <div  style="border-radius:12px;border: solid 3px #32394e">
                    <table class="text-center">
                        <thead>
                        <tr>
                            <th scope="col" >#</th>
                            <th scope="col">Username</th>
                            <th scope="col" >Reputation</th>
                            <th scope="col" >Programs</th>
                            <th scope="col" >Reports</th>
                            <th scope="col" >Thanks</th>
                            <th scope="col"  style="min-width: 90px"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(data,index) in users" v-bind:key="data.id">

                            <td data-label="#">
                                <b-avatar :src="data.avatar" :alt="data.title"></b-avatar>
                            </td>
                            <td data-label="Username ">
                                <router-link  :to="{name:'ProfilUser',params:{id:data.id}}"> @{{data.username}}</router-link><br/>
                                <span class="px-1" style="border-radius: 4px;border: 1px solid #32394e;">{{data.public_address}}</span>
                            </td>
                            <td data-label="Reputation" > {{data.reputation}}</td>
                            <td data-label="Programs" > {{data.count_programs}}</td>
                            <td data-label="Reports" > {{data.count_reports}}</td>
                            <td data-label="Thanks" > {{data.thanks}}</td>
                            <td data-label="State">
                                <button class="btn-outline" v-on:click="banneUser($event,index)"  v-bind:class="{ banned: data.state=='0' }" :disabled="!is_sudo">{{ (data.state == '0') ? 'Unban': 'Ban' }}</button>
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

    </main>
</template>

<script>
    import Paginate from "../components/pagination";

    export default {
        name: "Users",
        components: { Paginate},
        created () {
            this.loadUsers(1);
        },
        data(){
            return{
                current_page: 1,
                users:[],
                last_page_url:10,
                is_sudo:false

            }
        },

        methods:{
            changePage(page){
                this.current_page = page
                this.loadUsers(page);
            },

            loadUsers(page){
                this.$http
                    .get('users?page='+page)
                    .then(response => {
                        console.log(response.data)
                        if(this.$store.state.admin.role === 'sudo') this.is_sudo = true
                        if(this.$store.state.admin.role) {
                            this.users = response.data.data;
                        }
                        this.last_page_url = response.data.last_page;
                        this.current_page = response.data.current_page

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            banneUser(event,index){
                this.$http
                    .put('users/'+this.users[index].id+'/ban')
                    .then(response => {
                        console.log(response.data);
                        this.$alertify.success(" success")
                        this.users[index].state = ! this.users[index].state
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
        }
    }
</script>

<style scoped  src="@/assets/style/table.css"></style>
<style scoped>

    .btn-outline {
        border: 2px white solid;
        font-size: 13px;
        border-radius: 14px;
        margin-left: auto;
        background: #4AD295;
        outline: none;
        width: 60px;
    }
    .banned {
        background: #19203C;
        color: white;
    }

</style>