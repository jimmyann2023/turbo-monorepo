<script setup lang="ts">
import { ref } from 'vue';

import { Button } from 'ant-design-vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <Button type="primary">ant design</Button>
  <div class="bg-primary-300">uuu</div>
  <div class="bg-primary-500">uuaa</div>
  <div class="bg-rose-500">aaa</div>
  <div class="bg-pink-500">bbb</div>
  <div class="bg-violet-500">ccc</div>
  <div class="bg-green-500">ddd</div>
  <div class="bg-orange-500">fff</div>
  <div class="bg-yellow-500">ggg</div>
  <div class="bg-zinc-500">jjj</div>
  <div class="bg-neutral-500">kkk</div>
  <div class="bg-slate-500">zzz</div>
  <div class="bg-gray-500">lll</div>
  <div class="container mx-auto p-4">
    <!-- 背景颜色 -->
    <div class="rounded-lg bg-gray-500 p-4 text-3xl text-white">
      这是一个绿色背景的盒子
    </div>
    <!-- 边框颜色 -->
    <div class="w-1/2 bg-yellow-500">这是一个黄色边框的盒子</div>
    <!-- 自定义动画 -->
    <div class="animate-accordion-down mt-4 rounded-lg border bg-sky-50 p-4">
      这是一个带有动画效果的盒子
    </div>
  </div>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style></style>
