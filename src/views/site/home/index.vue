<template>
  <div class="home-page">
    <div class="books__bg">
      <img src="@/assets/styles/book-fon.png" class="booksFon" alt="" />
      <books />
    </div>
    <div class="audio__bg">
      <!-- <img src="@/assets/styles/audio-1.png" class="audio__fon1" alt="" />
      <img src="@/assets/styles/audio-2.png" class="audio__fon2" alt="" /> -->
      <audio-books />
    </div>
    <div class="">
      <videos />
    </div>
  </div>
</template>

<script>
import Books from "@/components/pages/Books.vue";
import AudioBooks from "@/components/pages/AudioBooks.vue";
import Videos from "@/components/pages/Videos.vue";
export default {
  name: "AppHome",
  components: { Books, AudioBooks, Videos },
  data() {
    return {};
  },
};
</script>

<style scoped>
.books__bg,
.audio__bg {
  position: relative;
}
.books__bg .booksFon {
  position: absolute;
  top: 1%;
  left: 0;
  height: 80%;
  width: 100%;
  object-fit: cover;
}
/* .audio__bg .audio__fon1,
.audio__bg .audio__fon2 {
  position: absolute;
  height: 600px;
  width: 350px;
  object-fit: cover;
}
.audio__bg .audio__fon1 {
  top: 600px;
  transform: translateY(-600px);
  left: 0;
}
.audio__bg .audio__fon2 {
  top: 600px;
  transform: translateY(-600px);
  right: 0;
} */
</style>
