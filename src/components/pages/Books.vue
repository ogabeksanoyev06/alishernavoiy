<template>
  <section class="section container py-40">
    <img src="@/assets/styles/pen.png" class="bgPen" alt="" />
    <div class="section__top mb-30">
      <app-text
        :size="isMobile ? 24 : 30"
        :line-height="isMobile ? 28 : 36"
        weight="700"
      >
        Kitoblar
      </app-text>

      <div class="section__top-details">
        <router-link class="section__top-link" to="/">
          Barcha kitoblarni ko'ring
        </router-link>
        <img src="/icons/arrow-right.svg" alt="" />
      </div>
    </div>
    <AppSlider :list="list">
      <template #default="{ item }">
        <AppbookC
          :link="item.link"
          :title="item.title"
          :subtitle="item.subtitle"
          :id="item.id"
        />
      </template>
    </AppSlider>
  </section>
</template>

<script>
import AppSlider from "@/components/shared-components/AppSlider";
import AppbookC from "@/components/shared-components/books/AppBookC";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "AppBooks",
  components: {
    AppbookC,
    AppSlider,
  },
  data() {
    return {
      list: [
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
          link: null,
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
          link: null,
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
          link: null,
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
          link: null,
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
          link: null,
        },
        {
          title: "The Web Developer Bootcamp 2021",
          subtitle:
            "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
          link: null,
        },
      ],
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([]),
  },
  mounted() {},
  watch: {},
};
</script>

<style scoped lang="scss">
.section {
  position: relative;
}
.bgPen {
  position: absolute;
  bottom: 400px;
  left: -130px;
  z-index: -1;
  width: 350px;
  height: 500px;
}
</style>
