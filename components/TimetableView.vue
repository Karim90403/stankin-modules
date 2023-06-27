<script setup lang="ts">
import { ref,nextTick } from 'vue';
import TheTimetable from '@/components/TheTimetable.vue'; // @ is an alias to /src
import { Calendar, DatePicker } from 'v-calendar';
import '@vuepic/vue-datepicker/dist/main.css'
import BaseIcon from '@/components/BaseIcon.vue';

const date = ref<Date>(new Date());
const rerander = ref<boolean>(true);
const Update = async() => {
  rerander.value = false;
	await nextTick();
  rerander.value = true;
}
</script>

<template>
  <div class="flex justify-center mt-8 sm:mt-12">
  <DatePicker v-model="date" @dayclick='Update'>
    <template v-slot="{ inputValue, togglePopover }">
      <div class="flex justify-center">
        <button
          class="p-2 bg-sky-200 border border-gray-300 shadow-xl hover:bg-gray-300 text-gray-600 rounded-l focus:bg-gray-500 focus:text-white focus:border-garay-500 focus:outline-none"
          @click="togglePopover()">
          <BaseIcon icon="calendar" viewBox="0 0 20 20" class="w-4 h-4 fill-current"/>
        </button>
        <input
          class="bg-white text-gray-700 w-3/5 flex-grow shadow-xl py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-sky-500 sm:w-1/3"
          readonly
          :value="inputValue"
        />
      </div>
    </template>
  </DatePicker>   
  </div>  
  <TheTimetable v-if="rerander" :findedDate="date"></TheTimetable>
</template>