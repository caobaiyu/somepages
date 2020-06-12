<template>
  <div class="login_bg">
    <div class="login_logo">
      <img src="@images/login/logoCricle.png" alt />
    </div>
    <div class="login_content">
      <LeftAnimation class="login_left" />
      <LoginForm class="login_right" :logP="lgForm" ref="lgfm" @changeD="changeL" />
    </div>
  </div>
</template>

<script>
import LeftAnimation from "./loginComponents/LeftAnimation";
import LoginForm from "./loginComponents/LoginForm";
export default {
  components: {
    LeftAnimation,
    LoginForm
  },
  data() {
    return {
			lgForm:"传个值"
		};
  },
  methods: {
    changeL(dat){
      this.lgForm = dat ||"我变了"
      console.log(dat)
    }
  },
  mounted(){
    console.log(this.$refs.lgfm)
  }
};
</script>

<style lang="scss">
.login_bg {
  @include wh(100%, 100%);
  font-family: "Microsoft YaHei";
	background: url("../components/images/login/login2bg.png") ;
  overflow:hidden;
}
.login_content{
	display: flex ;
	justify-content: space-between;
  align-items:center;
}
.login_left {
  margin-top: 60px;
  width: 60%;
  max-width: 1000px;
	max-height: 90%;
}
.login_right {
  margin: 200px 20% 200px 100px;
  width: 40%;
  max-width: 400px;
  min-width: 300px;
}
</style>
