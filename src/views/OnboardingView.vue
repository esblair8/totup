<script setup>
import HeroTitle from '@/components/HeroTitle.vue'
import FamilyOnboardingForm from '@/components/FamilyOnboardingForm.vue'
</script>

<template>
  <div class="container m-3">
    <HeroTitle title="Child Onboarding" />
    <FamilyOnboardingForm />
    <Steper />
  </div>
</template>

<style>
.mt {
  margin-top: 4rem;
}
</style>
