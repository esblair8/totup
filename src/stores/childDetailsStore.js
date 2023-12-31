import { defineStore } from 'pinia'

const useChildDetailsStore = defineStore('childDetailsStore', {
  state: () => ({
    fullName: '',
    parentsFullName: '',
    parentsEmail: '',
    schedule: {
      monday: 'hours',
      tuesday: 'hours',
      wednesday: 'hours',
      thursday: 'hours',
      friday: 'hours',
      saturday: 'hours',
      sunday: 'hours'
    },
    contractSentStatus: 'draft', //draft, sent, signed
    otherInformationForSentStatus: 'draft' //draft, sent, completed
  }),
  getters: {},
  actions: {},
  methods: {}
})

export default useChildDetailsStore
