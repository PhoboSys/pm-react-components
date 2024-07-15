export function getInvitationLink(address) {

  let host = 'app.oracly.io'

  if (window.location.host.includes('localhost')) host = 'localhost:8801'
  else if (window.location.host.includes('staging')) host = 'app.staging.oracly.io'

  return `${location.protocol}//${host}/?invitation=${address}`.toLocaleLowerCase()
  
}