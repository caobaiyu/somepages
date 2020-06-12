<!--  -->
<template>
  <div class="main">
    <div class="logbeforel"></div>
    <div class="logbeforer"></div>
    <p class="uselogtitle">用户登录</p>
    <el-form
      ref="ref_lgform"
      :model="lgData"
      :rules="lgRules"
      label-width="80px"
      class="login_form"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="lgData.username" prefix-icon="iconfont icon-yonghu"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="psd">
        <el-input v-model="lgData.psd" prefix-icon="iconfont icon-mima" type="password"></el-input>
      </el-form-item>
      <el-form-item class="lg_btn">
        <el-button type="primary" @click="lgn_lgform">登录</el-button>
        <el-button type="info" @click="reset_lgform">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import singVue from "@utils/singVue"
export default {
  //components: {},
  data() {
    return {
      //表单数据绑定对象
      lgData: {
        username: "admin",
        psd: "123456"
      },
      //表单验证规则
      lgRules: {
        //验证用户名。密码，这里的验证规则好像要和上面的数据绑定的名字一样
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        psd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ]
      },
      little: ""
    };
  },
  props: {
    logP: {
      type: String,
      default: "你猜"
    }
  },
  //监听属性 类似于data概念
  computed: {
    logPC() {
      return this.little;
    }
  },
  //监控data中的数据变化
  watch: {
    little(val, oldVal) {
      console.log(val)
    },
    logP(val, oldVal){
      console.log(val)
      console.log(5555)
    }
  },
  //方法集合
  methods: {
    reset_lgform() {
      //resetFields整个表单重置，resetField单项重置
      this.$refs.ref_lgform.resetFields();
      this.$emit("changeD", "我要变");
      console.log("11111");
      singVue.$emit("aevent","兄弟")
      // changeD
    },
    lgn_lgform() {
      this.$router.push("/home");
      /*this.$refs.ref_lgform.validate(B => {
        if (!B) return;
        this.$axios
          .Apost("/login", this.lg_form)
          .then(data => {
            console.log(data);
            setStore("token", data.userList.token);
            this.$router.push("/home");
          })
          .catch(er => {
            console.log(er.data);
            this.$message.error(er.data.msg);
          });
      });*/
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.little = this.logP;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.logPC);
  },
  //beforeCreate() {}, //生命周期 - 创建之前
  //beforeMount() {}, //生命周期 - 挂载之前
  //beforeUpdate() {}, //生命周期 - 更新之前
  updated() {
    console.log(this.logPC);
  } //生命周期 - 更新之后
  //beforeDestroy() {}, //生命周期 - 销毁之前
  //destroyed() {}, //生命周期 - 销毁完成
  //activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
$poslrtb: -3px;
@mixin borderF($L: 50px, $W: 6px) {
  content: " ";
  display: block;
  position: absolute;
  width: $L;
  height: $L;
  border-width: $W;
  border-style: solid;
}

@mixin borderV($F) {
  @include borderF;
  @if $F == L {
    top: $poslrtb;
    left: $poslrtb;
    border-color: #f98d01 transparent transparent #f98d01;
  } @else if $F == R {
    top: $poslrtb;
    right: $poslrtb;
    border-color: #f98d01 #f98d01 transparent transparent;
  } @else if $F == T {
    bottom: $poslrtb;
    left: $poslrtb;
    border-color: transparent transparent #f98d01 #f98d01;
  } @else {
    bottom: $poslrtb;
    right: $poslrtb;
    border-color: transparent #f98d01 #f98d01 transparent;
  }
}

.main {
  position: relative;
  border: 3px solid #096ab5;
  padding: 48px 50px;
  p {
    color: #d6e9fc;
    text-align: center;
  }
}

.logbeforer,
.logbeforel {
  position: absolute;
  bottom: 0;
  left: 0;
  @include wh;
}
.logbeforer::before {
  @include borderV(L);
}
.logbeforer::after {
  @include borderV(R);
}
.logbeforel::before {
  @include borderV(T);
}
.logbeforel::after {
  @include borderV(B);
}
.login_form {
  margin-top: 65px;
  .lg_btn {
    text-align: center;
  }
}
</style>