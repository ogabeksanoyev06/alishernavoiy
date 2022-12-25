<template>
  <div class="app-videoC">
    <div class="app-videoC__photo">
      <img src="/images/book.png" alt="title" />
      <div class="app-videoC__icons">
        <img src="/icons/play.svg" alt="title" />
      </div>
    </div>
    <div class="app-videoC__content">
      <app-text
        :size="isMobile ? 16 : 20"
        class="app-videoC__title mb-10"
        max-lines="2"
        line-height="30"
        weight="500"
        tag="p"
      >
        Алишер Навоий Озарбайжон адабиётшунослигида (мақолла...
      </app-text>

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
        <div class="app-videoC__link d-flex align-center">
          <app-text
            :size="isMobile ? 16 : 20"
            max-lines="2"
            class="mr-10 color-main text-decaration"
            line-height="30"
            weight="500"
            tag="a"
          >
            Qarang
          </app-text>
          <img src="/icons/arrow-right.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppvideoCC",
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
.app-videoC {
  max-width: 445px;
  width: 100%;
  $self: &;
  $trans: 0.2s;
  position: relative;
  display: block;
  overflow: hidden;
  &__photo {
    max-width: 445px;
    width: 100%;
    height: 250px;
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
  &__icons {
    opacity: 0;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity $trans linear, transform $trans linear;
    img {
      border-radius: 0;
    }
  }
  &__content {
    position: relative;
    z-index: 2;
    padding: 15px 0;
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

    #{$self}__icons {
      opacity: 1;
    }
  }
}
</style>
