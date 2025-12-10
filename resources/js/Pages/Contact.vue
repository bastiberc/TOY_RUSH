<template>
  <AppLayout>
    <div class="contact">
      <header class="contact-head">
        <h1 class="contact-head__title">
          <span class="contact-head__icon" aria-hidden="true">📞</span>
          Get In Touch
        </h1>
        <p class="contact-head__sub">
          Have questions? We'd love to hear from you! Fill out the form below and we'll get back to you soon.
        </p>
      </header>

      <section class="contact-card" aria-label="Contact form">
        <form class="contact-form" @submit.prevent="submit" novalidate>
          <!-- Name -->
          <div class="field">
            <label class="field__label" for="name">Your Name <span class="req">*</span></label>
            <input
              id="name"
              class="field__input"
              :class="{ 'is-invalid': touched.name && errors.name }"
              type="text"
              v-model.trim="form.name"
              placeholder="Enter your name"
              @blur="touched.name = true"
              @input="touched.name = true"
              autocomplete="name"
            />
            <p v-if="touched.name && errors.name" class="field__error">{{ errors.name }}</p>
          </div>

          <!-- Email -->
          <div class="field">
            <label class="field__label" for="email">Your Email <span class="req">*</span></label>
            <input
              id="email"
              class="field__input"
              :class="{ 'is-invalid': touched.email && errors.email }"
              type="email"
              v-model.trim="form.email"
              placeholder="Enter your email"
              @blur="touched.email = true"
              @input="touched.email = true"
              autocomplete="email"
            />
            <p v-if="touched.email && errors.email" class="field__error">{{ errors.email }}</p>
          </div>

          <!-- Message -->
          <div class="field">
            <label class="field__label" for="message">Your Message <span class="req">*</span></label>
            <textarea
              id="message"
              class="field__textarea"
              :class="{ 'is-invalid': touched.message && errors.message }"
              v-model.trim="form.message"
              placeholder="Tell us what's on your mind..."
              @blur="touched.message = true"
              @input="touched.message = true"
            ></textarea>

            <div class="field__row">
              <span class="field__hint">Min 10 characters</span>
              <span class="field__count" :class="{ 'bad': messageLen > 0 && messageLen < 10 }">
                {{ messageLen }}/10
              </span>
            </div>

            <p v-if="touched.message && errors.message" class="field__error">{{ errors.message }}</p>
          </div>

          <button class="send" type="submit" :disabled="isSubmitting || !isValid">
            <span aria-hidden="true">✉️</span>
            {{ isSubmitting ? "Sending..." : "Send Message" }}
          </button>

          <p v-if="success" class="ok">Message sent! We’ll reply soon ✅</p>
        </form>
      </section>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default {
  name: "Contact",
  components: { AppLayout },
  data() {
    return {
      isSubmitting: false,
      success: false,
      form: {
        name: "",
        email: "",
        message: "",
      },
      touched: {
        name: false,
        email: false,
        message: false,
      },
    };
  },
  computed: {
    messageLen() {
      return (this.form.message || "").length;
    },
    errors() {
      const e = {};

      // Name: required, min 2 chars
      if (!this.form.name) e.name = "Name is required.";
      else if (this.form.name.length < 2) e.name = "Name must be at least 2 characters.";

      // Email: required, valid format
      if (!this.form.email) e.email = "Email is required.";
      else if (!emailRegex.test(this.form.email)) e.email = "Please enter a valid email address.";

      // Message: required, min 10 chars
      if (!this.form.message) e.message = "Message is required.";
      else if (this.form.message.length < 10) e.message = "Message must be at least 10 characters.";

      return e;
    },
    isValid() {
      return Object.keys(this.errors).length === 0;
    },
  },
  methods: {
    touchAll() {
      this.touched.name = true;
      this.touched.email = true;
      this.touched.message = true;
    },
    reset() {
      this.form = { name: "", email: "", message: "" };
      this.touched = { name: false, email: false, message: false };
    },
    async submit() {
      this.touchAll();

      if (!this.isValid) return;

      this.isSubmitting = true;
      this.success = false;

      try {
        // TODO: replace with your real request (axios/fetch)
        console.log("Contact submit:", this.form);

        this.success = true;
        this.reset();
      } finally {
        this.isSubmitting = false;
        setTimeout(() => (this.success = false), 2500);
      }
    },
  },
};
</script>
