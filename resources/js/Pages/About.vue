<template>
  <AppLayout>
    <div class="about">
      <!-- Header -->
      <header class="about-head">
        <h1 class="about-head__title">
          <span class="about-head__spark" aria-hidden="true">✨</span>
          About Toys Rush
        </h1>
        <p class="about-head__sub">
          Your trusted source for joy, learning, and endless fun!
        </p>
      </header>

      <!-- Mission -->
      <section class="mission">
        <h2 class="mission__title">
          <span class="mission__icon" aria-hidden="true">🎯</span>
          Our Mission
        </h2>
        <p class="mission__text">
          At Toys Rush, we believe that play is the best teacher. Our mission is to bring joy,
          creativity, and learning into every child's life through carefully selected, high-quality
          toys. We're committed to being the go-to destination for parents and gift-givers who want
          the best for the kids they love.
        </p>
      </section>

      <!-- Values heading -->
      <div class="values-head">
        <span class="values-head__icon" aria-hidden="true">💎</span>
        <h2 class="values-head__title">Our Values</h2>
      </div>

      <!-- Values cards -->
      <section class="values">
        <article class="vcard vcard--green">
          <div class="vcard__icon vcard__icon--green" aria-hidden="true">🛡️</div>
          <h3 class="vcard__title vcard__title--green">Safety First</h3>
          <p class="vcard__text">
            Every toy in our collection meets the highest safety standards. Your child's safety is
            our top priority!
          </p>
        </article>

        <article class="vcard vcard--blue">
          <div class="vcard__icon vcard__icon--blue" aria-hidden="true">💡</div>
          <h3 class="vcard__title vcard__title--blue">Learning Through Play</h3>
          <p class="vcard__text">
            We curate toys that spark creativity, imagination, and cognitive development in children.
          </p>
        </article>

        <article class="vcard vcard--pink">
          <div class="vcard__icon vcard__icon--pink" aria-hidden="true">💗</div>
          <h3 class="vcard__title vcard__title--pink">Pure Joy</h3>
          <p class="vcard__text">
            We believe every child deserves to experience the pure happiness that comes from playtime!
          </p>
        </article>
      </section>

      <!-- Why trust -->
      <section class="trust">
        <h2 class="trust__title">
          <span class="trust__heart" aria-hidden="true">💗</span>
          Why Parents Trust Toys Rush
        </h2>

        <ul class="trust__list">
          <li class="trust__item">
            <span class="trust__check" aria-hidden="true">✓</span>
            <span><b>Rigorous Selection:</b> We hand-pick every toy to ensure quality and age-appropriateness</span>
          </li>
          <li class="trust__item">
            <span class="trust__check" aria-hidden="true">✓</span>
            <span><b>Expert Recommendations:</b> Our team of child development specialists help you choose the right toys</span>
          </li>
          <li class="trust__item">
            <span class="trust__check" aria-hidden="true">✓</span>
            <span><b>Safety Compliance:</b> All toys meet international safety standards and regulations</span>
          </li>
          <li class="trust__item">
            <span class="trust__check" aria-hidden="true">✓</span>
            <span><b>Customer Support:</b> We're here to help with any questions about our products</span>
          </li>
          <li class="trust__item">
            <span class="trust__check" aria-hidden="true">✓</span>
            <span><b>Fair Pricing:</b> Great quality toys at prices that work for families</span>
          </li>
        </ul>
      </section>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";

export default {
  name: "About",
  components: { AppLayout },
};
</script>
