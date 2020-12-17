<template>
    <div>
        <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <span class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">後臺系統</span>
            <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
            <router-link class="text-light px-3 ml-auto" :to="{name:'Index'}">回網站首頁</router-link>
            <ul class="navbar-nav px-3">              
                <li class="nav-item text-nowrap">
                  <a class="text-light nav-link" href="#" @click.prevent="logOut">登出</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      
    }
  },
  methods: {
    logOut() {
      const api = `${process.env.VUE_APP_APIPATH}logout`;
      const vm = this;
      this.$http.post(api, vm.user)
      .then((res)=>{
        console.log(res.data)
        if(res.data.success){
          vm.$router.push('/login')
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>

    /*
   * Navbar
   */
  
  .navbar-brand {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, .25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
  }
  
  .navbar .form-control {
    padding: .75rem 1rem;
    border-width: 0;
    border-radius: 0;
  }
  
  .form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, .1);
    border-color: rgba(255, 255, 255, .1);
  }
  
  .form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
  }
</style>