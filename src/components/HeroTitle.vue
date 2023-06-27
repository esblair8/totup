<script setup>
import { defineProps } from 'vue'
const props = defineProps(['title', 'subtitle'])
</script>

<template>
  <div class="content mt-5">
    <h3 class="hero title">
      {{ title }}
    </h3>
  </div>

</template>
