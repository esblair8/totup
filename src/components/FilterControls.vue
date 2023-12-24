<template>
  <div class="field buttons" :class="{ 'is-centered': !isLargeScreen }">
    <input
      class="input mb-2 mr-2 is-small"
      type="text"
      placeholder="Filter by name"
      v-model="invoiceStore.searchName"
    />
    <button
      class="button is-inverted is-link is-small"
      @click.prevent="invoiceStore.filterByStatus('draft')"
    >
      Draft Invoices
    </button>
    <button
      class="button is-inverted is-link is-small"
      @click.prevent="invoiceStore.filterByStatus('sent')"
    >
      Sent Invoices
    </button>
    <button
      class="button is-inverted is-link is-small"
      @click.prevent="invoiceStore.filterByStatus('paid')"
    >
      Paid Invoices
    </button>
    <button
      class="button is-inverted is-link is-small"
      @click.prevent="invoiceStore.filterByStatus('unpaid')"
    >
      Unpaid Invoices
    </button>
    <button class="button is-inverted is-link is-small" @click.prevent="invoiceStore.resetFilter()">
      See All
    </button>
  </div>
</template>

<script setup>
import useInvoiceStore from '@/stores/invoiceStore'
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1000px)')
const invoiceStore = useInvoiceStore()
</script>

<style scoped>
.input {
  min-width: 200px;
  max-width: 400px;
}
</style>
