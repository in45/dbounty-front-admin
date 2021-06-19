<template>

        <b-navbar  class="nav w-100 p-2">
            <b-navbar-brand  class="ml-5 mr-5 " style="font-family: Good Times;cursor: pointer">
                <img src="@/assets/images/logo.svg" class="mr-3" width="70">
                <span class="my-auto" style="color: #c2e6ea">DBounty</span>
            </b-navbar-brand>
        </b-navbar>

</template>

<script>

    export default {
        name: "navBar",


    }
</script>

<style scoped>
    .nav{
        background-color: #222831;
    }
    .navbar-light .navbar-brand ,.navbar-light .navbar-nav .nav-link{
        color: #eeeeee!important;
        background-color: inherit;
        font-size: 22px;
        margin-left:10%;
        text-align: center;
    }




</style>