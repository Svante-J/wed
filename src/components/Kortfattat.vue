<template>
  <section id="välkommen" class="info-section">
    <div class="container">
      <div class="content-card">
        <div class="card-header">
          <h2>Frida & Svante – 27 juni 2026</h2>
          <div class="decorative-line"></div>
        </div>

        <div class="card-content">
          <p>
            Efter elva år är det dags att gifta sig! Vi vill gärna att ni är med och firar dagen med
            oss! Efter vigseln blir det middag tillsammans. Vi håller det litet, bara familj och
            närmsta vänner. Inga stora planer - bara en riktigt bra dag tillsammans.
          </p>

          <p class="closing">
            Hoppas ni kan komma!<br />
            <em>Frida och Svante</em>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed
</script>

<style scoped>
.info-section {
  padding: var(--spacing-3xl) 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.content-card {
  background: var(--color-background);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  transition:
    transform var(--transition-normal),
    box-shadow var(--transition-normal);
}

.content-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.card-header {
  background: var(--color-background);
  color: var(--color-text);
  padding: var(--spacing-xl);
  text-align: center;
  border-bottom: 1px solid var(--color-background-light);
}

.card-header h2 {
  margin: 0;
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.decorative-line {
  height: 3px;
  width: 80px;
  background: var(--color-primary);
  margin: var(--spacing-md) auto 0;
  border-radius: var(--border-radius-full);
}

.card-content {
  padding: var(--spacing-xl);
  line-height: 1.8;
}

.card-content p {
  margin-bottom: var(--spacing-lg);
  color: var(--color-text);
  font-size: var(--font-size-base);
}

.card-content p:last-child {
  margin-bottom: 0;
}

.card-content .closing {
  margin-top: var(--spacing-xl);
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-text);
}

.card-content .closing em {
  font-style: italic;
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .info-section {
    padding: var(--spacing-2xl) 0;
  }

  .card-header {
    padding: var(--spacing-lg);
  }

  .card-content {
    padding: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .card-header {
    padding: var(--spacing-md);
  }

  .card-content {
    padding: var(--spacing-md);
  }

  .card-header h2 {
    font-size: var(--font-size-xl);
  }
}
</style>
