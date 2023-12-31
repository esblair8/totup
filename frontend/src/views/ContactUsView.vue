<script setup>
import { ref } from 'vue'
import DOMPurify from 'dompurify'

const subject = ref('')
const message = ref('')
const submitted = ref(false)

const submitForm = () => {
  const sanitizedSubject = DOMPurify.sanitize(subject.value)
  const sanitizedMessage = DOMPurify.sanitize(message.value)

  const data = {
    subject: sanitizedSubject,
    message: sanitizedMessage
  }

  submitted.value = true
  //send to backend
}
</script>

<template>
  <div class="hero-body">
    <div class="container mt-6">
      <div class="columns is-centered">
        <div class="column is-4-desktop is-4-widescreen box">
          <h1 class="title is-1">Contact Us</h1>
          <div class="contact-us">
            <div v-if="!submitted">
              <form>
                <div class="field">
                  <label class="label">Subject</label>
                  <div class="control">
                    <input class="input" type="text" v-model="subject" />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea class="textarea" v-model="message"></textarea>
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <button class="button mr-2 is-danger" @click.prevent="$router.go(-1)">
                      Go Back
                    </button>
                    <button
                      class="button ml-2 is-pulled-right is-primary"
                      @click.prevent="submitForm"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div v-else>
              <p>
                Thanks for getting in contact. A member of our team will get back to you as soon as
                possible.
              </p>
              <button class="button is-primary mt-5" @click="$router.push('/')" type="submit">
                Go Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contact-us {
  max-width: 500px;
  margin: 0 auto;
}

.contact-us p {
  margin-top: 20px;
}
</style>
