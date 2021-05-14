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
            <div class="aspect-tab prio ">
                <input id="item-18" type="checkbox" class="aspect-input" name="aspect">
                <label for="item-18" class="aspect-label"></label>
                <div class="aspect-content">
                    <div class="aspect-info">
                        <b-avatar class="mr-2"></b-avatar>
                        <span class="aspect-name mr-2">Lorem ipsum</span>
                        <b-badge pill variant="info">Status</b-badge>
                    </div>
                    <div class="aspect-stat">
                            <span class="positive-count"><i class="flaticon-bug text-primary mr-2" title="bugs"></i>4</span>
                            <span class="neutral-count"><i class="flaticon-skull  text-primary mr-2" title="reports"></i>13</span>
                            <span class="negative-count"><i class="flaticon-hacker-2 text-primary mr-2" title="hunters"></i>130</span>
                    </div>
                </div>
                <div class="aspect-tab-content">
                    <div class="row">
                        <div class="col-xl-4">
                            <div class="card">
                                <div class=" mb-0 card-title">
                                    <div class="row m-0">
                                    <h5 class="col-7 pt-3 pl-3">Info</h5>
                                    <b-form-select class="col-5"  v-model="val" :options="status" size="sm"></b-form-select>
                                </div>
                                </div>

                                <div class="card-body">
                                    <ul>
                                        <li>Company Name : AAAA</li>
                                        <li>Begin At : AAAA</li>
                                        <li>Finish At : AAAA</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="card">
                                <h5 class="card-title mb-0 pt-3 pl-3">Scopes</h5>
                                <div class="card-body">
                                    <ul>
                                        <li>www.site.com</li>
                                        <li>www.site.com</li>
                                        <li>www.site.com</li>
                                        <li>www.site.com</li>
                                        <li>www.site.com</li>

                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4">
                            <div class="card">
                                <div class="card-title">
                                    <span class="float-right">1389 - 1234 <i class="flaticon-ethereum-2 text-primary ml-1" style="font-size: 18px" title="bounty"></i></span>
                                    <h5 class=" mb-0 pt-3 pl-3">Rewards </h5>
                                </div>
                                    <div class="card-body">
                                    <div class="row m-0">
                                        <span class="col-3">P1</span>
                                        <p class="col-6 text-center prio" >1244 - 1344</p>
                                    </div>
                                    <div class="row m-0">
                                        <span class="col-3">P2</span>
                                        <p class="col-6 text-center prio" >1244 - 1344</p>
                                    </div>
                                    <div class="row m-0">
                                        <span class="col-3">P3</span>
                                        <p class="col-6 text-center prio" >1244 - 1344</p>
                                    </div>
                                    <div class="row m-0">
                                        <span class="col-3">P4</span>
                                        <p class="col-6 text-center prio" >1244 - 1344</p>
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