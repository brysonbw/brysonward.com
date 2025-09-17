<template>
  <div
    class="max-w-sm transition ease-in-out hover:scale-105 duration-300 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#171717] dark:border-[#2b2b2bc5]"
  >
    <!-- Image -->
    <div class="mx-auto md:mx-0">
      <img
        :src="project.image"
        :class="['rounded-t-lg', project.image_class]"
        :alt="`${project.image_alt}`"
      >
    </div>
    <div class="flex flex-col p-3 gap-[0.35rem]">
      <!-- Title -->
      <div class="flex-row">
        <a
          target="_blank"
          class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
          :href="`${project.link}`"
        >
          {{ project.name }}
        </a>
      </div>
      <!-- Description -->
      <div class="flex-row mb-1">
        <p class="font-normal text-gray-700 dark:text-gray-300">
          {{ project.description }}
        </p>
      </div>
      <!-- Tech Stack Icons And/Or Images -->
      <div class="flex flex-row flex-wrap gap-1">
        <div v-if="project?.image_icons && project?.image_icons?.length > 0">
          <img
            v-for="(img_icon, index) in project.image_icons"
            :key="img_icon + index"
            :class="['w-6 h-6 inline-flex', img_icon.classes]"
            :src="img_icon.src"
            :alt="img_icon.name"
          >
        </div>
        <i
          v-for="(dev_icon, index) in project.dev_icons"
          :key="dev_icon + index"
          :class="`devicon devicon-${dev_icon === 'python' ? `python-plain colored` : devIcons[dev_icon]} ${dev_icon === 'typescript' && 'ml-1'}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

// Stores
const appStore = useAppStore();

const devIcons = appStore.devIcons;
</script>

<style scoped>
.devicon {
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
}
</style>
