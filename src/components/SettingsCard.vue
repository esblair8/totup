<template v-slot:content>
  <div class="hero-body">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['title'])
</script>
