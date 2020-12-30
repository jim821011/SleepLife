<template>
  <div>
    <a
      class="go-top text-light"
      href="#"
      @click.prevent="goTop"
    >
      <i class="fas fa-angle-up" />
    </a>
    <Alert />
    <div class="sticky-footer">
      <nav class="navbar navbar-expand-md navbar-light bg-blue-op9 sticky-top">
        <div class="container">
          <router-link
            :to="{ name: 'Index' }"
            class="py-1"
          >
            <h1 class="sr-only">
              Sleep Life
            </h1>
            <div class="bg-cover logo" />
          </router-link>
          <button
            class="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="navbar-icon">
              <span />
              <span />
              <span />
            </div>
          </button>

          <div
            id="navbarSupportedContent"
            class="collapse navbar-collapse"
          >
            <ul class="navbar-nav ml-auto">
              <li
                class="nav-item"
                @click="closeNavbar"
              >
                <router-link
                  class="nav-link px-md-4 text-light font-weight-bolder"
                  to="/production"
                >
                  商品列表
                </router-link>
              </li>
              <li
                class="nav-item"
                @click="closeNavbar"
              >
                <router-link
                  class="nav-link px-md-4 text-light font-weight-bolder"
                  to="/attention"
                >
                  我的關注
                </router-link>
              </li>
              <li
                class="nav-item"
                @click="closeNavbar"
              >
                <router-link
                  class="nav-link px-md-4 text-light font-weight-bolder"
                  to="/cart"
                >
                  購物車
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link px-md-4 text-light font-weight-bolder"
                  to="/login"
                >
                  登入
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <router-view />
    </div>

    <footer>
      <div class="bg-blue py-3">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="d-flex flex-column align-items-start">
                <span
                  class="text-light"
                  href="#"
                >07-1234-5678</span>
                <a
                  class="text-light"
                  href="#"
                >sweetaste@email.com</a>
                <span
                  class="text-light"
                  href="#"
                >800 高雄市新興區幸福路 520 號</span>
                <div class="d-flex">
                  <a
                    href="#"
                    class="text-light"
                  >
                    <i class="fab fa-facebook-square fa-2x" />
                  </a>
                  <a
                    href="#"
                    class="text-light ml-1"
                  >
                    <i class="fab fa-twitter-square fa-2x" />
                  </a>
                  <a
                    href="#"
                    class="text-light ml-1"
                  >
                    <i class="fab fa-instagram-square fa-2x" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 align-self-center">
              <div class="bg-cover logo ml-sm-auto mt-3 mt-sm-0" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import $ from 'jquery';
import Alert from '../AlertMassage.vue';

export default {
  components: {
    Alert,
  },
  data() {
    return {
    };
  },
  mounted() {
    window.addEventListener('scroll', this.goTopShow);
  },
  methods: {
    goTopShow() {
      const scrollTop = document.documentElement.scrollTop
        || window.pageYOffset
        || document.body.scrollTop; // 相容瀏覽器
      if (scrollTop > 300) {
        // 滾動高度可調
        $('.go-top').show();
      } else {
        $('.go-top').hide();
      }
    },
    goTop() {
      $('html, body').stop().animate({
        scrollTop: 0,
      });
    },
    closeNavbar() {
      const windowWieght = document.body.clientWidth;
      if (windowWieght <= 750) {
        $('.navbar-toggler').click();
      }
    },
  },
};
</script>

<style lang="scss">
.logo {
  background-image: url(../../assets/images/logo_1.svg);
  width: 200px;
  height: 55px;
  transform: translateY(5px);
}
.go-top {
  position: fixed;
  z-index: 9999;
  bottom: 20px;
  right: 10px;
  width: 35px;
  height: 35px;
  background-color: #376273;
  border-radius: 50%;
  &:hover {
    text-decoration: none;
  }
  i {
    position: absolute;
    top: 10px;
    left: 12px;
  }
}
.navbar-icon {
  padding-top: 5px;
  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: white;
    border-radius: 3px;
  }
}
</style>
