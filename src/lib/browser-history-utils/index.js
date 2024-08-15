export function initForceRefreshOption() {

  function forceRefresh(event) {
    console.log({state:event.state})
    if (event?.state?.forceRefresh) {
      console.log('forceRefresh')
      window.location?.reload && window.location?.reload()
    }
  }

  window.addEventListener('popstate', forceRefresh)

  return () => window.removeEventListener('popstate', forceRefresh)
}