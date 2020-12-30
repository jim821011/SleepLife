<template>
  <div>
    <form
      class="form-signin"
      @submit.prevent="signIn"
    >
      <h1 class="h3 mb-3 font-weight-normal">
        請先登入
      </h1>
      <label
        for="inputEmail"
        class="sr-only"
      >Email address</label>
      <input
        id="inputEmail"
        v-model="user.username"
        type="email"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      >
      <label
        for="inputPassword"
        class="sr-only"
      >Password</label>
      <input
        id="inputPassword"
        v-model="user.password"
        type="password"
        class="form-control"
        placeholder="Password"
        required
      >
      <div class="checkbox mb-3 d-flex">
        <label>
          <input
            type="checkbox"
            value="remember-me"
          > Remember me
        </label>
        <div class="ml-auto">
          <router-link
            :to="{ name: 'Index' }"
            class="text-primary"
            href="#"
          >
            首頁
          </router-link>
        </div>
      </div>
      <button
        class="btn btn-lg btn-primary btn-block font-weight-bolder"
        type="submit"
      >
        登入
      </button>
      <p class="mt-5 mb-3 text-muted">
        &copy; 2020-2021
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}admin/signin`;
      vm.$http.post(api, vm.user).then((res) => {
        if (res.data.success) {
          // 自行在前端設定cookie
          const { token } = res.data;
          const { expired } = res.data;
          document.cookie = `myCookie=${token}; expires=${new Date(expired)};`;
          vm.$router.push('/admin/products');
        }
      });
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
