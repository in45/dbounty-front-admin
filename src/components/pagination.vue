<template>
    <div>

        <ul class="pagination">
            <li @click="changePage(current_page-1)" v-if="current_page != 1">
                <a>«</a>
            </li>

            <li @click="changePage(1)" v-if="current_page != 1 && current_page != 2 ">
                <a>1</a>
            </li>
            <li @click="changePage(current_page-1)" v-if="current_page != 1 ">
                <a>{{current_page-1}}</a>
            </li>
            <li>
                <a class="active" >{{current_page}}</a>
            </li>
            <li  @click="changePage(current_page+1)" v-if="current_page != last_page_url">
                <a>{{current_page+1}}</a>
            </li>
            <li  @click="changePage(last_page_url)" v-if="current_page != last_page_url && current_page != last_page_url-1">
                <a>{{last_page_url}}</a>
            </li>
            <li  @click="changePage(current_page+1)" v-if="current_page != last_page_url">
                <a>»</a>
            </li>
        </ul>

    </div>
</template>
<script>
    export default {
        name: "Paginate",
        props:{
            current_page:Number,
            last_page_url:Number,

        },
        methods:{
            changePage(page){
                this.$emit('change-page',page);
            }
        }

    }
</script>
<style scoped>

    ul:hover{
        cursor:pointer;
    }
    ul.pagination {
        display: inline-block;
        padding: 0;
        font-size: 16px;
        margin: 0;
    }

    ul.pagination li {
        display: inline;}

    ul.pagination li a {
        color: #2A2E51;

        float: center;
        font-weight: bold;
        padding: 3px 10px;
        text-decoration: none;
        border-radius: 5px;
    }

    ul.pagination li a.active {
        background-color: #2A2E51;
        color:white ;
        border-radius: 4px;
        padding: 0px 6px 0px 6px;
    }

    ul.pagination li a:hover:not(.active) {
        background-color:#2A2E51 ;
        margin-left: 5px;
        color: white;
        border-radius: 4px;
        padding: 0px 6px 0px 6px;
    }
</style>
