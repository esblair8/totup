import { defineStore } from 'pinia'

const useShowModalStore = defineStore('showModalStore', {
  state: () => ({
    showEditModal: false,
    showPreviewModal: false,
    showSendModal: false,
    selectedInvoice: null
  }),
  actions: {
    openModal(modal) {
      if (modal == 'editModal') this.showEditModal = true
      else if (modal == 'previewModal') this.showPreviewModal = true
      else if (modal == 'sendModal') this.showSendModal = true
    },
    closeModal(modal) {
      if (modal === 'editModal') this.showEditModal = false
      else if (modal === 'previewModal') this.showPreviewModal = false
      else if (modal === 'sendModal') this.showSendModal = false
    }
  }
})

export default useShowModalStore
