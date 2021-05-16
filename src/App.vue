<template>
  <div id="app mt-0">

        <RouterView></RouterView>

  </div>


</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
 body {
    font-family: Roboto,Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #393e46;
    background-color: #eeeeee;
    font-size: 12px!important;
  }

  html {
    --scrollbarBG: #CFD8DC;
    --thumbBG: #393e46;
  }
  body::-webkit-scrollbar, .b-sidebar > .b-sidebar-body::-webkit-scrollbar {
    width: 8px;
  }
  body, .b-sidebar > .b-sidebar-body {
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  }
  body::-webkit-scrollbar-track, .b-sidebar > .b-sidebar-body::-webkit-scrollbar-track{
    background: none;
  }
  body::-webkit-scrollbar-thumb ,.b-sidebar > .b-sidebar-body::-webkit-scrollbar-thumb{
    background-color: var(--thumbBG) ;
    border-radius: 6px;
  }


</style>
