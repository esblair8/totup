<script setup>
import HeroTitle from '@/components/HeroTitle.vue'
import CurrentPlanCard from '@/components/CurrentPlanCard.vue'
import ManageSubscriptionCard from '@/components/ManageSubscriptionCard.vue'
import CancelSubscriptionCard from '@/components/CancelSubscriptionCard.vue'
</script>

<template>
  <div class="container m-4">
    <HeroTitle title="Subscription Details" />
    <CurrentPlanCard />
    <ManageSubscriptionCard />
    <CancelSubscriptionCard />
  </div>
</template>
