import mixpanel from 'mixpanel-browser'

export default defineNuxtPlugin(() => {
  mixpanel.init('6bbeeed14e7e95eea3ab757dbdb0f1f6', {
    autocapture: true,
    record_sessions_percent: 100,
  })

  // Identify anonymous visitor so they appear on the Users page
  const distinctId = mixpanel.get_distinct_id()
  mixpanel.identify(distinctId)
  mixpanel.people.set_once({
    '$first_seen': new Date().toISOString(),
  })
  mixpanel.people.set({
    '$last_seen': new Date().toISOString(),
  })

  return {
    provide: {
      mixpanel,
    },
  }
})
