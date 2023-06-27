<script setup>
import HeroTitle from '@/components/HeroTitle.vue'
</script>

<template>
  <div class="container content m-4">
    <HeroTitle title="Create New Invoice" />
    <p>Create new or select and old invoice as a template</p>
    <p>Please ensure you have completed your <a href="/settings">profile</a></p>

    <div class="column content is-three-quarters box p-5">
      <div class="form">

        <div class="field">
          <label class="label">Childs Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Full Name">
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="Email Address">
          </div>
        </div>
        <div class="field">
          <label class="label">Address</label>
          <div class="control">
            <input class="input" type="email" placeholder="1 Main Street">
          </div>
        </div>
        <div class="field">
          <label class="label">Post Code</label>
          <div class="control">
            <input class="input" type="email" placeholder="Post code">
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-small is-link">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
