<script setup>
import FilterControls from '@/components/FilterControls.vue'
import useInvoiceStore from '@/stores/invoiceStore'

const invoiceStore = useInvoiceStore()

const getTagColor = status => {
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

</script>

<template>
  <div v-if="invoiceStore.filteredInvoices.length > 0">
    <FilterControls />
    <div v-for="invoice in invoiceStore.filteredInvoices" class="card m-4">
      <div class="card-content">
        <div class="content">
          <table>
            <h1 class="header">{{ invoice.name }}</h1>
            <tbody>
              <tr>
                <td>Hours</td>
                <td>{{ invoice.hours }}</td>
              </tr>
              <tr>
                <td>Rate</td>
                <td>£{{ invoice.rate }}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>£{{ invoice.total }}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>
                  <span :class="getTagColor(invoice.status)" class="tag is-rounded">{{
                    invoice.status
                  }}</span>
                </td>
              </tr>
              <tr>
                <td>Period</td>
                <td>{{ invoice.period }}</td>
              </tr>
              <tr>
                <td>Date Sent</td>
                <td>{{ invoice.date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card-footer">
        <a href="#" class="card-footer-item">Preview Invoice</a>
        <a href="#" class="card-footer-item">Edit Invoice</a>
        <a href="#" class="card-footer-item">Send Invoice</a>
      </div>
    </div>
  </div>
  <div class="has-text-centered" v-else>
    <p></p>
    <button class="button is-primary">
      <RouterLink to="/new-invoice">Click Here to Create Your First Invoice</RouterLink>
    </button>
  </div>
</template>

