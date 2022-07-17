<template>
  <div class="home">
    <van-nav-bar title="首页" />
    <div class="menus">
      <div class="menu-item" v-for="(item, index) in 8" :key="index">
        <div class="icon" @click.prevent>
          <van-icon name="like-o" />
          <van-icon name="down" />
          <van-icon name="info-o" />
        </div>
        <span class="menu-cover">
          <img class="img" :src="url(index)" @click="scaleCover(index)" />
        </span>
        <div class="menu-title" @click.prevent>哔哩历史</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ImagePreview } from "vant";

let images = [
  "https://c-ssl.dtstatic.com/uploads/blog/202206/03/20220603123406_4cdff.thumb.300_300_c.jpg_webp",
  "https://c-ssl.dtstatic.com/uploads/blog/202206/03/20220603123406_9a06b.thumb.300_300_c.jpg_webp",
  "https://c-ssl.dtstatic.com/uploads/blog/202206/03/20220603123406_a2f31.thumb.300_300_c.jpg_webp",
  "https://c-ssl.dtstatic.com/uploads/blog/202206/03/20220603123406_d6a78.thumb.300_300_c.jpg_webp",
  "https://gd-hbimg.huaban.com/a30e26c32da5c5eebf07787cdfb18c96c01fab97115d752-vi0WQ4_fw658",
  "https://gd-hbimg.huaban.com/c7be983cce5009c71ce93118693837f3d35add48b9d0-w25p71_fw658",
  "https://gd-hbimg.huaban.com/56bf2f963f20dfb9c3b78944ebe21eb4aa9b4a4d1a520-ocFlug_fw658",
  "https://gd-hbimg.huaban.com/7b076bb9aae01d83737391fef5d5474f3f9eb6ef9f581-AwlZI7_fw658",
];
const url = (index: number) => {
  return images[index % images.length];
};

const scaleCover = (index: number) => {
  ImagePreview({
    images,
    teleport: "#app",
    startPosition: index,
  });
};
</script>

<style lang="scss">
.menus {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  grid-gap: 12px;
  padding: 12px;
  user-select: none;
  .menu-item {
    border-radius: 6px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    overflow: hidden;
    position: relative;
    .icon {
      width: calc(100% - 20px);
      padding: 6px;
      position: absolute;
      bottom: 36px;
      left: 0;
      right: 0;
      margin: auto;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      gap: 18px;
      backdrop-filter: blur(5px);
      border-radius: 12px;
      background-color: rgba(0, 191, 255, 0.1);
    }
    .menu-cover {
      display: block;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .menu-title {
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
  }
}
</style>
