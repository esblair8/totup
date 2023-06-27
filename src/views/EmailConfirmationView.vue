<script>

</script>

<template>
  <div class="hero-body">
    <div class="container mt-6">
      <div class="columns is-centered ">
        <div class="column is-4-desktop is-4-widescreen box">
          <h4 class="title is-4">Thanks for registering!</h4>
          <p v-if="$route.query.email">
            Please confirm your email address by clicking the link sent to:
            {{ $route.query.email }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
