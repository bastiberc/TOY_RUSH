<template>
  <footer class="tr-footer">
    <div class="tr-footer__inner">
      <!-- Brand / tagline -->
      <div class="tr-footer__brand">
        <div class="tr-footer__logoRow">
          <span class="tr-footer__logo" aria-hidden="true">🎮</span>
          <span class="tr-footer__name">Toys Rush</span>
        </div>
        <p class="tr-footer__tagline">Bringing joy and wonder to every childhood!</p>
      </div>

      <!-- Quick Links -->
      <div class="tr-footer__col">
        <h4 class="tr-footer__title">Quick Links</h4>
        <ul class="tr-footer__list">
          <li><a class="tr-footer__link" href="/shop">Shop</a></li>
          <li><a class="tr-footer__link" href="/about">About Us</a></li>
          <li><a class="tr-footer__link" href="/contact">Contact</a></li>
          <li><a class="tr-footer__link" href="/privacy">Privacy</a></li>
        </ul>
      </div>

      <!-- Support -->
      <div class="tr-footer__col">
        <h4 class="tr-footer__title">Support</h4>
        <ul class="tr-footer__list">
          <li><a class="tr-footer__link" href="/faq">FAQ</a></li>
          <li><a class="tr-footer__link" href="/shipping">Shipping Info</a></li>
          <li><a class="tr-footer__link" href="/returns">Returns</a></li>
          <li><a class="tr-footer__link" href="/help">Help Center</a></li>
        </ul>
      </div>

      <!-- Social -->
      <div class="tr-footer__col tr-footer__socialCol">
        <h4 class="tr-footer__title">Follow Us</h4>
        <div class="tr-footer__social">
          <a class="tr-footer__iconBtn" href="#" aria-label="Facebook" title="Facebook">
            <!-- Facebook icon -->
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.7V4.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V11H7.3v3h2.5v8h3.7Z"
              />
            </svg>
          </a>

          <a class="tr-footer__iconBtn" href="#" aria-label="Instagram" title="Instagram">
            <!-- Instagram icon -->
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.2-.9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
              />
            </svg>
          </a>

          <a class="tr-footer__iconBtn" href="#" aria-label="Twitter" title="Twitter">
            <!-- X/Twitter icon (simple bird-ish) -->
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20.8 7.2c-.6.3-1.3.5-2 .6.7-.4 1.2-1.1 1.5-1.9-.7.4-1.5.7-2.3.9A3.3 3.3 0 0 0 12.4 9c0 .3 0 .6.1.8-2.7-.1-5.1-1.4-6.7-3.5-.3.6-.4 1.2-.4 1.9 0 1.1.6 2.1 1.5 2.7-.6 0-1.1-.2-1.6-.4v.1c0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.4 1.7 2.4 3.2 2.4A6.7 6.7 0 0 1 4.8 18c-.3 0-.6 0-.8-.1A9.4 9.4 0 0 0 9.1 19.5c6 0 9.3-5 9.3-9.3v-.4c.6-.5 1.2-1.1 1.6-1.7Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="tr-footer__divider" aria-hidden="true"></div>

    <div class="tr-footer__bottom">
      <p class="tr-footer__made">
        Made with <span aria-hidden="true">♡</span> for kids everywhere <span aria-hidden="true">🌍</span>
      </p>
      <p class="tr-footer__copy">© 2025 Toys Rush. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
