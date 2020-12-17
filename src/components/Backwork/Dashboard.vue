<template>
    <div>
        <Navbar></Navbar>
        <Alert/>
        <div class="container-fluid">
            <div class="row">
                   <Sidebar></Sidebar>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Alert from "../AlertMassage";


export default {
    components:{
        Navbar,
        Sidebar,
        Alert,
    },
    created() {
        const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)myCookie\s*=\s*([^;]*).*$)|^.*$/, "$1");
        // console.log(myCookie)
        this.$http.defaults.headers.common.Authorization = myCookie;
    },
}
</script>

<style lang="scss" scoped>
    * {
    font-size: .875rem;
  }
  
  .feather {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
  }
  
  
  /*
   * Content
   */
  
  [role="main"] {
    padding-top: 133px; /* Space for fixed navbar */
  }
  
  @media (min-width: 768px) {
    [role="main"] {
      padding-top: 48px; /* Space for fixed navbar */
    }
  }
  
  
</style>