<template>
    <section class="section section--welcome">
        <div class="sec">
            <div class="main-logo">
                <div class="square"></div>
                <div class="square"></div>
            </div>
            <h1 class="section__title t-bold t-italic">CARLOS LOAYZA</h1>
            <h2 class="section__subtitle t-thin t-italic">Jr. Front End Developer</h2>
        </div>
    </section>
</template>

<script>
export default {
    name: "SectionWelcome"
}
</script>

<style scoped>
   .sec {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
   }

    .main-logo {
        display: flex;
    }

    .square {
        height: 100px;
        width: 100px;
        background-color: white;
        margin: 0 8px;
        box-shadow: 0 0 5px 5px white;
    }

    .section__title {
        font-weight: 800;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .section__subtitle {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>