<template>
  <div id="container">
    <header class="app-header" :class="{ 'scrolled': isScrolled }">
      <div class="header-left">
        <div class="logo">
          <router-link to="/">
            <font-awesome-icon :icon="['fas', 'ticket']" style="height: 100%; color: #E50914;" />
          </router-link>
        </div>
        <nav class="nav-links desktop-nav">
          <ul>
            <li><router-link to="/">홈</router-link></li>
            <li><router-link to="/popular">대세 콘텐츠</router-link></li>
            <li><router-link to="/wishlist">내가 찜한 리스트</router-link></li>
            <li><router-link to="/search">찾아보기</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="header-right">
        <button class="icon-button" @click="removeKey">
          <font-awesome-icon :icon="['fas', 'user']" />
        </button>
        <button class="icon-button mobile-menu-button" @click="toggleMobileMenu">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
    </header>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ 'open': isMobileMenuOpen }">
      <button class="close-button" @click="toggleMobileMenu">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
      <nav>
        <ul>
          <li><router-link to="/" @click="toggleMobileMenu">홈</router-link></li>
          <li><router-link to="/popular" @click="toggleMobileMenu">대세 콘텐츠</router-link></li>
          <li><router-link to="/wishlist" @click="toggleMobileMenu">내가 찜한 리스트</router-link></li>
          <li><router-link to="/search" @click="toggleMobileMenu">찾아보기</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faUser, faTicket, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSearch, faUser, faTicket, faBars, faTimes);

export default defineComponent({
  name: 'app-header',
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const router = useRouter();
    const isScrolled = ref(false);
    const isMobileMenuOpen = ref(false);

    const removeKey = () => {
      localStorage.removeItem('TMDb-Key');
      router.push('/signin');
    };

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isScrolled,
      isMobileMenuOpen,
      removeKey,
      toggleMobileMenu,
    };
  },
});
</script>

<style scoped>
/* header.css의 내용을 여기에 붙여넣기 */
.app-header {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 4%;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

/* 나머지 CSS 스타일을 여기에 붙여넣기 */
</style>