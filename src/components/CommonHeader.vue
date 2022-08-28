<template>
  <header>
    <div class="Firstcontent">
      <el-button plain icon="el-icon-menu" size="mini" @click="ChangeIsCollapse"></el-button>
      <h3 style="color:#fff">首页</h3>
    </div>
    <div class="Secondcontent">
      <el-dropdown trigger="click" szie="mini">
        <span>
          <img class="user" :src="userImg" />
        </span>
         <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>

export default ({
  data() {
    return {
      userImg: require('../assets/images/user.png')
    }
  },
  methods: {
    ChangeIsCollapse() {
      this.$store.commit('Change')
    }
  },
})
</script>

<style lang="less" scoped>
  header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .Firstcontent {
      display: flex;
      align-items: center;
      .el-button {
        margin-right: 20px;
      }
    }
  .Secondcontent {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
</style>

