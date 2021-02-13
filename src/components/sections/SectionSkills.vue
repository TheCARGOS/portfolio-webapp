<template>
    <section class="section section--skills">
        <div class="wrapper" v-if="!isSelected">
            <ul>
                <li
                    class="section__title t-italic"
                    @click="isFrontendSelected=true, isBackendSelected=false, isSelected=true"
                >Frontend</li>
                <li
                    class="section__title t-italic"
                    @click="isBackendSelected=true, isFrontendSelected=false, isSelected=true"
                >Backend</li>
            </ul>
        </div>
        <div class="wrapper" v-else>
            <div @click="isSelected=false">
                <!-- <img class="" src="https://p1.hiclipart.com/preview/185/733/253/metrostation-white-arrow-png-clipart.jpg" alt=""> -->
                <svg class="back-arrow section__title" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve">
                    <g>
                        <path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
                            c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
                            L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
                            c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
                            c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
                            C492,219.198,479.172,207.418,464.344,207.418z"/>
                    </g>
                </svg>
            </div>
            <ul class="skills-container">
                <div class="skills" v-if="isFrontendSelected">
                    <li v-for="skill in skillsFrontend" :key="skill.id">
                        <div class="skill">
                            <img class="skill__img" :src="skill.imgUrl" alt="">
                            <div class="skill__text">
                                <span class="skill__name t-bold t-italic" v-text="skill.name"></span>
                                <span class="skill__level t-bold t-italic" v-text="skill.level"></span>
                            </div>
                        </div>
                    </li>
                </div>
                <div v-else>
                    <li v-for="skill in skillsBackend" :key="skill.id">
                        <div class="skill">
                            <img class="skill__img" :src="skill.imgUrl" alt="">
                            <div class="skill__text">
                                <span class="skill__name t-bold t-italic" v-text="skill.name"></span>
                                <span class="skill__level t-bold t-italic" v-text="skill.level"></span>
                            </div>
                        </div>
                    </li>
                </div>
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
            ],
            isSelected: false,
            isFrontendSelected: false,
            isBackendSelected: false,
            skillsFrontend: [
                {
                    imgUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple5/v4/28/c7/e9/28c7e967-a7d3-79d2-f277-83c93b90d851/source/256x256bb.jpg",
                    name: "HTML",
                    level: "ADVANCED"
                },
                {
                    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkO64pPCOjpCIZzhDQrWkIwS4IYY0wSakNpQ&usqp=CAU",
                    name: "CSS & SCSS",
                    level: "ADVANCED"
                },
                {
                    imgUrl: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
                    name: "JAVASCRIPT",
                    level: "ADVANCED"
                },
                {
                    imgUrl: "https://mir-s3-cdn-cf.behance.net/projects/404/58021878954249.Y3JvcCw5MjAsNzIwLDE2NCww.png",
                    name: "VUEJS",
                    level: "INTERMEDIATED"
                },
                {
                    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkO64pPCOjpCIZzhDQrWkIwS4IYY0wSakNpQ&usqp=CAU",
                    name: "ANIMATECSS",
                    level: "ADVANCED"
                },
                {
                    imgUrl: "https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1576160152&width=256",
                    name: "GSAP",
                    level: "INTERMEDIATED"
                },
                {
                    imgUrl: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
                    name: "FULLPAGEJS",
                    level: "INTERMEDIATED"
                },
                {
                    imgUrl: "https://payload.cargocollective.com/1/15/492059/11069432/prt_256x256_1454805587.png",
                    name: "P5JS",
                    level: "INTERMEDIATED"
                },
                {
                    imgUrl: "https://cdn.iconscout.com/icon/free/png-256/bootstrap-226077.png",
                    name: "BOOTSTRAP",
                    level: "INTERMEDIATED"
                }
            ],
            skillsBackend: [
                {
                    imgUrl: "https://www.tecnoempleo.com/graficos/iconos_rrss/tw_card_nodejs.png?1009",
                    name: "NODEJS",
                    level: "ADVANCED"
                },
                {
                    imgUrl: "https://eww-wp.s3.ap-south-1.amazonaws.com/wp-content/uploads/2018/05/27091009/express-1.png",
                    name: "EXPRESSJS",
                    level: "ADVANCED"
                },
                {
                    imgUrl: "https://ionelaipatioaei.com/logos/mongodb.png",
                    name: "MONGODB",
                    level: "INTERMEDIATED"
                },
                {
                    imgUrl: "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1478529687/zaeoysnccrafp3ikx5or.png",
                    name: "FIREBASE",
                    level: "INTERMEDIATED"
                },
                {
                    imgUrl: "https://ps.w.org/jwt-auth/assets/icon-256x256.png?rev=2298869",
                    name: "JS WEB TOKENS",
                    level: "ADVANCED"
                }
            ]
        }
    }
}
</script>

<style scoped>
    .wrapper {
        position: relative;
    }

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
        /* position: relative;
        width: 20%;
        margin: 0 auto; */
    }

    .section__title:hover {
        color: white;
        text-shadow: 0 0 6px white;
    }

    .skills-container {
        padding: 0 5vw;
    }

    .skills {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(5, auto);
    }

    .skill {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0;
    }

    .skill__img {
        height: 47px;
        width: 71px;
        object-fit: cover;
    }

    .skill__text {
        display: flex;
        justify-content: space-between;
        min-width: 35vw;
        align-items: center;
        padding: 15px 20px;
        background: linear-gradient(to right, transparent, #E94949)
    }

    .skill__name {
        font-size: 34px;
        color: #FFFFFF;
        opacity: .75;
    }

    .skill__level {
        color: #242424;
        font-size: 28px;
    }

    .back-arrow {
        fill: white;
        height: 35px;
        width: auto;
        cursor: pointer;
        float: left;
    }
</style>