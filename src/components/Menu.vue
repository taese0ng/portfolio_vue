<template>
    <div class="menu">
        <table>
            <td>
                <router-link to="/" class="router-link">Home</router-link>
            </td>
            <td>
                <router-link to="/about" class="router-link">About</router-link>
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
    margin-bottom: 10px;
}
.router-link{
    font-size: 17px;
    font-weight: bold;
}
td{
    width: 80px;
}
</style>