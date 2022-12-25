<template>
  <div class="audio-bookC">
    <div class="audio-bookC__icon">
      <img src="/icons/audio.svg" alt="" />
    </div>
    <div class="audio-bookC__photo">
      <img src="/images/book.png" alt="title" />
    </div>
    <div class="audio-bookC__content">
      <div>
        <app-text
          :size="isMobile ? 16 : 20"
          class="audio-bookC__title mb-10"
          max-lines="2"
          line-height="30"
          weight="500"
          tag="p"
        >
          {{ title }}
        </app-text>
        <app-text
          :size="isMobile ? 16 : 20"
          class="audio-bookC__subtitle mb-10"
          max-lines="2"
          line-height="30"
          weight="500"
          tag="p"
        >
          <span class="color-main">Муаллиф</span>: {{ subtitle }}
        </app-text>
      </div>
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex">
          <div class="d-flex align-center mr-30">
            <img src="/icons/star.svg" alt="" class="mr-10" />
            <app-text
              :size="isMobile ? 16 : 18"
              class="color-secondary"
              line-height="22"
              weight="500"
              tag="p"
            >
              2.8
            </app-text>
          </div>
          <div class="d-flex align-center">
            <img src="/icons/eye.svg" alt="" class="mr-10" />
            <app-text
              :size="isMobile ? 16 : 18"
              class="color-secondary"
              line-height="22"
              weight="500"
              tag="p"
            >
              666
            </app-text>
          </div>
        </div>
        <div class="audio-bookC__link d-flex align-center">
          <app-text
            :size="isMobile ? 16 : 20"
            max-lines="2"
            class="mr-10 color-main text-decaration"
            line-height="30"
            weight="500"
            tag="a"
          >
            Tingla
          </app-text>
          <img src="/icons/arrow-right.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "audiobookC",
  components: {},
  props: {
    id: Number,
    link: String,
    title: String,
    subtitle: String,
    photo: String,
  },
  methods: {
    goToLink() {
      this.$router.push({
        name: "home",
        params: {},
      });
    },
  },
};
</script>

<style lang="scss">
.audio-bookC {
  max-width: 330px;
  width: 100%;
  $self: &;
  $trans: 0.2s;
  position: relative;
  display: block;
  &__icon {
    position: absolute;
    z-index: 99;
    top: -20px;
    right: -15px;
  }
  &__photo {
    max-width: 330px;
    height: 330px;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 0;
    border-radius: 15px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform $trans ease-out;
      border-radius: 15px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    padding: 15px 0;
    min-height: 200px;
  }
  &__link {
    cursor: pointer;
  }
  &__title {
    transition: color $trans linear;
  }
  &:hover {
    #{$self}__title {
      color: #41894a !important;
    }

    #{$self}__photo {
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
