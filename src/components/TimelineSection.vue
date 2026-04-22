<template>
  <section class="timeline-section" aria-labelledby="tidslinje-rubrik">
    <div class="container">
      <div class="timeline-card">
        <div class="timeline-header">
          <h2 id="tidslinje-rubrik">Tidslinje</h2>
        </div>

        <ol class="timeline-list">
          <li v-for="item in timelineItems" :key="item.title" class="timeline-item">
            <div class="timeline-dot" aria-hidden="true"></div>
            <div class="timeline-content">
              <p class="timeline-time" v-if="item.time">{{ item.time }}</p>
              <p class="timeline-title">{{ item.title }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type TimelineItem = {
  time?: string
  title: string
}

const timelineItems: TimelineItem[] = [
  {
    time: '14:00',
    title: 'Vigsel Kockholmen västra Rossö',
  },
  {
    time: '16:00',
    title: 'Trädgårdsmingel och Antipaso Folkestad 2',
  },
  {
    time: '18:00',
    title: 'Middag',
  },
  {
    time: '19:00',
    title: 'Tårta',
  },
  {
    title: 'Lek och dans',
  },
]
</script>

<style scoped>
.timeline-section {
  padding: var(--spacing-3xl) 0;
  background: linear-gradient(180deg, #ffffff 0%, #f9f5ec 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.timeline-card {
  background: var(--color-background);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}

.timeline-header {
  padding: var(--spacing-xl);
  border-bottom: 1px solid var(--color-background-light);
  text-align: center;
}

.timeline-header h2 {
  margin-bottom: var(--spacing-sm);
}

.timeline-header p {
  margin: 0;
  color: var(--color-text-light);
}

.timeline-list {
  list-style: none;
  padding: var(--spacing-xl);
  margin: 0;
}

.timeline-item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: var(--spacing-md);
  position: relative;
  padding-bottom: var(--spacing-lg);
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 11px;
  top: 24px;
  width: 2px;
  height: calc(100% - 12px);
  background: color-mix(in srgb, var(--color-primary) 35%, white);
}

.timeline-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--color-primary);
  box-shadow: 0 0 0 6px color-mix(in srgb, var(--color-primary) 20%, white);
}

.timeline-content {
  background: #fffdf8;
  border: 1px solid #f2ead6;
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
}

.timeline-time {
  margin: 0 0 var(--spacing-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-dark);
}

.timeline-title {
  margin: 0;
  color: var(--color-text);
}

@media (max-width: 768px) {
  .timeline-section {
    padding: var(--spacing-2xl) 0;
  }

  .timeline-header,
  .timeline-list {
    padding: var(--spacing-lg);
  }
}
</style>
