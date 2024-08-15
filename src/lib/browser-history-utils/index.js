export function initForceRefreshOption() {

  function forceRefresh(event) {
    if (event?.state?.forceRefresh) {
      window.location?.reload && window.location?.reload()
    }
  }

  window.addEventListener('popstate', forceRefresh)

  return () => window.removeEventListener('popstate', forceRefresh)
}