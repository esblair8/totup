<template>
  <section class="content">
    <div v-if="invoiceStore.filteredInvoices.length > 0">
      <FilterControls />
      <table class="table mt-4 is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th class="has-text-centered" v-for="header in tableHeaders">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="invoice in invoiceStore.filteredInvoices" :key="invoice.id">
            <td class="has-text-centered">{{ invoice.bill_to }}</td>
            <td class="has-text-centered">{{ invoice.rate }}</td>
            <td class="has-text-centered">£{{ invoice.hours }}</td>
            <td class="has-text-centered">£{{ invoice.total }}</td>
            <td class="has-text-centered">
              <span :class="getTagColor(invoice.status)" class="tag is-rounded">{{
                invoice.status
              }}</span>
            </td>
            <td class="has-text-centered">{{ invoice.period }}</td>
            <td class="has-text-centered">{{ invoice.date }}</td>

            <td class="has-text-centered">
              <a href="https://www.africau.edu/images/default/sample.pdf">
                <font-awesome-icon
                  class="mx-2 is-clickable"
                  icon="fa-regular fa-file"
                  size="lg"
                  title="Preview Invoice"
                />
              </a>
              <!-- <font-awesome-icon class="mx-2 is-clickable" icon="fa-regular fa-file" size="lg" title="Preview Invoice" /> -->
              <font-awesome-icon
                class="mx-2 is-clickable"
                icon="pen-to-square"
                size="lg"
                @click="showModalWithSelectedInvoice('editModal', invoice.id)"
                title="Edit Invoice Details"
              />
              <font-awesome-icon
                class="mx-2 is-clickable"
                icon="fa-regular fa-envelope"
                size="lg"
                @click="showModalWithSelectedInvoice('sendModal', invoice.id)"
                title="Resend Invoice via email (popup appears)"
              />
              <font-awesome-icon
                class="mx-2 is-clickable"
                icon="check"
                size="lg"
                @click="invoice.status = 'paid'"
                title="Mark as paid"
                v-if="invoice.status != 'paid'"
              />
              <font-awesome-icon
                class="mx-2 is-clickable"
                icon="xmark"
                size="lg"
                @click="invoice.status = 'unpaid'"
                title="Mark as unpaid"
                v-else
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="has-text-centered" v-else>
      <p></p>
      <button class="button is-primary">
        <RouterLink to="/new-invoice">Click Here to Create Your First Invoice</RouterLink>
      </button>
    </div>
  </section>
</template>

<script setup>
import router from '../router'
import FilterControls from '@/components/FilterControls.vue'

import useInvoiceStore from '@/stores/invoiceStore'
import useShowModalStore from '@/stores/showModalStore'

import { onMounted } from 'vue'

const showModalStore = useShowModalStore()
const invoiceStore = useInvoiceStore()

onMounted(() => {
  invoiceStore.fetchInvoices()
})
const getTagColor = (status) => {
  switch (status) {
    case 'draft':
      return 'is-warning'
    case 'sent':
      return 'is-info'
    case 'unpaid':
      return 'is-danger'
    case 'paid':
      return 'is-success'
  }
}

const tableHeaders = ['Name', 'Rate', 'Hours', 'Total', 'Status', 'Period', 'Date Sent', 'Actions']

const showModalWithSelectedInvoice = (modalName, invoiceId) => {
  showModalStore.openModal(modalName)
  invoiceStore.selectedInvoiceId = invoiceId
}
</script>

<style>
.is-circular {
  border-radius: 50%;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
