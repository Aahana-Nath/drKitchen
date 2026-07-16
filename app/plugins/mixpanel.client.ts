import mixpanel from 'mixpanel-browser'

export default defineNuxtPlugin(() => {
  mixpanel.init('6bbeeed14e7e95eea3ab757dbdb0f1f6', {
    autocapture: true,
    record_sessions_percent: 100,
  })

  return {
    provide: {
      mixpanel,
    },
  }
})
