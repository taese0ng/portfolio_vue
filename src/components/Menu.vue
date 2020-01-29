<template>
    <div class="menu">
        <table>
            <td>
                <router-link to="/" class="router-link">Home</router-link>
            </td>
            <td>
                <router-link to="/about" class="router-link">About</router-link>
            </td>
            <td>
                <router-link to="/performance" class="router-link">Performance</router-link>
            </td>
        </table>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#table{
    display: table-cell;
}
.menu{
    margin: auto;
    display: table;
    margin-top:10px;
    margin-bottom: 30px;
}
.router-link{
    font-size: 19px;
    font-weight: bold;
}
td{
    width: 80px;
}
@media(max-width:750px){
    .router-link{
        font-size: 5vw;
    }
}
</style>