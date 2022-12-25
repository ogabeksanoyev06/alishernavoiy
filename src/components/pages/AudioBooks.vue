<template>
  <section class="section container py-40">
    <div class="section__top mb-30">
      <app-text
        :size="isMobile ? 24 : 30"
        :line-height="isMobile ? 28 : 36"
        weight="700"
      >
        Аudiokitoblar
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
        <AudioBookC
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
import AudioBookC from "@/components/shared-components/audio-books/AudioBookC";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "AudioBooks",
  components: {
    AudioBookC,
    AppSlider,
  },
  data() {
    return {
      list: [
        {
          title: "Seçilmiş əsərləri “Fərhad və Şirin”",
          subtitle: "Nəvai Əlişir.",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
          link: null,
        },
        {
          title: "Azərbaycan klassik ədəbiyyatından seçmələr: II cild...",
          subtitle: "Илмий-энциклопедик тўплам.",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
          link: null,
        },
        {
          title: "Алишер Навоий (рисола)",
          subtitle: "М.Фуад Купрулу",
          photo: "/images/post.jpg",
          value: "2",
          price: "700 000 so'm",
          link: null,
        },
        {
          title: "Алишер Навоий Озарбайжон адабиётшунослигида (мақолла...",
          subtitle: "М.Фуад Купрулу",
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

<style scoped lang="scss"></style>
