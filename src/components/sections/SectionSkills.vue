<template>
    <section class="section section--skills">
        <div class="wrapper">
            <ul>
                <li
                    class="section__title t-italic"
                    v-for="(skill, index) in skills"
                    :key="index"
                    v-text="skill"
                ></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "SectionSkills",
    data () {
        return {
            skills: [
                "Frontend",
                "Backend"
            ]
        }
    }
}
</script>

<style scoped>
    .section-skills {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .section__title {
        color: #F6CACA;
        line-height: 1.5;
        cursor: pointer;
    }

    .section__title:hover {
        color: white;
        list-style-type: circle;
    }
</style>