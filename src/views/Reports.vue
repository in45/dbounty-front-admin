<template>
    <main>
        <div class="card mt-5">
            <div class="row m-0">
                <div class="col-xl-4 border-right">
                    <div class="row m-0 pt-2 pb-3">
                        <div class="col-5 ">
                            <b-form-select :options="status" size="sm"></b-form-select>
                        </div>
                        <div class="col-5  ml-auto">
                            <b-form-select :options="dates" size="sm"></b-form-select>
                        </div>
                    </div>
                    <simplebar style="max-height: 450px;padding-right: 12px;padding-left: 12px;">
                    <div class="card report  mb-3"  :class=" {'selected': selected_report.id == data.id}" v-for="data in reports" v-bind:key="data.id" @click="selected_report = data">
                        <div class="card-body ">
                            <h6 class="link  font-size-13 link">{{data.title}}</h6>
                            <h6 class="link text-truncate font-size-13 link">@{{data.user_address}}</h6>
                            <p class="text-muted mb-0" v-if="data.vuln_id">{{data.vuln.name}}</p>
                            <p class="text-muted mb-0" v-else>{{data.vuln_name}}</p>
                            <b-badge class="float-right" variant="info">{{data.status}}</b-badge>
                        </div>
                    </div>
                    </simplebar>
                </div>
                <div class="col-xl-8 py-2">
                    <div class="card ">
                        <div class="card-header">
                            <div class="row m-0">
                                <div class="col-xl-4  border-right m-auto">
                                    <b-avatar class="mr-2" :src="selected_report.user.avatar"
                                              :title="selected_report.user_address"></b-avatar>
                                    <span class="address">@{{selected_report.user.username}}</span>
                                </div>
                                <div class="col-xl-8 m-auto">
                                    <ul class="row  list-inline m-0 p-0">
                                        <li class="col-xl-3 col-md-6 col-sm-6 w-50 text-center">
                                            <p class="mb-0">Reports</p>
                                            <h6>{{selected_report.user.count_reports}}</h6>
                                        </li>
                                        <li class="col-xl-3 col-md-6 col-sm-6 w-50 text-center">
                                            <p class="mb-0">Score</p>
                                            <h6>{{selected_report.user.score}}</h6>
                                        </li>
                                        <li class="col-xl-3 col-md-6 col-sm-6 w-50 text-center">
                                            <p class="mb-0">Programs</p>
                                            <h6>{{selected_report.user.count_programs}}</h6>
                                        </li>
                                        <li class="col-xl-3 col-md-6 col-sm-6 w-50 text-center">
                                            <p class="mb-0">Thanks</p>
                                            <h6>{{selected_report.user.thanks}}</h6>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-title border-bottom mb-0 p-2">
                            <p class="text-muted float-right" style="font-size: 11px">{{selected_report.time_diff}}</p>
                            <h5>{{selected_report.title}}</h5>
                        </div>

                        <div class="card-body">
                            <div class="row mx-0 mb-2">
                                <b-badge style="font-size: 13px" class="p-3 mr-3"  role="button" v-b-toggle.report variant="dark">Edit Report</b-badge>
                                <b-badge style="font-size: 13px" class="p-3" role="button" v-b-toggle.messages variant="dark">View Messages</b-badge>
                                <b-form-select class="float-right ml-auto" style="width: 110px" v-model="selected_report.status" :options="status"></b-form-select>
                            </div>

                             <div role="tablist">
                                        <b-card no-body class="mb-1">
                                            <b-card-header header-tag="header" role="tab" v-b-toggle.info
                                                           style="cursor: pointer">
                                                <h6>
                                                    <i class="fa fa-chevron-circle-right  mr-3"></i>
                                                    <strong>Target & vulnerability</strong></h6>
                                            </b-card-header>
                                            <b-collapse id="info" accordion="my-accordion" visible role="tabpanel">
                                                <b-card-body>
                                                    <b-card-text>
                                                        <b-form-select class="float-right" style="width: 100px" v-model="selected_report.severity" :options="['none','low','medium','high','critical']"></b-form-select>

                                                        <ul>
                                                            <li>Target : {{selected_report.target}}</li>
                                                            <li v-if="selected_report.vuln_id">Vulnerability :
                                                                {{selected_report.vuln.name}}
                                                            </li>
                                                            <li v-if="selected_report.vuln_id">Category :
                                                                {{selected_report.vuln.category}}
                                                            </li>
                                                            <li v-else>Vulnerability : {{selected_report.vuln_name}}
                                                            </li>
                                                        </ul>

                                                    </b-card-text>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>
                                        <b-card no-body class="mb-1">
                                            <b-card-header header-tag="header" role="tab" v-b-toggle.details
                                                           style="cursor: pointer">
                                                <h6><i class="fa fa-chevron-circle-right  mr-3"></i><strong>Program
                                                    vulnerability Details</strong></h6>
                                            </b-card-header>
                                            <b-collapse id="details" accordion="my-accordion" role="tabpanel">
                                                <b-card-body>
                                                    <b-card-text v-html="selected_report.vuln_details">
                                                        {{selected_report.vuln_details}}

                                                    </b-card-text>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>
                                        <b-card no-body class="mb-1">
                                            <b-card-header header-tag="header" role="tab" v-b-toggle.steps
                                                           style="cursor: pointer">
                                                <h6><i class="fa fa-chevron-circle-right  mr-3"></i> <strong>Program
                                                    Validation Steps</strong></h6>
                                            </b-card-header>
                                            <b-collapse id="steps" accordion="my-accordion" role="tabpanel">
                                                <b-card-body>
                                                    <b-card-text v-html="selected_report.validation_steps">
                                                        {{selected_report.validation_steps}}
                                                    </b-card-text>
                                                    <button class="float-right btn btn-info"
                                                            v-if="selected_report.file_upload">Download Attachment
                                                    </button>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>
                                    </div>

                            <b-sidebar id="report" title="Edit Report" width="600px" bg-variant="dark" text-variant="light" right shadow>

                                <div class="px-3 py-2">
                                <form id="form" method="POST" >
                                    <div class="form-group row my-1 mx-0">
                                        <label class="pb-2 col-xl-4 m-auto"> Vulnerability Title </label>
                                        <b-form-input class="col-xl-8" v-model="selected_report.vuln_name" type="text" placeholder="Add your vulnerability" ></b-form-input>
                                    </div>
                                    <div class="form-group row my-1 mx-0">
                                        <label class="pb-2 col-xl-4 m-auto"> Target </label>
                                        <b-form-select class="col-xl-8" v-model="selected_report.target" placeholder="Add your Target" :options="['a','b','c']"></b-form-select>
                                    </div>
                                    <div class="form-group row my-1 mx-0">
                                        <label class="pb-2 col-xl-4 m-auto"> Vulnerability Category </label>
                                        <b-form-input list="browsers" class="col-xl-8" name="browser" v-model="selected_report.vuln.category" id="browser"></b-form-input>
                                        <datalist class="col-xl-8" id="browsers">
                                            <option v-for="c in categories" :key="c.id" :value="c.title">{{c.title}}</option>
                                        </datalist>

                                    </div>
                                    <div class="form-group  row my-1 mx-0">
                                        <label class="pb-2 pl-3"> Vulnerability Details </label>
                                        <vue-editor v-model="selected_report.vuln_details"></vue-editor>
                                    </div>
                                    <div class="form-group row my-1 mx-0">
                                        <label class="pb-2 pl-3"> Validations Steps </label>
                                        <vue-editor v-model="selected_report.validation_steps"></vue-editor>
                                    </div>
                                    <input type="submit" value="Save" class="bg-primary text-white float-right my-2"/>
                                </form>
                                </div>
                            </b-sidebar>
                            <b-sidebar id="messages" title="Messages" bg-variant="dark" text-variant="light" right shadow>
                                <div class="px-3 py-2">
                                    <div class="chat-message">
                                        <ul class="chat">
                                            <li class="left row mx-0 mb-2 ">
                                                <div class="col-xl-3 p-0">
                                                    <b-avatar  alt="User Avatar"></b-avatar>
                                                </div>

                                                <div class="chat-body col-xl-9 ">
                                                    <div class="header p-2">
                                                        <strong class="primary-font">John Doe</strong>
                                                        <small class="pull-right text-muted"><i
                                                                class="fa fa-clock-o"></i> 12 mins ago</small>
                                                    </div>
                                                    <p class="p-2">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </p>
                                                </div>
                                            </li>
                                            <li class="right mb-2">
                                                <div class="chat-body ">
                                                    <div class="header p-2">
                                                        <strong class="primary-font">Sarah</strong>
                                                        <small class="pull-right text-muted"><i
                                                                class="fa fa-clock-o"></i> 13 mins ago</small>
                                                    </div>
                                                    <p class="p-2">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales
                                                        at.
                                                    </p>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>

                                    <div class="col-xl-12 cmt border-top pt-3">
                                        <span  id="my_cmt" class="t form-control pr-5" role="textbox" style="border-radius: 30px" contenteditable></span>
                                        <div class="chat-input-links">
                                            <ul class="list-inline mb-0">
                                                <li class="list-inline-item">
                                                    <a v-b-tooltip.hover placement="top"
                                                       title="Send" >
                                                        <i class="fa fa-paper-plane"></i>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>


                                    </div> </div>
                            </b-sidebar>





                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { VueEditor } from "vue2-editor";
    import simplebar from 'simplebar-vue';
    import 'simplebar/dist/simplebar.min.css';
    import { vuln_Category } from "../assets/vuln_category";
    export default {
        name: "Reports",
        components: {
            VueEditor,
            simplebar
        },
        data() {
            return {
                reports: [],
                content: "<h1>Some initial content</h1>",
                status: ['new', 'needs more info', 'triaged', 'accepted', 'resolved', 'duplicate', 'informative', 'not applicable'],
                dates: ['current day', 'this week', 'last week', 'this month', 'last month', 'this year', 'last year'],
                current_page: 1,
                last_page_url: 6,
                selected_report: {
                    user: {},
                    program: {},
                    vuln: {}
                },
                categories:vuln_Category
            }
        },
        created() {
            this.getReports(1)
        },
        methods: {
            getReports(page) {
                this.$http
                    .get('reports?page=' + page)
                    .then(response => {
                        console.log(response.data)
                        this.reports = response.data.data;
                        this.selected_report = this.reports[0];
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

<style scoped>
    .card-header {
        background-color: inherit;
    }

    .chat-message {
        padding: 10px;
    }

    .chat {
        list-style: none;
        margin: 0;
        padding: 4px;
    }




   .chat-body {
        background-color: #fff;
        color: #222831;
    }

    .chat li .chat-body {
        position: relative;
        font-size: 11px;
        border: 1px solid #f1f5fc;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    }

    .chat li .chat-body .header {
        border-bottom: 1px solid #f1f5fc;
    }


    .chat li.left .chat-body:before {
        position: absolute;
        top: 8px;
        left: -11px;
        display: inline-block;
        background: #fff;
        width: 16px;
        height: 16px;
        border-top: 1px solid #f1f5fc;
        border-left: 1px solid #f1f5fc;
        content: '';
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
    }

    .chat li.right .chat-body:before {
        position: absolute;
        top: 8px;
        right: -11px;
        display: inline-block;
        background: #fff;
        width: 16px;
        height: 16px;
        border-top: 1px solid #f1f5fc;
        border-right: 1px solid #f1f5fc;
        content: '';
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
    }




    .primary-font {
        color: #3c8dbc;
    }

    .t {
        display: block;
        width: 100%;
        overflow: hidden;
        resize: none;
        min-height: 40px;
        height: auto;
        line-height: 20px;
    }

    .t[contenteditable]:empty::before {
        content: "Write a comment...";
        color: gray;
    }
    .chat-input-links {
        position: absolute;
        right: 24px;
        top: 60%;
        color: #222831;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .cmt{
        position: absolute;
        bottom: 12px;
    }
   /deep/ .quillWrapper .ql-snow.ql-toolbar {

        background-color: white;
    }
    /deep/ .ql-container{
        height: 120px;
    }
    /deep/ .ql-formats{
        margin: 0!important;
    }
    /deep/ .ql-editor{
        min-height: 100px!important;
        font-size: 12px!important;
    }
   /deep/ .form-control,.custom-select{
        font-size: 12px!important;
    }
    .report:hover{
        background-color: #222831;
        color: white;
        cursor: pointer;

    }

    .selected{
        background-color: #222831;
        color: white;
    }
</style>