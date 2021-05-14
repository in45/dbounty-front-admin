<template>
    <div id="app mt-0">
        <nav-bar/>
        <div class="row m-0">
            <div class="col-xl-2 p-0">
                <sidebar/>
            </div>
            <div class="col-xl-10">
                <RouterView></RouterView>
            </div>

        </div>
    </div>
</template>

<script>
    import NavBar from "./navBar";
    import Sidebar from "./sidebar";
    export default {
        name: "Common",
        components: {Sidebar, NavBar}
    }
</script>

<style scoped>


</style>