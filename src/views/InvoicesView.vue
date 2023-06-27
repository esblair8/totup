<script setup>
import { useMediaQuery } from '@vueuse/core'

import InvoiceCardList from "@/components/InvoiceCardList.vue"
import InvoiceTable from "@/components/InvoiceTable.vue"
import HeroTitle from "@/components/HeroTitle.vue"
import EditInvoiceModal from '@/components/EditInvoiceModal.vue'
import SendInvoiceModal from '@/components/SendInvoiceModal.vue'

const isLargeScreen = useMediaQuery('(min-width: 700px)')
</script>

<template>
  <div class="container m-3">
    <HeroTitle title="Invoices" />
    <InvoiceTable class="mr-4" v-if="isLargeScreen" />
    <InvoiceCardList v-else />
    <EditInvoiceModal />
    <SendInvoiceModal />
  </div>
</template>
