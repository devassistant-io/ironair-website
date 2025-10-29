// Google Analytics Event Tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track specific conversion events
export const trackConversion = {
  // Phone click tracking
  phoneClick: () => {
    trackEvent('phone_click', 'contact', 'header_phone')
    
    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact')
    }
  },

  // Form submission tracking
  formSubmit: (formType: string) => {
    trackEvent('form_submit', 'lead', formType)
    
    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }

    // LinkedIn Conversion
    if (typeof window !== 'undefined' && (window as any).lintrk) {
      (window as any).lintrk('track', { conversion_id: 'lead_form' })
    }
  },

  // Quote request tracking
  quoteRequest: () => {
    trackEvent('quote_request', 'lead', 'quote_form')
    
    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }
  },

  // Service view tracking
  serviceView: (serviceName: string) => {
    trackEvent('service_view', 'engagement', serviceName)
  },

  // Newsletter signup
  newsletterSignup: () => {
    trackEvent('newsletter_signup', 'engagement', 'footer_newsletter')
  },

  // CTA click tracking
  ctaClick: (ctaLocation: string) => {
    trackEvent('cta_click', 'engagement', ctaLocation)
  },

  // Review click tracking
  reviewClick: () => {
    trackEvent('review_click', 'engagement', 'google_reviews')
  },

  // Scroll depth tracking
  scrollDepth: (percentage: number) => {
    trackEvent('scroll_depth', 'engagement', `${percentage}%`, percentage)
  },
}

// Call tracking
export const trackCallAnalytics = () => {
  // CallRail or similar call tracking service
  if (typeof window !== 'undefined' && (window as any).CallRail) {
    // Initialize call tracking
    (window as any).CallRail.initialize()
  }
}

// Outbound link tracking
export const trackOutboundLink = (url: string) => {
  trackEvent('outbound_link', 'engagement', url)
}

// File download tracking
export const trackDownload = (fileName: string) => {
  trackEvent('file_download', 'engagement', fileName)
}

// Video interaction tracking
export const trackVideo = (action: 'play' | 'pause' | 'complete', videoName: string) => {
  trackEvent(`video_${action}`, 'video', videoName)
}

// Search tracking (if you add site search)
export const trackSearch = (searchTerm: string) => {
  trackEvent('site_search', 'engagement', searchTerm)
}

// Social share tracking
export const trackSocialShare = (platform: string, contentType: string) => {
  trackEvent('social_share', 'engagement', `${platform}_${contentType}`)
}

// Error tracking
export const trackError = (errorMessage: string, errorLocation: string) => {
  trackEvent('error', 'error', `${errorLocation}: ${errorMessage}`)
}

// Time on page tracking
export const trackTimeOnPage = () => {
  if (typeof window === 'undefined') return

  const startTime = Date.now()

  const handleUnload = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000)
    trackEvent('time_on_page', 'engagement', window.location.pathname, timeSpent)
  }

  window.addEventListener('beforeunload', handleUnload)

  return () => {
    window.removeEventListener('beforeunload', handleUnload)
  }
}

