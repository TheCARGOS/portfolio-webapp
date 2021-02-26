<template>
    <section class="section section--experience">
        <!-- <div class="slide" data-anchor="slide1"> Projects </div>
        <div class="slide" data-anchor="slide2"> Challenges </div> -->
        <div class="container" id="container">
            <h1 class="section__title t-bold t-italic">PROJECTS & CHALLENGES</h1>
            <carousel-3d :controls-visible="true">
                <slide v-for="( slide, i ) in slides" :index="i" :key="i">
                    <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                        <img class="img" :data-name="slide.name" :data-category="slide.category" :data-description="slide.description" :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.src">
                    </template>
                </slide>
            </carousel-3d>
        </div>
        <div class="container">
            <div class="modal"
                    :clickToClose="true"
                    :adaptive="true">
                <!-- <img class="modal__img" :src="isSelected.src" alt=""> -->
            
                <div class="modal__container">
                    <h2 class="modal__title t-bold" v-text="isSelected.name"></h2>
                    <span class="modal__position t-bold t-italic" v-text="isSelected.position">POSITION: JR. FULL STACK JAVASCRIPT</span>
                    <p class="modal__content">
                        I proposed, designed and implement an API
                        that allows to get the money exchange between
                        countries like USA, Perú and Brazil.
                    </p>
                    <button class="modal__button">VISIT PROJECT</button>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d"

export default {
    name: "SectionExperience",
    components: {
        Carousel3d,
        Slide
    },
    methods: {
        print (index) {
            console.log(index)
        },
        checkCurrent () {
            console.log("check current executed")
            const active = document.getElementsByClassName("current")[0].firstChild
            const selectedProject = {
                name: active.getAttribute("data-name"),
                category: active.getAttribute("data-category"),
                src: active.getAttribute("src"),
                description: active.getAttribute("data-description")
            }
            this.isSelected = selectedProject
        }
    },
    mounted () {
        this.checkCurrent()

        const container = document.getElementById("container")
        container.addEventListener("click", () => {
            this.checkCurrent()
        })
    },
    watch: {
        isSelected: function (newProject) {
            this.isSelected = newProject
        }
    },
    data () {
        return {
            isSelected: {},
            projectSelected: "",
            slides: [
                {
                    src: "https://i.imgur.com/jsFhQZI.jpg",
                    name: "Sporting Callo F.C",
                    postion: "Full Stack Dev.",
                    category: "Project",
                    description: "lorem impsum dolor isum what ever that happens should happen"
                },
                {
                    src: "https://i.imgur.com/CTZs7oj.jpg",
                    name: "Tranzfer Me",
                    postion: "Full Stack Dev.",
                    category: "Project",
                    description: "lorem impsum dolor isum what ever that happens should happen"
                },
                {
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTy8rR8JE4O2HrkNpKXbYKTYN-v14Oz3law&usqp=CAU",
                    name: "Portfolio",
                    postion: "Front End Dev.",
                    category: "Project",
                    description: "lorem impsum dolor isum what ever that happens should happen"
                },
                {
                    src: "https://github.com/TheCARGOS/foxbel-music/raw/master/src/assets/desktop-preview.jpg",
                    name: "Foxbel Music",
                    postion: "Front End Dev.",
                    category: "Challenge",
                    description: "lorem impsum dolor isum what ever that happens should happen"
                },
                {
                    src: "https://github.com/TheCARGOS/challenge01-rock-paper-scissors/raw/master/design/desktop-preview.jpg",
                    name: "Rock Paper & Scissors",
                    postion: "Front End Dev.",
                    category: "Challenge",
                    description: "lorem impsum dolor isum what ever that happens should happen"
                },
                {
                    src: "https://github.com/TheCARGOS/static-job-listings/raw/master/design/my-desktop-preview.jpg",
                    name: "Job Listing",
                    postion: "Front End Dev.",
                    category: "Challenge",
                    description: "lorem impsum dolor isum what ever that happens should happen"
                }
            ]
        }
    }
}
</script>

<style scoped>
    .column {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .section__title {
        color: #E2E2E2;
        font-size: 82px;
        margin-bottom: 50px;
    }

    .img {
        height: 100%;
        width: 100%;
        cursor: pointer;
    }

    .modal {
        /* background-color: #EFEFEF; */
        border-radius: 10px;

        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: 100%;
    }

    .modal__img {
        /* width: 100%; */
        /* max-height: 400px; */
        height: 100%;
        width: 100%;
        max-width: 400px;
        height: auto;
    }

    .modal__container {
        padding: 0 28px;
        display: flex;
        flex-direction: column;
    }

    .modal__title {
        font-size: 41px;
            text-align: left;
        color: #4A4A4A;
        line-height: 2;
    }

    .modal__position {
        font-size: 18px;
        color: black;
        opacity: .75;
        text-align: left;
        line-height: 2.5;
    }

    .modal__content {
        font-size: 22px;
        color: #707070;
        color: black;
        line-height: 1.7;
        letter-spacing: 10;
        text-align: left;
        font-weight: 300;
    }

    .modal__button {
        background-color: #303030;
        background-color: #71bcfa;
        color: #FFFFFF;
        font-weight: bolder;
        font-size: 18px;
        padding: 10px 30px;
        border: none;
        outline: none;
        border-radius: 30px;
        cursor: pointer;
        width: 250px;

        margin-top: 10px;
        margin-bottom: 10px;
    }


</style>