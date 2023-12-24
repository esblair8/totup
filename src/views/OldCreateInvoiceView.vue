<script setup>
import HeroTitle from '@/components/HeroTitle.vue'
</script>

<template>
  <div class="container content m-4">
    <HeroTitle title="Create New Invoice" />
    <p>Create new or select an old invoice as a template</p>
    <p>Please ensure you have completed your <a href="/settings">profile</a></p>

    <div class="column content is-three-quarters box p-5">
      <h4>Invoice</h4>
      <div class="form">
        <div class="field">
          <label class="label">Parent's Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Full Name" />
          </div>
        </div>
        <div class="field">
          <label class="label">Parent's Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="Email Address" />
          </div>
        </div>
        <div class="field">
          <label class="label">Period</label>
          <div class="control">
            <input class="input" type="email" placeholder="June 2023" />
          </div>
        </div>
      </div>
    </div>

    <div class="column content is-three-quarters box p-5">
      <h4>Line Items</h4>
      <div class="form">
        <div class="field">
          <label class="label">Child's Name</label>
          <input class="input" type="text" placeholder="Name" />
        </div>
        <div class="field">
          <label class="label">Date</label>
          <div class="control">
            <input class="input" type="date" placeholder="Email Address" />
          </div>
        </div>
        <div class="field">
          <label class="label">Hours</label>
          <div class="control">
            <input class="input" type="number" placeholder="Hours" />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-small is-link">Add Another Line Item</button>
          </div>
        </div>
      </div>
    </div>

    <div class="column content is-three-quarters box p-5 mb-5">
      <h4>Review</h4>
      <div class="tiles">
        <h4 class="tile is-6">Invoice Details</h4>
        <h4 class="tile is-6">Line Items</h4>
        <h4 class="tile is-6">Notes</h4>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-small mr-5 is-link">Preview Invoice</button>
          <button class="button is-small is-primary">Send Invoice</button>
        </div>
      </div>
    </div>
  </div>
</template>
