<template>
  <section id="hem" class="hero-section">
    <div class="hero-image-container">
      <img src="/Designer%20(4).png" alt="Frida och Svante" class="hero-image" />
    </div>
    <div class="hero-content">
      <div class="hero-text">
        <div class="names-container">
          <div class="name">Frida</div>
          <div class="ampersand">
            <!-- <span class="ornament">✦</span> -->
            <span class="symbol">&</span>
            <!-- <span class="ornament">✦</span> -->
          </div>
          <div class="name">Svante</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
//import CountDown from './CountDown.vue'
// No additional logic needed for now
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.hero-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-image-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 2;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--color-text-white);
  padding: var(--spacing-xl);
  padding-left: 50px;

  border-radius: var(--border-radius-lg);
  /* backdrop-filter: blur(1px); */
}

.names-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-bottom: var(--spacing-lg);
}

.name {
  font-family: 'Great Vibes', cursive;
  font-size: 5rem;
  font-weight: 400;
  color: var(--color-text-white);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
  line-height: 0.8;
  animation: fadeInUp 1s ease-out;
}

.ampersand {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin: -0.5rem 0;
}

.ampersand .symbol {
  font-family: 'Great Vibes', cursive;
  font-size: 3.5rem;
  color: var(--color-text-white);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
}

.ampersand .ornament {
  font-size: 2rem;
  color: var(--color-text-white);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes sparkle {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

.hero-text p {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-light);
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-section {
    height: 100vh; /* Still full height on mobile */
    justify-content: center;
  }

  .hero-image {
    object-fit: cover; /* Maintain cover behavior */
    object-position: center;
  }

  .name {
    font-size: 3.5rem;
  }

  .ampersand .symbol {
    font-size: 2.5rem;
  }

  .ampersand .ornament {
    font-size: 1.5rem;
  }

  .hero-text p {
    font-size: var(--font-size-lg);
  }

  .hero-content {
    padding: var(--spacing-lg);
    padding-left: var(--spacing-lg);
    margin: 0 var(--spacing-md);
    text-align: center;
  }

  .names-container {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .name {
    font-size: 2.5rem;
  }

  .ampersand .symbol {
    font-size: 2rem;
  }

  .ampersand .ornament {
    font-size: 1.2rem;
  }

  .hero-text p {
    font-size: var(--font-size-base);
  }

  .hero-content {
    padding: var(--spacing-md);
    margin: 0 var(--spacing-sm);
  }
}

/* Ensure it works well with fixed top bar */
@media (min-width: 769px) {
  .hero-section {
    margin-top: 0; /* Adjust if needed based on TopBar height */
  }
}
</style>
