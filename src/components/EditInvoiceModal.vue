<template>
  <div class="modal" :class="{ 'is-active': showModalStore.showEditModal }">
    <div class="modal-background" @click="showModalStore.closeModal('editModal')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit Invoice</p>
        <button class="delete" aria-label="close" @click="showModalStore.closeModal('editModal')"></button>
      </header>
      <section class="modal-card-body">

        <form>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" v-model="form.name" />
            </div>
          </div>
          <div class="field">
            <label class="label">Rate</label>
            <div class="control">
              <input class="input" type="number" v-model="form.rate" />
            </div>
          </div>
          <div class="field">
            <label class="label">Hours</label>
            <div class="control">
              <input class="input" type="number" v-model="form.hours" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox is-large">
                <input type="checkbox" v-model="form.paid" />
              </label>
            </div>
          </div>
        </form>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button" @click="showModalStore.closeModal('editModal')">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import useShowModalStore from '@/stores/showModalStore'

const showModalStore = useShowModalStore()

const form = reactive({
  name: '',
  rate: 0,
  hours: 0,
  paid: false,
  status: 'draft'
})

const props = defineProps(['invoice'])
</script>


<style scoped></style>
