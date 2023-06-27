<script setup>
import HeroTitle from '@/components/HeroTitle.vue'
import LogoutCard from '@/components/LogoutCard.vue'
import DangerZoneCard from '@/components/DangerZoneCard.vue'
import ConnectedAccountsCard from '@/components/ConnectedAccountsCard.vue'
import BankDetailsCard from '@/components/BankDetailsCard.vue'
import EditProfileCard from '@/components/EditProfileCard.vue'
import BillingCard from '@/components/BillingCard.vue'
import PricingCard from '@/components/PricingCard.vue'

</script>

<template>
  <div class="container m-4">
    <HeroTitle title="User Settings" />
    <BillingCard />    
    <EditProfileCard />
    <BankDetailsCard />
    <PricingCard />
    <ConnectedAccountsCard />
    <DangerZoneCard />
    <LogoutCard />
  </div>
</template>

<style></style>
