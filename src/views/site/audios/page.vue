<template>
  <div class="audios py-30">
    <div class="container">
      <div class="content">
        <div class="audio__item">
          <div class="audio__item-photo">
            <img src="/images/book.png" alt="" />
          </div>
          <div class="audio__item-content">
            <app-text
              :size="isMobile ? 20 : 28"
              :line-height="isMobile ? 24 : 35"
              max-lines="2"
              weight="500"
              class="mb-15"
            >
              <span class="color-main">Асар номи:</span> Алишер Навоий
              Озарбайжон адабиётшунослигида (мақоллар тўплами)
            </app-text>
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 20 : 22"
              weight="500"
              class="mb-15"
            >
              Муаллиф: <span class="color-main">Алмаз Улви</span>
            </app-text>
            <app-text
              :size="isMobile ? 16 : 20"
              :line-height="isMobile ? 20 : 30"
              max-lines="3"
              weight="500"
              class="mb-15"
            >
              <span class="medium-text">Қайдлар:</span> Ушбу илмий мақолалар
              тўплами Алмаз Улви Биннатова томонидан тадқиқотлар, анжуман
              материаллари, қўлёзмалар.
            </app-text>
            <div
              class="d-flex justify-space-between flex-wrap"
              :class="ismobile ? 'mb-15' : 'mb-30'"
            >
              <app-text
                :size="isMobile ? 16 : 18"
                :line-height="isMobile ? 20 : 24"
                weight="500"
                class="mb-15"
              >
                <span class="medium-text">Ovozlar:</span>
                Шохрух Шохрухов
              </app-text>
              <app-text
                :size="isMobile ? 16 : 18"
                :line-height="isMobile ? 20 : 24"
                weight="500"
                class="mb-15"
              >
                <span class="medium-text">Davomiyligi:</span>
                <span class="color-main"> 37 davomiyligi</span>
              </app-text>
            </div>
            <div class="audio__item-btn">
              <div class="d-flex">
                <div class="d-flex align-center mr-10">
                  <img src="/icons/star.svg" alt="" class="mr-10" />
                  <app-text
                    :size="isMobile ? 16 : 18"
                    class="color-secondary"
                    line-height="22"
                    weight="500"
                    tag="p"
                  >
                    4.5
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
                    256
                  </app-text>
                </div>
              </div>
              <div>
                <AppButton
                  theme="white"
                  :fontSize="isMobileSmall ? 12 : isMobile ? 16 : 20"
                  :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                  :class="isMobileMedium ? 'mr-10' : 'mr-20'"
                  weight="500"
                >
                  Sevimlilarga
                </AppButton>
                <AppButton
                  theme="main"
                  :fontSize="isMobileSmall ? 12 : isMobile ? 16 : 20"
                  :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                  :class="isMobileMedium ? 'mr-10' : 'mr-20'"
                  weight="500"
                >
                  Tingla
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
export default {
  name: "pageAudios",
  components: { AppButton },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.audio__item {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  &-photo {
    max-width: 250px;
    max-height: 300px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 15px;
    margin-right: 40px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &-content {
    flex: 1;
  }
  &-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media (max-width: 768px) {
  .audio__item {
    flex-direction: column;
    &-photo {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
    }
  }
}
</style>
