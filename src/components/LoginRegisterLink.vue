<script setup>
import { defineProps } from 'vue'

const props = defineProps(['message', 'to', 'linkText'])
</script>

<template>
  <div class="field mt-3">
    <span>{{ message }} </span>
    <RouterLink :to="to">{{ linkText }}</RouterLink>
  </div>
</template>
