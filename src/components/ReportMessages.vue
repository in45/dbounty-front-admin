<template>
    <b-sidebar id="messages"  width="400px" title="Messages" bg-variant="dark" text-variant="light" right shadow>
        <div class="px-3 py-2">
            <b-tabs pills justified content-class="pt-3">
                <b-tab  class="border-0">
                    <template v-slot:title>
                        <span class=" d-sm-inline-block ">Manager</span>
                    </template>
                    <simplebar style="max-height: 70vh;padding-right: 12px;padding-left: 12px;">
                    <div class="chat-message">
                        <ul class="chat">
                            <li class="left row mx-0 mb-2 ">
                                <div class="col-3 p-0">
                                    <b-avatar  alt="User Avatar"></b-avatar>
                                </div>

                                <div class="chat-body col-9 ">
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
                            <li class="left row mx-0 mb-2 ">
                                <div class="col-3 p-0">
                                    <b-avatar  alt="User Avatar"></b-avatar>
                                </div>

                                <div class="chat-body col-9 ">
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
                            <li class="left row mx-0 mb-2 ">
                                <div class="col-3 p-0">
                                    <b-avatar  alt="User Avatar"></b-avatar>
                                </div>

                                <div class="chat-body col-9 ">
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
                    </simplebar>

                </b-tab>
                <b-tab  class="border-0">
                    <template v-slot:title>
                        <span class=" d-sm-inline-block ">Admin</span>
                    </template>
                    <simplebar style="max-height: 440px;padding-right: 12px;padding-left: 12px;">
                        <div class="chat-message ">
                            <ul class="chat">
                                <li class="left row mx-0 mb-2 ">
                                    <div class="col-3 p-0">
                                        <b-avatar  alt="User Avatar"></b-avatar>
                                    </div>

                                    <div class="chat-body col-9 ">
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
                    </simplebar>

                </b-tab>
            </b-tabs>
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


            </div>

        </div>
    </b-sidebar>
</template>

<script>
    import simplebar from 'simplebar-vue';
    import 'simplebar/dist/simplebar.min.css';
    export default {
        name: "ReportMessages",
        components: {
            simplebar
        },
    }
</script>

<style scoped>
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
        background-color: #343a40;

    }
    /deep/ .nav-pills .nav-link{
        color: white;
        border-radius: 0;
    }
    /deep/ .nav-pills .nav-link.active{
        background-color:  #80b1ff;
    }
    /deep/ .nav-justified .nav-item{
        border: solid 0.5px #bbb;
    }
</style>