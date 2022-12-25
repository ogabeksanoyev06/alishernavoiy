<template>
  <div>
    <header class="header">
      <marquee behavior="" direction="left" style="color: #95abc6">
        Sayt test rejimida ishlamoqda...Kamchiliklar uchun uzr so'raymiz
      </marquee>
      <div class="container">
        <div class="header__inner">
          <router-link to="/" class="header__logo">
            <img src="/svg/logo.svg" alt="logo" />
          </router-link>
          <div class="header__search mr-20" v-if="!isMobile">
            <BaseInput
              hideDetails
              v-model="search"
              placeholder="Kitobning nomi"
            >
              <template #append>
                <img src="/icons/search.svg" alt="" />
              </template>
            </BaseInput>
          </div>
          <div class="d-flex">
            <div class="header__language mr-20">
              <div class="header__language-icon mb-5">
                <img src="/icons/globe.svg" alt="" />
              </div>
              <ul class="header__language-wrap">
                <li class="header__language-item">
                  <a class="header__language-link">
                    <AppText size="16" line-height="20" weight="500">
                      Oʻzbek
                    </AppText>
                  </a>
                </li>
                <li class="header__language-item" v-if="false">
                  <a class="header__language-link">
                    <AppText size="16" line-height="20" weight="500">
                      Oʻzbek
                    </AppText>
                  </a>
                </li>
              </ul>
            </div>
            <div class="header__account">
              <div class="header__account-photo mb-5">
                <img src="/icons/accaunt.svg" alt="" />
              </div>
              <AppText size="16" line-height="20" weight="500">Profil</AppText>
            </div>
          </div>
        </div>
        <ul class="header__menu">
          <li
            class="header__menu-item"
            v-for="(item, i) in menu"
            :key="i"
            @click="activeLink(item.id)"
          >
            <router-link
              :to="{ name: item.link }"
              class="header__menu-link"
              :class="activeId === item.id ? 'active' : ''"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import "./header.scss";
import BaseInput from "../../../shared-components/BaseInput";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "AppHeader",
  components: { BaseInput },
  data() {
    return {
      activeId: 1,
      menu: [
        {
          id: 1,
          title: "Uy",
          link: "home",
          submenu: false,
        },
        {
          id: 2,
          title: "Kitoblar",
          link: "books",
          submenu: false,
        },
        {
          id: 3,
          title: "Video",
          link: "videos",
          submenu: false,
        },
        {
          id: 4,
          title: "Audio",
          link: "audios",
          submenu: false,
        },
        {
          id: 5,
          title: "Tarjimalar",
          link: "TranslationsBooks",
          submenu: false,
        },

        {
          id: 6,
          title: "Ilmiy tadqiqotlar",
          link: "ScientificResearch",
          submenu: false,
        },
        {
          id: 7,
          title: "Qoʻlyozmalar",
          link: "ManuscriptBooks",
          submenu: false,
        },
      ],
      search: "",
      navigationDrawer: false,
      showDropdown: false,
      accountDropdown: false,
      languageDropdown: false,
    };
  },
  props: {
    headerShadow: {
      type: Boolean,
      default: false,
    },
    headerGreyBg: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    closeDrawer() {
      this.navigationDrawer = false;
    },
    ...mapMutations([]),
    ...mapActions([]),
    showNavigationDrawer() {
      this.navigationDrawer = !this.navigationDrawer;
    },
    activeLink(id) {
      this.activeId = id;
    },
  },
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff96;
  z-index: 49;
}
</style>
