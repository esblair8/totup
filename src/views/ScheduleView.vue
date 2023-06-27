<script setup>
import { ref } from 'vue'
import HeroTitle from "@/components/HeroTitle.vue"

const headers = [
  'Name',
  'Contract',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'Total Hours',
  'Actions'
]

const hideWeekend = ref(false)

const getTagColor = (tag) => {
  switch (tag) {
    case 'draft':
      return 'is-grey'
    case 'sent':
      return 'is-info'
    case 'signed':
      return 'is-success'
  }
}
const schedules = ref([
  {
    id: 1,
    name: 'John Doe',
    contactStatus: 'draft',
    monday: '8',
    tuesday: '8',
    wednesday: '8',
    thursday: '8',
    friday: '8',
    saturday: '0',
    sunday: '0',
    total: '40'
  },
  {
    id: 2,
    name: 'Jane Smith',
    contactStatus: 'sent',
    monday: '8',
    tuesday: '',
    wednesday: '8',
    thursday: '8',
    friday: '8',
    saturday: '',
    sunday: '',
    total: '32'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    contactStatus: 'signed',
    monday: '8',
    tuesday: '3',
    wednesday: '4',
    thursday: '',
    friday: '8',
    saturday: '',
    sunday: '',
    total: '23'

  },
  {
    id: 4,
    name: 'Sarah Williams',
    contactStatus: 'draft',
    monday: '',
    tuesday: '',
    wednesday: '4',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',
    total: '4'
  },
  {
    id: 5,
    name: 'David Brown',
    contactStatus: 'sent',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '8',
    sunday: '4',
    total: '12',
  }

])
</script>

<template>
  <div class="container m-3">

    <HeroTitle title="Weekly Schedule" />

    <div class="">
      <div class="field buttons">
        <input class="input mb-2 mr-2 is-6 is-small" type="text" placeholder="Filter by name"> 
        <button
          class="button is-inverted is-small is-link"
          @click.prevent="hideWeekend = !hideWeekend">
          {{ hideWeekend? 'Show Weekend' : 'Hide Weekend'}}
        </button>
      </div>

      <table class="table is-hoverable">
        <thead>
          <tr>
            <th class="has-text-centered">Name</th>
            <th class="has-text-centered">Contract</th>
            <th class="has-text-centered">Monday</th>
            <th class="has-text-centered">Tuesday</th>
            <th class="has-text-centered">Wednesday</th>
            <th class="has-text-centered">Thursday</th>
            <th class="has-text-centered">Friday</th>
            <th class="has-text-centered" v-if="!hideWeekend">Saturday</th>
            <th class="has-text-centered" v-if="!hideWeekend">Sunday</th>
            <th class="has-text-centered">Total Hours</th>
            <th class="has-text-centered">Actions</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="schedule in schedules" :key="schedule.id" class="">
            <td class="has-text-centered">{{ schedule.name }}</td>
            <td class="has-text-centered"><span :class="getTagColor(schedule.contactStatus)" class="tag is-rounded">{{
            schedule.contactStatus }}</span></td>
            <td class="has-text-centered"><span v-if="schedule.monday" class="tag is-medium is-light is-link">{{
              schedule.monday }}</span></td>
            <td class="has-text-centered"><span v-if="schedule.tuesday" class="tag is-medium  is-light is-link">{{
              schedule.tuesday }}</span></td>
            <td class="has-text-centered"><span v-if="schedule.wednesday" class="tag is-medium is-light is-link">{{
              schedule.wednesday }}</span>
            </td>
            <td class="has-text-centered"><span v-if="schedule.thursday" class="tag is-medium is-light is-link">{{
              schedule.thursday }}</span></td>
            <td class="has-text-centered"><span v-if="schedule.friday" class="tag is-medium is-light is-link">{{
              schedule.friday }}</span></td>
            <td class="has-text-centered" v-if="!hideWeekend"><span v-if="schedule.saturday" class="tag is-medium is-light is-link">{{
              schedule.saturday }}</span></td>
            <td class="has-text-centered"  v-if="!hideWeekend"><span v-if="schedule.sunday" class="tag is-medium is-light is-link">{{
              schedule.sunday }}</span></td>
            <td class="has-text-centered" ><span v-if="schedule.total" class="tag is-medium is-light is-primary">{{
              schedule.total }}</span></td>
            <td class="has-text-centered">
              <font-awesome-icon class="mx-1 is-clickable" icon="pen-to-square"  title="Edit"/>
              <font-awesome-icon class="mx-1 is-clickable" icon="file-contract" title="View Contract"/>
              
              <font-awesome-icon class="mx-1 is-clickable" icon="info"  title="View other info"/>
              <font-awesome-icon class="mx-1 is-clickable" icon="box-archive"  title="Archive data associated with child"/>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.input {
  min-width: 200px;
  max-width: 400px;
}
</style>