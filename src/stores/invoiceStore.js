import { defineStore } from 'pinia'
import  useSupabase  from '@/composables/UseSupabase'

const { supabase } = useSupabase()

const useInvoiceStore = defineStore('invoiceStore', {
  state: () => ({
    invoiceData: [],
    searchName: '',
    selectedStatus: '',
    selectedInvoiceId: null,
    errorMessage: null,
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
    },
    async fetchInvoices(state) {
      if (this.invoiceData.length > 0) return
     
      let { data, error } = await supabase
      .from('invoices')
      .select(`* , line_items(*)`)
    
      if (error)  {
        this.errorMessage = error.message
      } else {
        this.invoiceData = data
    }
    },
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
