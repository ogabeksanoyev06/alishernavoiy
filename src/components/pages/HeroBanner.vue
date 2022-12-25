<template>
  <div class="hero-banner mb-60">
    <div class="container">
      <div class="hero-banner__inner">
        <div class="hero-banner__content">
          <div class="hero-banner__cta">
            <div class="hero-banner__title">
              <span>Alisher Navoiy nomidagi kutubxona</span>
            </div>
            <div class="hero-banner__img">
              <img src="/images/book.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBanner",
  components: {},
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss">
.hero-banner {
  background-color: #ffe2c8;

  &__inner {
    width: 100%;
  }
  &__content {
  }
  &__title {
    font-size: 75px;
    line-height: 100%;
    color: #1d0000;
    max-width: 560px;
    width: 100%;
  }

  &__cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__img {
    max-width: 250px;
    width: 100%;
    img {
      width: 100%;
    }
  }
}

@media (max-width: 850px) {
  @media (max-width: 500px) {
    .hero-banner__inner {
    }
    .hero-banner__photo {
    }
  }
}
@media (max-width: 500px) {
}
</style>
