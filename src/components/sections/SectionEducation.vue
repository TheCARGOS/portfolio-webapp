<template>
    <section class="section section--education">
        <div class="container">
            <div class="section__titles">
                <h1 class="section__title t-bold t-italic">COMPUTER SCIENCE ENGINEER</h1>
                <h2 class="section__subtitle t-italic">at NATIONAL UNIVERSITY OF PIURA</h2>
            </div>
            <div class="section__titles">
                <h1 class="section__title t-bold t-italic">ENGLISH LANGUAGE</h1>
                <h2 class="section__subtitle t-italic">at PERUVIAN NORTHAMERICAN CULTURAL INSTITUTE</h2>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SectionEducation"
}
</script>

<style scoped>
    .section__titles {
        text-align: left;
        margin-bottom: 50px;
        margin-top: 50px;
    }

    .section__title {
        font-size: 90px;
        color: #E2E2E2;
    }

    .section__subtitle {
        font-weight: 200;
        font-size: 25px;
        line-height: 2.5;
        color: #E2E2E2;
    }
</style>