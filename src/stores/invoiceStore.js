import { defineStore } from 'pinia'

const useInvoiceStore = defineStore('invoiceStore', {
  state: () => ({
     invoiceData: [
      {
        id: 1,
        name: 'Lucca Blair',
        rate: 6.00,
        hours: 10.0,
        total: 60,
        status: 'draft',
        period: 'June 23',
        date: '2021-06-23',
      },
      {
        id: 2,
        name: 'Cassie Blair',
        rate: 6,
        hours: 12,
        total: 72,
        status: 'sent',
        period: 'June 23',
        date: '2021-06-23',
      },
      {
        id: 3,
        name: 'Alby Graham',
        rate: 6,
        hours: 12,
        total: 72,
        status: 'unpaid',
        period: 'June 23',
        date: '2021-06-23',
      },
      {
        id: 4,
        name: 'Connie Graham',
        rate: 6,
        hours: 12,
        total: 72,
        status: 'paid',
        period: 'June 23',
        date: '2021-06-23',
      },
      {
        id: 5,
        name: 'Lucca Blair',
        rate: 6,
        hours: 10,
        total: 60,
        status: 'sent',
        period: 'June 23',
        date: '2021-06-23',
      },
      {
        id: 6,
        name: 'Cassie Blair',
        rate: 6,
        hours: 12,
        total: 72,
        status: 'paid',
        period: 'June 23',
        date: '2021-06-23',
      },
      {
        id: 7,
        name: 'Alby Graham',
        rate: 6,
        hours: 12,
        total: 72,
        status: 'unpaid',
        period: 'June 23',
        date: '2021-06-23',
      },
      {
        id: 8,
        name: 'Connie Graham',
        rate: 6,
        hours: 12,
        total: 72,
        status: 'unpaid',
        period: 'June 23',
        date: '2021-06-23',
      }
    ],
    searchName: '',
    selectedStatus: '',
    selectedInvoiceId: null,
  }),
  getters: {
    filteredInvoices(state) {
      const searchTerm = state.searchName.toLowerCase().trim()
      const selectedStatusValue = state.selectedStatus.toLowerCase().trim()

      let filtered = state.invoiceData

      if (searchTerm) {
        filtered = filtered.filter(invoice =>
          invoice.name.toLowerCase().includes(searchTerm)
        )
      }

      if (selectedStatusValue) {
        filtered = filtered.filter(invoice =>
          invoice.status.toLowerCase() === selectedStatusValue
        )
      }

      return filtered
    },
    getInvoiceById: (state) => {
      return (id) => {
        return state.invoiceData.filter(invoice => invoice.id === id )[0]
      }
    },
  },
  actions: {
    filterByStatus(status) {
      this.selectedStatus = status.toLowerCase()
    },
    resetFilter() {
      this.searchName = ''
      this.selectedStatus = ''
    }
  },
  methods: {
    getTagColor(status) {
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
  }
})

export default useInvoiceStore
