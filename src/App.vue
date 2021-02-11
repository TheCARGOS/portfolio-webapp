<template>
  <div>
    <MenuButton />
    <TopicSection />
    <full-page ref="fullpage" :options="options" id="fullpage">

      <SectionWelcome />
      
      <SectionSkills />
      
      <SectionExperience />
      
      <SectionEducation />
      <section class="section section--contact">
        Section Contact
      </section>
  </full-page>
</div>
</template>

<script>
import MenuButton from "./components/MenuButton"
import TopicSection from "./components/TopicSection"

import SectionWelcome from "./components/sections/SectionWelcome"
import SectionSkills from "./components/sections/SectionSkills"
import SectionExperience from "./components/sections/SectionExperience"
import SectionEducation from "./components/sections/SectionEducation"

export default {
  name: 'App',
  components: {
    MenuButton,
    TopicSection,
    SectionWelcome,
    SectionSkills,
    SectionExperience,
    SectionEducation
  }
}
</script>

<style lang="scss">
  body {
    background-color: #E82424;
    color: white;
    font-weight: bolder;
    font-size: 72px;
  }

  * { font-family: "Segoe UI" !important; }

  .section { text-align: center; }

  .section--contact { background: #292929; }

  .section__title {
    font-size: 108px;
  }

  .section__subtitle {
    font-size: 44px;
  }

  .topic-section {
    position: absolute;
    left: 80px;
    bottom: 50px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .t-bold { font-weight: 800; }

  .t-thin { font-weight: 200; }

  .t-italic { font-style: italic; }
</style>
