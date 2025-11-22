<template>
  <div>
    <!-- Avatar Image -->
    <NuxtLink to="/">
      <img
        src="~/assets/images/bryson-avatar.jpg"
        class="borderCircle mx-auto h-36 w-36"
        alt="bryson-avatar-img"
      >
    </NuxtLink>
    <!-- Title -->
    <h3 class="heading2Xl text-[#18181B] dark:text-white">
      Work
    </h3>

    <div>
      <!-- Tabs -->
      <ul
        class="mt-4 flex text-sm font-medium text-center text-gray-500 divide-x-2 dark:divide-none divide-gray-200 rounded-lg sm:flex dark:divide-[#2b2b2bc5] dark:text-gray-400"
        role="tablist"
      >
        <li class="w-full">
          <button
            type="button"
            :class="[
              'inline-block w-full p-4 focus:outline-none rounded-tl-lg',
              activeTab === 'Open Source'
                ? 'bg-white dark:bg-[#171717] font-semibold'
                : 'bg-gray-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700',
            ]"
            @click="setTab('Open Source')"
          >
            Open Source
          </button>
        </li>
        <li class="w-full">
          <button
            type="button"
            :class="[
              'inline-block w-full p-4 focus:outline-none rounded-tr-lg',
              activeTab === 'Commercial'
                ? 'bg-white dark:bg-[#171717] font-semibold'
                : 'bg-gray-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700',
            ]"
            @click="setTab('Commercial')"
          >
            Commercial
          </button>
        </li>
      </ul>

      <!-- Tab Contents -->
      <div class="border-t border-gray-200 dark:border-[#2b2b2bc5]">
        <div
          v-show="activeTab === 'Open Source'"
          class="p-4 bg-white rounded-lg md:p-8 dark:bg-[#171717]"
        >
          <!-- Open Source/Side Projects --->
          <div class="text-center tab-content-title text-[#18181B] dark:text-white">
            {{ activeTab }} Projects
          </div>
          <div class="container mx-auto px-5">
            <div
              class="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-2"
            >
              <ProjectCard
                v-for="project in openSource"
                :key="project.name"
                :project="project"
              />
            </div>
          </div>

          <div class="text-center pt-8 text-lg">
            <a
              class="text-zinc-600 dark:text-primary"
              target="_blank"
              href="https://github.com/search?l=&o=desc&q=user%3Abrysonbw&s=updated&type=Repositories"
            >View more projects</a>
          </div>

          <!-- Github (Latest Code) --->
          <GithubPartial />
        </div>

        <!-- Commercial (Closed Source) -->
        <div
          v-show="activeTab === 'Commercial'"
          class="p-4 bg-white rounded-lg md:p-8 dark:bg-[#171717]"
        >
          <div class="text-center tab-content-title text-[#18181B] dark:text-white">
            {{ activeTab }} Projects
          </div>
          <p class="text-[#18181B] dark:text-white text-center">
            There are currently no {{ activeTab }} projects to display.
          </p>
        </div>
      </div>
    </div>
    <!-- Back To Home Link -->
    <div style="margin: 3rem 0 0">
      <NuxtLink
        class="text-zinc-600 dark:text-primary"
        to="/"
      >← Back to home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import GithubPartial from '@/components/partials/GithubPartial.vue';
import { ref, computed } from 'vue';
import { useProjectStore } from '@/stores/project';

useHead({
  title: 'Bryson Ward | Work',
  meta: [{ name: 'description', content: 'Bryson Ward: Full Stack Engineer.' }],
});

type Tabs = 'Open Source' | 'Commercial';

// Stores
const projectStore = useProjectStore();

// Refs
const activeTab = ref<Tabs>('Open Source');

// Computed
const openSource = computed(() => {
  return projectStore.openSource;
});

// Methods
const setTab = (tab: Tabs) => {
  activeTab.value = tab;
};
</script>

<style scoped>
.tab-content-title {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1em;
}

.borderCircle {
  border-radius: 9999px;
}
</style>
