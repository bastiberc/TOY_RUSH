<template>
  <AppLayout>
    <div class="home">
      <section class="home-hero">
        <h1 class="home-hero__title">
          <span class="home-hero__logo" aria-hidden="true">🧸</span>
          <span class="home-hero__title--orange">Welcome</span>
          <span class="home-hero__title--muted"> to </span>
          <span class="home-hero__title--muted">Toys</span>
          <span class="home-hero__title--blue"> Rush!</span>
        </h1>

        <p class="home-hero__subtitle">
          Where Fun Meets Adventure! <span aria-hidden="true">🚀</span>
        </p>

        <p class="home-hero__desc">
          Discover the most exciting toys for kids of all ages. From action figures to<br />
          puzzles, we have it all!
        </p>

        <div class="home-hero__actions">
          <a class="home-btn home-btn--primary" href="/shop">
            <span class="home-btn__icon" aria-hidden="true">🛍️</span>
            Shop Now
          </a>

          <a class="home-btn home-btn--outline" href="/about">
            <span class="home-btn__icon" aria-hidden="true">📖</span>
            Learn More
          </a>
        </div>
      </section>

      <section class="home-features" aria-label="Highlights">
        <article class="home-card home-card--gold">
          <div class="home-card__icon" aria-hidden="true">✨</div>
          <h3 class="home-card__title home-card__title--purple">Premium Quality</h3>
          <p class="home-card__text">All toys are tested for safety and quality!</p>
        </article>

        <article class="home-card home-card--green">
          <div class="home-card__icon" aria-hidden="true">⚡</div>
          <h3 class="home-card__title home-card__title--blue">Fast Delivery</h3>
          <p class="home-card__text">Get your toys quickly and safely delivered!</p>
        </article>

        <article class="home-card home-card--pink">
          <div class="home-card__icon" aria-hidden="true">💗</div>
          <h3 class="home-card__title home-card__title--pink">Love Guaranteed</h3>
          <p class="home-card__text">We stand behind every toy we sell!</p>
        </article>
      </section>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "../Layouts/AppLayout.vue";

export default {
  name: "Home",
  components: { AppLayout },
};
</script>
