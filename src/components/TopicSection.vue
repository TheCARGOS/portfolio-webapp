<template>
    <div class="topic-section">
        <div class="main-logo">
            <div class="square"></div>
            <div class="square"></div>
        </div>
        <h2 class="section__subtitle t-bold t-italic">WELCOME</h2>
    </div>
</template>

<script>
export default {
    name: "TopicSection"
}
</script>

<style scoped>
    .topic-section {
        z-index: 50;
    }

    .main-logo {
        display: flex;
    }

    .square {
        height: 50px;
        width: 50px;
        background-color: white;
        margin: 0 4px;
        box-shadow: 0 0 2px 2px white;
    }
</style>