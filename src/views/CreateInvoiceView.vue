<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import HeroTitle from '@/components/HeroTitle.vue'
import useUserInfoStore from '../stores/userInfoStore'
import useAuthUser from '@/composables/UseAuthUser'

const userInfoStore = useUserInfoStore()
const { userInfo } = storeToRefs(userInfoStore)

const { loggedInUser, isLoggedIn } = useAuthUser()

onMounted(async () => {
  await userInfoStore.fetchUserInfo()
})
const imageUrl = ref(null)

const handleFileChange = (event) => {
  const file = event.target.files[0]
  const reader = new FileReader()

  reader.onload = (e) => {
    imageUrl.value = e.target.result
  }

  reader.readAsDataURL(file)
}

const deleteImage = () => {
  imageUrl.value = null
}

const lineItems = ref([
  { id: "", name: "", date: "", hours: null, rate: null, total: null },

])


const getTotalForLineItems = computed(() => {
  return lineItems.value.reduce((acc, lineItem) => {
    return acc + lineItem.total
  }, 0)
})


const recalculateTotal = (index) => {
  const item = lineItems.value[index];
  lineItems.value[index].total = item.hours * item.rate;
  return item.total
}

const addLineItem = () => {
  lineItems.value.push({
    ...lineItems.value[lineItems.value.length - 1],
    id: lineItems.value.length + 1
  }
  )
}

const removeLineItem = () => {
  if (lineItems.value.length > 1) {
    lineItems.value.pop()
  } else {
    alert("You must have at least one line item")
  }
}

const initialInvoiceData = reactive({
  invoiceNumber: "",
  invoiceDate: "",
  customerName: "",
  customerEmailAddress: "",
  customerAddress: "",
  companyName: "", //pull from users table
  companyAddress: userInfoStore.street, //pull from users table
  companyEmailAddress: "", //pull from users table
  terms: "",
  notes: ""
})

const saveInvoiceToDb = () => {
}

</script>

<template>
  <div class="container content m-4">
    <HeroTitle title="Create Invoice" />
    <div v-if="isLoggedIn()" class="invoice">
      <div class="invoice-header columns is-vcentered">
        <div v-if="imageUrl" class="column image-selector is-2">
          <span class="delete-icon is-clickable" @click="deleteImage">
            <font-awesome-icon class="mx-2 is-clickable" icon="xmark-circle" title="Preview Invoice" />
          </span>
          <img :src="imageUrl" alt="uploaded logo">

        </div>
        <div v-else class="file is-boxed column is-3">
          <label class="file-label">
            <input class="file-input" type="file" @change="handleFileChange" />
            <span class="file-cta">
              <span class="file-label">Upload Logo</span>
            </span>
          </label>
        </div>

        <h1 class="column is-3 is-size-2">Invoice</h1>
        <div class="invoice-details column is-3 is-size-5">
          <p class="label">Invoice Number</p>
          <input class="input  is-clickable is-small" v-model="initialInvoiceData.invoiceNumber">
          <p class="label">Invoice Date</p>
          <input class="input is-clickable is-small" v-model="initialInvoiceData.invoiceDate">
        </div>
      </div>

      <div class="bill-section columns is-vcentered">
        <div class="bill-to column is-half">
          <h2 class="is-size-5">Bill To</h2>
          <input class="input is-clickable is-small" v-model="initialInvoiceData.customerName">
          <input class="input is-clickable is-small" v-model="initialInvoiceData.customerAddress">
          <input class="input is-clickable is-small" v-model="initialInvoiceData.customerPostCode">
          <input class="input is-clickable is-small" v-model="initialInvoiceData.customerCountry">
          <input class="input is-clickable is-small" v-model="initialInvoiceData.customerEmailAddress">
        </div>
        <div class="bill-from column is-half has-text-right">
          <h2 class="is-size-5">Bill From</h2>
          <input class="input is-clickable is-small" v-model="userInfo.full_name">
          <input class="input is-clickable is-small" v-model="userInfo.address">
          <input class="input is-clickable is-small" v-model="userInfo.post_code">
          <input class="input is-clickable is-small" v-model="userInfo.country">
          <input class="input is-clickable is-small" v-model="loggedInUser.email">
        </div>
      </div>

      <table class="table ">
        <thead>
          <tr>
            <th>Child</th>
            <th>Date</th>
            <th>Hours</th>
            <th>Rate</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody class="">
          <tr v-for="(item, index) in lineItems" :key="item.id">
            <td>
              <input class="input is-clickable" v-model="item.name">
            </td>
            <td>
              <input class="input is-clickable" v-model="item.date">
            </td>
            <td>
              <input class="input is-clickable" v-model="item.hours">
            </td>
            <td>
              <input type="text" class="input is-clickable" v-model="item.rate">
            </td>
            <td>{{ recalculateTotal(index) }}</td>
          </tr>

        </tbody>
      </table>

      <div class="button-section">
        <button class="button is-small is-primary" @click="addLineItem">Add Another Line Item</button>
        <button class="button is-small is-warning ml-3" @click="removeLineItem">Remove Line Item</button>
      </div>

      <div class="invoice-total has-text-right mr-6">

        <p><strong>Total: </strong>{{ userInfo.currency }} {{ getTotalForLineItems }}</p>

      </div>

      <div class="notes-section">
        <h2 class="is-size-5">Notes</h2>
        <textarea class="textarea has-fixed-size is-clickable" rows="3" v-model="initialInvoiceData.notes"></textarea>
      </div>

      <div class="terms-section">
        <h2 class="is-size-5">Terms</h2>
        <textarea class="textarea has-fixed-size is-clickable" rows="3" v-model="initialInvoiceData.terms"></textarea>
      </div>

      <div class="button-section">
        <div class="is-grouped">
          <div class="control">
            <button class="button is-small mr-5 is-link">Save Invoice</button>
            <button class="button is-small is-primary">Send Invoice</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.invoice {
  max-width: 850px;
  margin: 10px auto;
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
}

.invoice-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  background-color: #F8F8FA;
  padding: 40px;
}

.input {
  border: none;

  text-align: left;
  padding: 0;
  margin: 0;
  font-size: 15px;

}

.bill-section {
  display: flex;
  margin: 10px;
}

.bill-section p {
  font-size: 14px;

}

.invoice-details input {
  padding: 0;
  margin: 0;
  font-size: 15px;
  background-color: #F8F8FA;
}

.invoice-details .label {
  margin: 0;
  font-size: 15px;
}

.bill-from input {

  text-align: right;
  padding: 0;
  font-size: 14px;
}

.bill-to input {
  text-align: left;
  padding: 0;
  font-size: 14px;
}


.invoice-total {
  margin-top: 20px;
  margin-bottom: 20px;
}

.notes-section,
.button-section {
  text-align: center;
}

/*
.notes-section textarea,
.terms-section textarea {
  border: none;
  text-shadow: none;
  box-shadow: none;
  text-align: center;
}

*/
.terms-section {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.image-selector {
  position: relative;
}

.delete-icon {
  position: absolute;
  top: -15px;
  right: -15px;
}
</style>
