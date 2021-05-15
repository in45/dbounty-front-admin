<template>
    <main>
        <div class="row mt-5 m-0">
            <div class="col-xl-11 ">


                    <div class="searchBox float-right">
                        <input class="searchInput" type="text" name="" placeholder="Search">
                        <button class="searchButton" href="#">
                            <i class="fa fa-search">
                            </i>
                        </button>
                    </div>
                    <h2 class="mb-4">Programs</h2>

                    <div id="aspect-content">
            <div class="aspect-tab prio "  v-for="data of programs" :key="data.id">
                <input :id="data.id" type="checkbox" class="aspect-input" name="aspect">
                <label :for="data.id" class="aspect-label"></label>
                <div class="aspect-content">
                    <div class="col-xl-6">
                        <b-avatar class="mr-2"></b-avatar>
                        <span class="aspect-name mr-2">  {{data.name}}</span>
                        <b-badge pill variant="info">{{data.status}}</b-badge>
                    </div>
                    <div class="col-xl-6 m-auto text-right">
                        <ul class="row  list-inline my-0 p-0">
                            <li class="col-3 p-0 ">
                                <i class="flaticon-bug text-primary mr-2" title="type"></i>{{data.reports_count}}
                            </li>
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
                <div class="aspect-tab-content ">
                    <div class="row m-0 py-2">
                        <div class="col-xl-5">
                            <div class="card">
                                <div class=" mb-0 card-title">
                                    <div class="row m-0">
                                    <h5 class="col-7 pt-3 pl-3">Info</h5>
                                    <b-form-select class="col-5"  v-model="data.status" :options="status" size="sm"></b-form-select>

                                </div>
                                </div>

                                <div class="card-body">
                                    <h6 class="mb-2"><b-avatar :src="data.company.logo" class="mr-2" alt="Company"></b-avatar> {{data.company.name}}</h6>
                                    <h6 class="mb-2"><span class="text-info">Begin At :</span> {{data.begin_at}}</h6>
                                    <h6 class="mb-2"><span class="text-info">Finish At :</span> {{data.finish_at}}</h6>
                                    <p>{{JSON.parse(data.description).info}}</p>
                                    <b-badge class="float-right p-1" role="button"  @click="$router.push({name:'ProfilProgram',params:{id:data.id}})" pill variant="info">view more</b-badge>

                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="card">
                                <h5 class="card-title mb-0 pt-3 pl-3">Scopes</h5>
                                <div class="card-body" v-html="data.scopes">
                                    {{data.scopes}}
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3">
                            <div class="card">
                                <div class="card-title">
                                    <span class="float-right">{{data.min_bounty+ ' - '+ data.max_bounty}} <i class="flaticon-ethereum-2 text-primary ml-1" style="font-size: 18px" title="bounty"></i></span>
                                    <h5 class=" mb-0 pt-3 pl-3">Rewards </h5>
                                </div>
                                    <div class="card-body">
                                    <div class="row m-0">
                                        <span class="col-4">P1</span>
                                        <p class="col-6 text-center prio" >{{JSON.parse(data.description).rewards.p1}}</p>
                                    </div>
                                    <div class="row m-0">
                                        <span class="col-4">P2</span>
                                        <p class="col-6 text-center prio" >{{JSON.parse(data.description).rewards.p2}}</p>
                                    </div>
                                    <div class="row m-0">
                                        <span class="col-4">P3</span>
                                        <p class="col-6 text-center prio" >{{JSON.parse(data.description).rewards.p3}}</p>
                                    </div>
                                    <div class="row m-0">
                                        <span class="col-4">P4</span>
                                        <p class="col-6 text-center prio" >{{JSON.parse(data.description).rewards.p4}}</p>
                                    </div>
                                    <div class="row m-0">
                                            <span class="col-4">P5</span>
                                            <p class="col-6 text-center prio" >{{JSON.parse(data.description).rewards.p5}}</p>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
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
        name: "Programs",
        components: {Paginate},
        data(){
            return{
                current_page: 1,
                status:['none','new','open','closed'],
                programs:[],
                val:'new',
                last_page_url:6,

            }
        },
        created () {
        this.loadPrograms(1);
    },


        methods:{
            changePage(page){
                this.current_page = page;
                this.loadPrograms(page);
            },

            loadPrograms(page)
            {
                    this.$http
                    .get('programs?page='+page)
                    .then(response => {
                        console.log(response.data)
                        this.programs = response.data.data;
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

<style scoped  src="@/assets/style/prog.css"></style>
<style scoped>

    .searchBox {

        transform: translate(-2%,50%);
        background: #2f3640;
        height: 40px;
        border-radius: 40px;


    }

    .searchBox:hover > .searchInput {
        width: 240px;
        padding: 0 16px;
    }

    .searchBox:hover > .searchButton {
        background: white;
        color : #2f3640;
    }

    .searchButton {
        color: white;
        float: right;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #2f3640;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s;
    }

    .searchInput {
        border:none;
        background: none;
        outline:none;
        float:left;
        padding: 0;
        color: white;
        font-size: 16px;
        transition: 0.4s;
        line-height: 40px;
        width: 0px;

    }

    @media screen and (max-width: 620px) {
        .searchBox:hover > .searchInput {
            width: 180px;
            padding: 0 14px;
        }
    }
</style>