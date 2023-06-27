<template>

<nav class="breadcrumb has-arrow-separator" 
:class="{'is-small': isSmallScreen,'is-centered': isSmallScreen}">
  <ul>
    <br>
    <li :class="{ 'is-active': data.currentStep === 1 }">
      <a @click="data.currentStep = 1">
        <span>Child Details</span>
      </a>
    </li>
    <li :class="{ 'is-active': data.currentStep === 2 }">
      <a @click="data.currentStep = 2">
        <span>Review</span>
      </a>
    </li>
  </ul>
</nav>

<div class="column is-three-quarters">
  <div class="step-form">
    <div class="step-section" v-show="data.currentStep === 1">
      <div class="box"><ChildDetailsForm/></div>
      <div class="box"><ContractForm/></div>
      <div class="box"><OtherInformationForm/></div>
    </div>

    <div class="step-section" v-show="data.currentStep === 2">
      <div><ReviewOnboardingInfo /></div>
    </div>

    <div class="form-nav is-centered">
      <button class="button is-small is-link" :disabled="data.currentStep === 1" @click="prevStep">Back</button>
      <button class="button is-small is-link" :disabled="data.currentStep === 2" @click="nextStep">Review</button>
    </div>
  </div>
</div>
</template>

<script setup>
import { reactive } from 'vue';
import { useMediaQuery } from '@vueuse/core'
import ChildDetailsForm from './ChildDetailsForm.vue';
import ContractForm from './ContractForm.vue';
import OtherInformationForm from './OtherInformationForm.vue';
import ReviewOnboardingInfo from './ReviewOnboardingInfo.vue';

const isSmallScreen = useMediaQuery('(max-width: 508px)');

const data = reactive({
  currentStep: 1,
  
})
function nextStep() {
  data.currentStep++;
}
function prevStep() {
  data.currentStep--;
}
function submitForm() {
  // Handle form submission logic here
}


</script>

<style>
.step-form {
  margin: 0 auto;
  padding: 20px;
}

.step-form .form-nav {
  display: flex;
  justify-content: space-evenly;
  margin-top: 3rem;
}

.is-circular {
  border-radius: 50%;
}
</style>