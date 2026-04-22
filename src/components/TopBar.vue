<template>
  <nav class="top-bar">
    <div class="container">
      <!-- Navigation Links -->
      <ul class="nav-links">
        <li><a href="#hem" @click="scrollToSection('hem')">Hem</a></li>
        <li><a href="#välkommen" @click="scrollToSection('välkommen')">Välkommen</a></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: mobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
        <a href="#hem" @click="scrollToSection('hem')">Hem</a>
        <a href="#välkommen" @click="scrollToSection('välkommen')">Välkommen</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  // Close mobile menu after clicking
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
.top-bar {
  background: var(--color-background);
  box-shadow: var(--shadow-md);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--spacing-sm) 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand h1 {
  margin: 0;
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: var(--color-text);
  font-weight: 400;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--spacing-xl);
}

.nav-links a {
  text-decoration: none;
  color: var(--color-text-light);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-lg);
  transition: color var(--transition-fast);
  cursor: pointer;
}

.nav-links a:hover {
  color: var(--color-primary);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
  gap: 4px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: var(--color-text);
  transition: all var(--transition-normal);
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-background);
  box-shadow: var(--shadow-md);
  flex-direction: column;
  padding: var(--spacing-md);
}

.mobile-menu.open {
  display: flex;
}

.mobile-menu a {
  text-decoration: none;
  color: var(--color-text-light);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-lg);
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--color-background-light);
  cursor: pointer;
  transition: color var(--transition-fast);
}

.mobile-menu a:hover {
  color: var(--color-primary);
}

.mobile-menu a:last-child {
  border-bottom: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .brand h1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .brand h1 {
    font-size: 1.75rem;
  }

  .container {
    padding: 0 var(--spacing-sm);
  }
}
</style>
