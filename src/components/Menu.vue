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
            <td>
                <router-link to="/language" class="router-link">Language</router-link>
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
    text-align: center;
    font-size: 22px;
    font-weight: bold;
}
table{
    table-layout: fixed;
    width: 100%;
    text-align: center;
}
td{
    display: table-cell;
}
@media(max-width:500px){
    .router-link{
        font-size: 16px;
    }
    table{
        table-layout: auto;
    }
}
</style>