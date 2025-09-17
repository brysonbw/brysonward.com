<template>
  <div>
    <!-- Header/Image -->
    <header class="header">
      <img
        src="~/assets/images/bryson-avatar.jpg"
        class="borderCircle mx-auto h-36 w-36"
        alt="bryson-avatar-img"
      >

      <!-- Social Links -->
      <SocialLinks />

      <h1 class="heading2Xl text-[#18181B] dark:text-white">
        Hey, I'm Bryson
      </h1>
      <h1 class="heading2XlTitle text-[#18181B] dark:text-white">
        a full stack engineer
      </h1>
    </header>

    <!-- Intro -->
    <section class="headingMd">
      <p>
        I enjoy all things tech and software, and primarily create, design, and
        build full stack web and mobile applications. I love learning and
        discovering new technologies, and challenging myself to solve real-world
        problems. And most importantly creating the change I want to see in the
        world!
      </p>
      <!-- Blog -->
      <div class="flex items-center my-4 gap-1">
        <ChevronDoubleRightIcon class="w-3 h-3 text-zinc-600 font-medium dark:text-primary" />
        <NuxtLink
          to="/blog"
          class="text-zinc-600 font-medium dark:text-primary"
        >
          Blog</NuxtLink>
      </div>
      <!-- Portfolio -->
      <div class="flex items-center my-4 gap-1">
        <ChevronDoubleRightIcon class="w-3 h-3 text-zinc-600 font-medium dark:text-primary" />
        <NuxtLink
          to="/work"
          class="text-zinc-600 font-medium dark:text-primary"
        >
          Work</NuxtLink>
      </div>
      <!-- Certificates -->
      <div class="flex items-center my-4 gap-1">
        <ChevronDoubleRightIcon class="w-3 h-3 text-zinc-600 font-medium dark:text-primary" />
        <NuxtLink
          to="/certifications"
          class="text-zinc-600 font-medium dark:text-primary"
        >
          Certifications</NuxtLink>
      </div>
      <!-- Contact -->
      <div class="flex items-center my-4 gap-1">
        <ChevronDoubleRightIcon class="w-3 h-3 text-zinc-600 font-medium dark:text-primary" />
        <a
          href="mailto:brysonward77@gmail.com"
          class="text-zinc-600 font-medium dark:text-primary"
        >
          Contact
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ChevronDoubleRightIcon } from '@heroicons/vue/24/solid';
import SocialLinks from '@/components/SocialLinks.vue';
</script>
