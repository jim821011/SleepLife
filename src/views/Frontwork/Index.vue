<template>
  <div>
    <loading :active.sync="isLoading">
      <div class="loading-animated">
        <div class="loading-animated-circle">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </loading>
    <header class="container px-0 px-md-3 mt-sm-4">
      <swiper
        ref="headSwiper"
        :options="headSwiper"
      >
        <swiper-slide>
          <div class="bg-cover bg-img-1">
            <div
              class="bg-brightness d-flex justify-content-center align-items-center"
            >
              <span class="header-title px-3 text-center">安心睡，迎接美好的一天</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="bg-cover bg-img-2">
            <div
              class="bg-brightness d-flex flex-column justify-content-center align-items-center"
            >
              <span class="header-title px-3 text-center">多款實用又實惠的寢具</span>
              <router-link
                class="btn btn-primary btn-lg"
                to="/production"
              >
                手刀搶購
              </router-link>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="bg-cover bg-img-3">
            <div
              class="bg-brightness d-flex flex-column justify-content-center align-items-center"
            >
              <span class="header-title px-3 text-center">完美寢具盡在Sleep Life</span>
            </div>
          </div>
        </swiper-slide>
        <div
          slot="pagination"
          class="swiper-pagination"
        />
      </swiper>
    </header>

    <section class="my-md-9">
      <div class="my-5 d-md-none">
        <h2 class="intro-title-row text-center">
          為什麼要睡好床?
        </h2>
      </div>
      <div class="bg-blue-l">
        <div class="container">
          <div
            ref="fadeInLeft"
            class="row animate__animated animate__slowe"
            :class="{ animate__fadeInLeft: fadeInLeftShow }"
          >
            <div class="col-md-6 intro-overflow">
              <div class="bg-cover-l intro-img h-100 section-img-1" />
            </div>
            <div class="col-md-6">
              <div class="row justify-content-end flex-nowrap">
                <div class="intro-text">
                  <p>
                    人生約有三分之一的時間花在睡眠，而睡面品質和寢具的選擇有很大的關係。
                  </p>
                  <p>
                    選購適合自己的寢具、枕頭，能提供舒適的睡眠，也能避免產生頸椎及過敏的毛病。
                  </p>
                </div>
                <div class="intro-overflow d-none d-md-block">
                  <h2 class="intro-title-column">
                    為什麼要睡好床<span class="intro-title-qus">?</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="my-md-9">
      <div class="my-5 d-md-none">
        <h2 class="intro-title-row text-center">
          良好的睡眠品質有何好處?
        </h2>
      </div>
      <div class="bg-blue-l">
        <div class="container">
          <div
            ref="fadeInRight"
            class="row animate__animated animate__slowe"
            :class="{ animate__fadeInRight: fadeInRightShow }"
          >
            <div class="col-md-6 order-2 order-md-1">
              <div class="row flex-row-reverse flex-nowrap">
                <div class="intro-overflow d-none d-md-block">
                  <h2 class="intro-title-column">
                    良好的睡眠品質
                    <br>
                    <span class="intro-title-space">
                      有何好處
                    </span>
                    <span class="intro-title-qus">
                      ?
                    </span>
                  </h2>
                </div>
                <div class="intro-text">
                  <p>
                    好的睡眠品質可以讓身體機能正常運作且有效的運作轉，也可以提升免疫力；因大腦可以有效運作，
                    做事效率會提升，專注力也會提升。
                    而在心理方面，好的睡眠品質可使情緒穩定，舒緩壓力，令人心情愉悅。
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 intro-overflow order-1 order-md-2">
              <div class="bg-cover-b intro-img h-100 section-img-2" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-md-8 my-5">
      <div class="bg-cover bg-fixed section-img-3">
        <div
          class="bg-brightness d-flex flex-column justify-content-center align-items-center"
        >
          <h2 class="section_3-title px-3 text-center">
            想要一覺到天明?
          </h2>
          <router-link
            class="btn btn-primary btn-lg"
            to="/production"
          >
            立刻選購去
          </router-link>
        </div>
      </div>
    </section>

    <section class="mb-5 mb-md-6">
      <div class="container">
        <div class="d-flex align-items-start">
          <h2 class="production-title mb-3">
            最新商品
          </h2>
          <span class="badge badge-pill badge-danger badge-new">
            New
          </span>
        </div>
        <div
          class="row"
          @mouseover="shopswiperStop"
          @mouseleave="shopswiperStart"
        >
          <swiper
            ref="shopSwiper"
            :options="shopSwiper"
          >
            <swiper-slide
              v-for="item in NewFiveProduction"
              :key="item.id"
            >
              <div class="col">
                <div class="tool-card mb-4 mb-md-0">
                  <router-link :to="{ path: `product_detail/${item.id}` }">
                    <div
                      class="bg-cover"
                      :style="{
                        backgroundImage: `url(${item.imageUrl})`,
                        height: `315px`,
                      }"
                    >
                      <div
                        class="production-img d-flex justify-content-center
                        h-100 align-items-center"
                      >
                        商品資訊
                      </div>
                    </div>
                  </router-link>
                  <div
                    class="d-flex flex-column text-center text-primary tool-card-item border-bottom"
                  >
                    <span class="h5 py-3 m-0">{{ item.title }}</span>
                    <strong class="h5 pb-3 m-0">NT$ {{ item.price }}</strong>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <div
              slot="button-next"
              class="swiper-button-next"
            />
            <div
              slot="button-prev"
              class="swiper-button-prev"
            />
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      headSwiper: {
        // 控制表頭幻燈片
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 2500,
        },
        speed: 1500,
        loop: true,
        effect: 'fade',
      },
      shopSwiper: {
        // 最新商品幻燈片
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1, // 初始顯示數量
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
          },
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 2000,
        },
        speed: 1000,
        //   loop:true,
      },
      fadeInLeftHeight: 0,
      fadeInRightHeight: 0,
      fadeInLeftShow: false,
      fadeInRightShow: false,
      newProduction: [], // 商品列表
      isLoading: false,
    };
  },
  computed: {
    headswiper() {
      return this.$refs.headSwiper.$swiper;
    },
    shopswiper() {
      return this.$refs.shopSwiper.$swiper;
    },
    NewFiveProduction() {
      // 只取前5樣最新加入的商品
      const filterArr = [...this.newProduction].reverse()
        .filter((item, i) => i <= 4);
      return filterArr;
    },
  },
  mounted() {
    this.headswiper.slideTo(1, 1000, false);
    this.catchHeight();
    window.addEventListener('scroll', this.handleScroll);
    this.getNewProduction();
  },
  methods: {
    handleScroll() {
      this.section_1Flash();
      this.section_2Flash();
    },
    section_1Flash() {
      const scrollPos = $(window).scrollTop(); // 滾離頂端的高度
      const windowHight = $(window).height(); // 可見視窗高度

      if (windowHight + scrollPos >= this.fadeInLeftHeight) {
        this.fadeInLeftShow = true;
      }
    },
    section_2Flash() {
      const scrollPos = $(window).scrollTop(); // 滾離頂端的高度
      const windowHight = $(window).height(); // 可見視窗高度

      if (windowHight + scrollPos >= this.fadeInRightHeight) {
        this.fadeInRightShow = true;
      }
    },
    catchHeight() {
      this.fadeInLeftHeight = $(this.$refs.fadeInLeft).offset().top; // 目標到頂部的距離
      this.fadeInRightHeight = $(this.$refs.fadeInRight).offset().top;
    },
    getNewProduction() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.isLoading = true;
      vm.$http.get(api).then((res) => {
        vm.newProduction = res.data.products;
        vm.isLoading = false;
      });
    },
    shopswiperStop() {
      // 最新商品幻燈片暫停 配合mouseover事件
      this.shopswiper.autoplay.stop();
    },
    shopswiperStart() {
      // 最新商品幻燈片開始運作 配合mouseleave事件
      this.shopswiper.autoplay.start();
    },
  },
};
</script>

<style lang="scss">
$main-dark-b: #376273;
$main-light-b: rgba(204, 223, 234, 0.68);
@import '~animate.css/animate.css';

.bg-brightness {
  backdrop-filter: brightness(50%);
  width: 100%;
  height: 100%;
}

.bg-img-1 {
  background-image: url(../../assets/images/bg_1.jpg);
  height: 550px;
}
.bg-img-2 {
  background-image: url(../../assets/images/bg_2.jpg);
  height: 550px;
}
.bg-img-3 {
  background-image: url(../../assets/images/bg_3.jpg);
  height: 550px;
}

.bg-fixed {
  background-attachment: fixed;
}
.header-title {
  color: rgba(255, 255, 255, 0.8);
  font-weight: bolder;
  font-size: 40px;
}
.section_3-title {
  color: rgba(255, 255, 255, 0.8);
  font-weight: bolder;
  font-size: 40px;
}

.intro-title-column {
  writing-mode: vertical-rl;
  font-size: 45px;
  margin: 0px 10px 0px 50px;
  font-weight: bolder;
  color: $main-dark-b;
  @media (max-width: 992px) {
    margin-left: 10px;
  }
}
.intro-title-qus {
  writing-mode: horizontal-tb;
}

.intro-title-row {
  font-size: 45px;
  font-weight: bolder;
  color: $main-dark-b;
}

.intro-title-space {
  padding-top: 75px;
}

.intro-text {
  line-height: 2.5;
  color: $main-dark-b;
  writing-mode: vertical-rl;
  max-height: 420px;
  padding: 70px 0px;
  @media (max-width: 768px) {
    padding: 30px 10px 15px 10px;
    writing-mode: horizontal-tb;
  }
}

.intro-img {
  min-height: 250px;
  @media (max-width: 992px) {
    margin-left: -15px;
    margin-right: -15px;
  }
}

.section-img-1 {
  background-image: url(../../assets/images/section_1.jpg);
}
.section-img-2 {
  background-image: url(../../assets/images/section_2.jpg);
}
.section-img-3 {
  background-image: url(../../assets/images/section_3.jpg);
  height: 400px;
}

.intro-overflow {
  margin-top: -25px;
  margin-bottom: -25px;
  @media (max-width: 768px) {
    margin: 0;
  }
}

.swiper-button-prev,
.swiper-button-next {
  color: #376273;
  font-weight: bolder;
  opacity: 0;
  transition: opacity 0.5s;
  &:hover {
    opacity: 1;
  }
}
.badge-new {
  font-size: 0.5rem;
}
.production-title {
  color: $main-dark-b;
  font-weight: bolder;
}
.swiper-pagination-bullet-active {
  background-color: #376273;
}
</style>
