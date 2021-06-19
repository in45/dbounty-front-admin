<template>
    <main>
        <div class="card mt-5">
            <div class="row m-0">
                <div class="col-xl-4 border-right">
                    <div class="row m-0 pt-2 pb-3">
                        <div class="col-6 my-auto">
                            <b-form-checkbox v-model="filtre_type" @change="getReports(1)" switch size="sm">Assigned to me</b-form-checkbox>
                        </div>
                        <div class="col-5  ml-auto">
                            <b-form-select v-model="filtre_status" size="sm">
                                <b-form-select-option value="" disabled selected>Status</b-form-select-option>
                                <b-form-select-option v-for="s in status" :value="s" :key="s">{{s}}</b-form-select-option>
                                <b-form-select-option value="">all</b-form-select-option>
                            </b-form-select>
                        </div>
                    </div>
                    <simplebar style="max-height: 600px;padding-right: 12px;padding-left: 12px;">
                        <div v-if="reports.length && is_load">
                        <div class="card report  mb-3"  :class=" {'selected': selected_report.id == data.id}" v-for="data in reports" v-bind:key="data.id" @click="selected_report = data">
                            <div class="card-body ">
                                <h6 class="link  font-size-13 link">{{data.title}}</h6>
                                <h6 class="link text-truncate font-size-13 link">@{{data.user.username}}</h6>
                                <p class="text-muted mb-0" v-if="data.vuln_id">{{data.vuln.name}}</p>
                                <p class="text-muted mb-0" v-else>{{data.vuln_name}}</p>
                                <b-badge class="float-right" variant="info">{{data.status}}</b-badge>
                            </div>
                        </div>
                        </div>
                    </simplebar>
                </div>
                <div class="col-xl-8 py-2">
                    <div class="card " style="height: 100%">
                        <div class="card-header">
                            <div class="row m-0">
                                <div class="col-xl-4  border-right m-auto">
                                    <b-avatar class="mr-2" :src="selected_report.user.avatar"
                                              :title="selected_report.user.public_address"></b-avatar>
                                    <span class="address">@{{selected_report.user.username}}</span>
                                </div>
                                <div class="col-xl-8 m-auto">
                                    <ul class="row  list-inline m-0 p-0">
                                        <li class="col-xl-3 col-md-6 col-sm-6 w-50 text-center">
                                            <p class="mb-0">Reports</p>
                                            <h6>{{selected_report.user.count_reports}}</h6>
                                        </li>
                                        <li class="col-xl-3 col-md-6 col-sm-6 w-50 text-center">
                                            <p class="mb-0">Reputation</p>
                                            <h6>{{selected_report.user.reputation}}</h6>
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
                            <div class="row mx-0 mb-2" v-if="is_sudo || $store.state.admin.id == selected_report.assigned_to_admin">
                                <b-badge style="font-size: 13px" class="p-3 mr-3"  role="button" v-b-toggle.report variant="dark">Edit Report</b-badge>
                                <edit-report :selected_report="selected_report"/>
                                <b-badge style="font-size: 13px" class="p-3" role="button" v-b-toggle.messages variant="dark">View Messages</b-badge>
                                <report-messages/>
                                <b-form-select class="float-right ml-auto" style="width: 160px" v-model="selected_report.status" :options="status" :disabled="!is_sudo && $store.state.admin.id != selected_report.assigned_to_admin"></b-form-select>
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




                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import simplebar from 'simplebar-vue';
    import 'simplebar/dist/simplebar.min.css';
    import { vuln_Category } from "../assets/vuln_category";
    import ReportMessages from "@/components/ReportMessages";
    import EditReport from "@/components/EditReport";
    export default {
        name: "ProgramReports",
        components: {
            EditReport,
            ReportMessages,
            simplebar
        },
        data() {
            return {
                reports: [],
                content: "<h1>Some initial content</h1>",
                status: ['new', 'needs more info', 'triaged', 'accepted', 'resolved', 'duplicate', 'informative', 'not applicable','pre-submission','pending'],
                current_page: 1,
                last_page_url: 6,
                selected_report: {
                    user: {},
                    program: {},
                    vuln: {}
                },
                filtre_status:'',
                filtre_type:false,
                is_load:false,
                categories:vuln_Category,
                is_sudo:false
            }
        },
        created() {
            this.getReports(1)
        },
        watch: {
            filtre_status: function () {
                this.getReports(1)
            },
        },
        methods: {
            getReports(page) {
                let item = {
                    'status':this.filtre_status,
                    'type':this.filtre_type
                }
                this.$http
                    .post('programs/'+this.$route.params.id+'/reports?page=' + page,item)
                    .then(response => {
                        if(this.$store.state.admin.role === 'sudo') this.is_sudo = true
                        if(this.$store.state.admin.role) {
                            this.reports = response.data.data;
                            this.is_load = true
                            if (this.reports.length) this.selected_report = this.reports[0];
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

<style scoped>
    .card-header {
        background-color: inherit;
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
    .custom-select:disabled {
        color: #000!important;
    }
</style>