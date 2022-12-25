<template>
  <footer class="footer" :class="isDesktopSmall ? 'py-30' : 'py-60'">
    <div class="container">
      <div class="footer__inner">
        <router-link to="/" class="footer__logo">
          <img src="/svg/logo-white.svg" alt="" />
        </router-link>
        <ul class="footer__menu">
          <li
            class="footer__menu-item"
            v-for="(item, i) in menu"
            :key="i"
            @click="activeLink(item.id)"
          >
            <router-link
              :to="item.link"
              class="footer__menu-link"
              :class="activeId === item.id ? 'active' : ''"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
        <div class="footer__language">
          <div class="footer__language-icon mr-5">
            <img src="/icons/globe.svg" alt="" />
          </div>
          <ul class="footer__language-wrap">
            <li class="footer__language-item">
              <a class="footer__language-link">
                <AppText size="16" line-height="20" weight="500">
                  Oʻzbek Tili
                </AppText>
              </a>
            </li>
            <li class="footer__language-item" v-if="false">
              <a class="footer__language-link">
                <AppText size="16" line-height="20" weight="500">
                  Oʻzbek
                </AppText>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footerScrollUp">
        <div class="scrollUp">
          <img src="/icons/toTop.svg" alt="" />
        </div>
        <div class="hr"></div>
      </div>
      <app-text
        :size="isMobile ? 16 : 18"
        max-lines="2"
        class="mt-30 text-center"
        line-height="22"
        weight="400"
      >
        2022 © Barcha huquqlar himoyalangan
      </app-text>
    </div>
  </footer>
</template>

<script>
import "./footer.scss";

export default {
  name: "AppFooter",
  components: {},
  data() {
    return {
      activeId: 1,
      menu: [
        {
          id: 1,
          title: "Uy",
          link: "/",
          submenu: false,
        },
        {
          id: 2,
          title: "Kitoblar",
          link: "/",
          submenu: false,
        },
        {
          id: 3,
          title: "Video",
          link: "/",
          submenu: false,
        },
        {
          id: 4,
          title: "Audio",
          link: "/",
          submenu: false,
        },
        {
          id: 5,
          title: "Tarjimalar",
          link: "/",
          submenu: false,
        },

        {
          id: 6,
          title: "Ilmiy tadqiqotlar",
          link: "/",
          submenu: false,
        },
        {
          id: 7,
          title: "Qoʻlyozmalar",
          link: "/",
          submenu: false,
        },
      ],
    };
  },
  methods: {
    activeLink(id) {
      this.activeId = id;
    },
  },
};
</script>

<style scoped></style>
