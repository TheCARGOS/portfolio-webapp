<template>
    <div class="menu-button" style="position: fixed !important; top: 40px; right: 50px;">
        <!-- <h2 class="menu-button__icon">M</h2> -->
        <!-- <svg class="menu-button__icon" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg> -->
        <div class="bars">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuButton"
}
</script>

<style scoped>
    .menu-button {
        background-color: #FFFFFF;
        border-radius: 50%;
        padding: 15px;
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, .2);
        height: 50px;
        width: 50px;
        cursor: pointer;
        z-index: 50;
    }

    .menu-button:hover {
        box-shadow: 0 0 10px 8px rgba(0, 0, 0, .3);
        transition: .4s all ease;
    }

    .bars {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .bar {
        width: 80%;
        height: 6px;
        background-color: #4561A4;
        border-radius: 5px;
    }
</style>