<template>
  <div id="pic">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in items" :key="item">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>

    <div class="demo-image__preview">
      <el-image
        v-for="item in items2"
        :key="item"
        style="width: 150px; height: 150px; margin: auto 15px"
        :src="item.url"
        :preview-src-list="item.srcList"
      >
      </el-image>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      items: [
            "http://47.97.42.11/images/3.jpg",
            "http://47.97.42.11/images/2.jpg",

      ],
      items2: [
        {
          url: "http://47.97.42.11/images/2.jpg",
          srcList: [
            "http://47.97.42.11/images/w1.jpg",
            "http://47.97.42.11/images/w2.jpg",
            "http://47.97.42.11/images/w3.jpg",
          ],
        },
        {
          url: "http://47.97.42.11/images/3.jpg",
          srcList: [
            "http://47.97.42.11/images/w4.jpg",
            "http://47.97.42.11/images/w5.jpg",
            "http://47.97.42.11/images/w6.jpg",
          ],
        },
        {
          url: "http://47.97.42.11/images/4.jpg",
          srcList: [
            "http://47.97.42.11/images/w7.jpg",
            "http://47.97.42.11/images/w8.jpg",
            "http://47.97.42.11/images/w9.jpg",
          ],
        },
      ],
    };
  },
};
</script>


<style>
#pic {
  background-color: rgba(255, 255, 255, 0.199);
  height: 800px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.demo-image__preview {
  text-align: center;
  margin-top: 200px;
}
</style>