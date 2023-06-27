<script setup lang="ts">
const props = defineProps({
  subjectName: String,
  firstModule: Number,
  secondModule: Number,
  offset: Number,
  exam: Number,
})
</script>

<template>
  <tr v-if="props.subjectName != 'Накопленный Рейтинг' && props.subjectName != 'Рейтинг'" class="border-b text-sm border-gray-500 sm:text-base">
    <td>{{props.subjectName}}</td>
    <td class="text-center">{{props.firstModule}}</td>
    <td class="text-center">{{props.secondModule}}</td>
    <td class="text-center">{{props.offset}}</td>
    <td class="text-center">{{props.exam}}</td>
  </tr>
</template>