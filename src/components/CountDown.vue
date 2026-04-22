<template>
  <div class="countdown-container">
    <div class="countdown-grid">
      <!-- Months -->
      <div class="time-unit">
        <div
          class="time-value"
          :class="{ 'animate-pulse': timeLeft.months !== prevTimeLeft.months }"
        >
          {{ formatNumber(timeLeft.months) }}
        </div>
        <div class="time-label">Månader</div>
      </div>

      <!-- Days -->
      <div class="time-unit">
        <div class="time-value" :class="{ 'animate-pulse': timeLeft.days !== prevTimeLeft.days }">
          {{ formatNumber(timeLeft.days) }}
        </div>
        <div class="time-label">Dagar</div>
      </div>

      <!-- Hours -->
      <div class="time-unit">
        <div class="time-value" :class="{ 'animate-pulse': timeLeft.hours !== prevTimeLeft.hours }">
          {{ formatNumber(timeLeft.hours) }}
        </div>
        <div class="time-label">Timmar</div>
      </div>

      <!-- Minutes -->
      <div class="time-unit">
        <div
          class="time-value"
          :class="{ 'animate-pulse': timeLeft.minutes !== prevTimeLeft.minutes }"
        >
          {{ formatNumber(timeLeft.minutes) }}
        </div>
        <div class="time-label">Minuter</div>
      </div>

      <!-- Seconds -->
      <div class="time-unit">
        <div
          class="time-value animate-tick"
          :class="{ 'animate-pulse': timeLeft.seconds !== prevTimeLeft.seconds }"
        >
          {{ formatNumber(timeLeft.seconds) }}
        </div>
        <div class="time-label">Sekunder</div>
      </div>
    </div>

    <!-- Event reached message -->
    <div v-if="eventReached" class="event-message">🎉 Eventet har startat! 🎉</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from 'vue'

// Target date: October 30, 2025 at 4:00 PM
const targetDate = new Date('2026-10-30T16:00:00')

const timeLeft = reactive({
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

const prevTimeLeft = reactive({
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

const eventReached = ref(false)
let intervalId: number | null = null

const calculateTimeLeft = () => {
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()

  if (difference > 0) {
    // Store previous values for animation
    Object.assign(prevTimeLeft, { ...timeLeft })

    // Calculate time units
    const totalSeconds = Math.floor(difference / 1000)
    const totalMinutes = Math.floor(totalSeconds / 60)
    const totalHours = Math.floor(totalMinutes / 60)
    const totalDays = Math.floor(totalHours / 24)

    // Calculate months (approximate)
    const totalMonths = Math.floor(totalDays / 30)

    timeLeft.months = totalMonths
    timeLeft.days = totalDays - totalMonths * 30
    timeLeft.hours = totalHours % 24
    timeLeft.minutes = totalMinutes % 60
    timeLeft.seconds = totalSeconds % 60

    eventReached.value = false
  } else {
    // Event has passed
    timeLeft.months = 0
    timeLeft.days = 0
    timeLeft.hours = 0
    timeLeft.minutes = 0
    timeLeft.seconds = 0
    eventReached.value = true
  }
}

const formatNumber = (num: number): string => {
  return num.toString().padStart(2, '0')
}

onMounted(() => {
  calculateTimeLeft()
  intervalId = window.setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.countdown-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
}

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-lg);
  max-width: 600px;
  width: 100%;
}

.time-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.time-unit:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.time-value {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-white);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin-bottom: var(--spacing-sm);
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.time-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-white);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.event-message {
  background: linear-gradient(45deg, var(--color-success), var(--color-warning));
  color: var(--color-text-white);
  padding: var(--spacing-lg) var(--spacing-xl);
  border-radius: var(--border-radius-xl);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  animation: celebration 2s ease-in-out infinite alternate;
}

/* Animations */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
    color: var(--color-warning);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes tick {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes celebration {
  0% {
    transform: scale(1) rotate(-1deg);
  }
  100% {
    transform: scale(1.05) rotate(1deg);
  }
}

.animate-pulse {
  animation: pulse 0.6s ease-in-out;
}

.animate-tick {
  animation: tick 1s ease-in-out infinite;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .countdown-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
  }

  .time-unit {
    padding: var(--spacing-md);
  }

  .time-value {
    font-size: var(--font-size-2xl);
  }

  .time-label {
    font-size: var(--font-size-xs);
  }
}

@media (max-width: 480px) {
  .countdown-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }

  .time-unit {
    padding: var(--spacing-sm);
  }

  .time-value {
    font-size: var(--font-size-xl);
  }

  .time-label {
    font-size: var(--font-size-xs);
  }
}
</style>
