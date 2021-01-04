<template>
  <div>
    <Navbar />
    <Alert />
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main
          role="main"
          class="col-md-9 ml-sm-auto col-lg-10 px-4"
        >
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
import Alert from '../AlertMassage.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    Alert,
  },
  created() {
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)myCookie\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.$http.defaults.headers.common.Authorization = myCookie;
  },
};
</script>

<style lang="scss" scoped>
* {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

[role="main"] {
  padding-top: 133px;
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 48px;
  }
}
</style>
