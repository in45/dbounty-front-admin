<template>
    <nav class="menu" tabindex="0">
        <div class="smartphone-menu-trigger"></div>
        <ul class="pt-4">
            <li tabindex="0" class="icon-dashboard" @click="$router.push({name:'Dashboard'})"><span>Dashboard</span></li>
            <li tabindex="0" class="icon-users" @click="$router.push({name:'Admins'})"><span>Admins</span></li>
            <li tabindex="0" class="icon-users" @click="$router.push({name:'Users'})"><span>Users</span></li>
            <li tabindex="0" class="icon-customers" @click="$router.push({name:'Companies'})" ><span>Companies</span></li>
            <li tabindex="0" class="icon-customers" @click="$router.push({name:'Programs'})"><span>Programs</span></li>
            <li tabindex="0" class="icon-customers" @click="$router.push({name:'Reports'})"><span>Reports</span></li>
            <li tabindex="0" class="icon-users" @click="$router.push({name:'Badges'})"><span>Badges</span></li>
            <li tabindex="0" class="icon-users" @click="$router.push({name:'Vulnerabilities'})"><span>Vulnerabilities</span></li>

        </ul>
    </nav>


</template>

<script>
    export default {
        name: "sidebar"
    }
</script>

<style scoped >
    .menu {
        background: #222831;
        min-height: 92.5vh;
        height: 100%;
        width: 200px;
        z-index: 5;
        font-size: 1rem;
        outline: none;
    }



        ul {
            list-style: none;
            padding: 0.5em 0;
            margin: 0;
        }

            li {
                padding: 0.5em 1em 0.5em 3em;
                font-size: 0.95em;
                background-color: inherit;
                background-repeat: no-repeat;
                background-position: left 15px center;
                background-size: auto 20px;
                transition: all 0.15s linear;
                cursor: pointer;
            }

                li:hover{
                    background-color:rgba(0,0,0,0.1);
                }

                li:focus{
                    outline:none;
                }
                span{

                    color: white;
                }

    /*@media screen and (max-width:900px) and (min-width:400px){*/
    /*    body{*/
    /*        padding-left:90px;*/
    /*    }*/
    /*    .menu {*/
    /*        width: 90px;*/
    /*        position: absolute;*/
    /*    }*/

    /*        .avatar {*/
    /*            padding: 0.5em;*/
    /*            position: relative;*/
    /*        }*/
    /*    .avatar img{*/
    /*                width:60px;*/
    /*            }*/

    /*    .avatar h2{*/
    /*                opacity:0;*/
    /*                position:absolute;*/
    /*                top:50%;*/
    /*                left:100px;*/
    /*                margin:0;*/
    /*                min-width:200px;*/
    /*                border-radius:4px;*/
    /*                background:rgba(0,0,0,0.4);*/
    /*                transform:translate3d(-20px,-50%,0);*/
    /*                transition:all 0.15s ease-in-out;*/
    /*            }*/

    /*    .avatar h2:hover{*/
    /*                    opacity:1;*/
    /*                    transform:translate3d(0px,-50%,0);*/
    /*                }*/

    /*            li {*/
    /*                height: 60px;*/
    /*                background-position: center center;*/
    /*                background-size: 30px auto;*/
    /*                position: relative;*/
    /*            }*/

    /*                span {*/
    /*               !* display: none;*!*/
    /*                    opacity: 0;*/
    /*                    position: absolute;*/
    /*                    background: rgba(0, 0, 0, 0.5);*/
    /*                    padding: 0.2em 0.5em;*/
    /*                    border-radius: 4px;*/
    /*                    top: 50%;*/
    /*                    left: 80px;*/
    /*                    transform: translate3d(-15px, -50%, 0);*/
    /*                    transition: all 0.15s ease-in-out;*/
    /*                }*/

    /*    span:before{*/
    /*                        content:'';*/
    /*                        width:0;*/
    /*                        height:0;*/
    /*                        position:absolute;*/
    /*                        top:50%;*/
    /*                        left:-5px;*/
    /*                        border-top:5px solid transparent;*/
    /*                        border-bottom:5px solid transparent;*/
    /*                        border-right:5px solid rgba(0,0,0,0.5);*/
    /*                        transform:translateY(-50%);*/
    /*                    }*/


    /*    span:hover{*/

    /*                        opacity:1;*/
    /*                        transform:translate3d(0px,-50%, 0);*/
    /*                    }*/


    /*}*/

    @media screen and (max-width:1000px){
        body{
            padding-left:0;
        }

        .menu {
            width: 230px;
            height: auto;
            position: absolute;
            box-shadow: 0 0 0 100em rgba(0, 0, 0, 0);
            transform: translate3d(-230px, 0, 0);
            transition: all 0.3s ease-in-out;
        }
        .smartphone-menu-trigger {
            width: 40px;
            height: 40px;
            position: absolute;
            top:0;
            left: 100%;

            background: #222831;
        }

        .smartphone-menu-trigger:before, .smartphone-menu-trigger:after{
                    content:'';
                    width:50%;
                    height:2px;
                    background:#eee;
                    border-radius:10px;
                    position:absolute;
                    top:45%;
                    left:50%;
                    transform:translate3d(-50%, -50%, 0);
                }

        .menu.smartphone-menu-trigger:after{
                    top:55%;
                    transform:translate3d(-50%, -50%, 0);
                }


         li{
                    padding:1em 1em 1em 3em;
                    font-size:1.2em;
                }
        .menu:focus{
            transform: translate3d(0, 0, 0);
            box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6);

        }


    }

</style>