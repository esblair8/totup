<template>
  <div class="column content is-three-quarters box p-5">
    <h2>Danger Zone</h2>
    <p>Remove account</p>
    <!-- <p>WARNING: This will delete all your data</p> -->
    <button class="button is-small is-danger" @click="removeAccount">Remove account</button>
  </div>
</template>
  
<script setup>

const removeAccount = () => {
  alert('Please email customer support to remove your account. We are working on autmating this process')
}

</script>
  
<style></style>
  