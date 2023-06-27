
<template>
  <div class="modal" :class="{ 'is-active': showModalStore.showSendModal }">
    <div class="modal-background" @click="showModalStore.closeModal('sendModal')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Send Invoice</p>
        <button class="delete" aria-label="close" @click="showModalStore.closeModal('sendModal')"></button>
      </header>
      <section class="modal-card-body">
        <p> {{ invoiceStore.getInvoiceById(invoiceStore.selectedInvoiceId) }}</p>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-link">Edit Invoice</button>
        <button class="button is-success">Send Invoice</button>
        <button class="button" @click="showModalStore.closeModal('sendModal')">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import useShowModalStore from '@/stores/showModalStore'
import useInvoiceStore from '@/stores/invoiceStore'

const showModalStore = useShowModalStore()
const invoiceStore = useInvoiceStore()

const props = defineProps(['invoice'])
</script>


<style scoped></style>
