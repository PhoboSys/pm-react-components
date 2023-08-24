import React from 'react'
import PropTypes from 'prop-types'

const LogoLabel = ({ fill }) => (

  <svg width="92" height="30" viewBox="0 0 92 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M68.1905 23.5369V0H72.3503V23.5369H68.1905ZM8.50986 23.9889C10.8963 23.9889 12.9181 23.167 14.5725 21.5231H14.5751C16.2295 19.8767 17.0567 17.8628 17.0567 15.4764C17.0567 13.0899 16.2295 11.0735 14.5751 9.42963C12.9181 7.7858 10.899 6.96389 8.5125 6.96389C6.12604 6.96389 4.10957 7.7858 2.46574 9.42963C0.821915 11.0761 0 13.0899 0 15.4764C0 17.8628 0.821915 19.8767 2.4631 21.5231C4.10957 23.167 6.1234 23.9889 8.50986 23.9889ZM8.50986 19.9269C7.26245 19.9269 6.22647 19.5067 5.39927 18.6689C4.57207 17.8311 4.15714 16.7661 4.15714 15.4764C4.15714 14.1867 4.57207 13.1216 5.39927 12.2839C6.22647 11.4461 7.26509 11.0259 8.50986 11.0259C9.75462 11.0259 10.7985 11.4461 11.6363 12.2839C12.4741 13.1216 12.8943 14.1867 12.8943 15.4764C12.8943 16.7661 12.4741 17.8311 11.6363 18.6689C10.7985 19.5067 9.75727 19.9269 8.50986 19.9269ZM24.1528 10.1811C24.5389 9.15388 25.1776 8.38189 26.0688 7.86771C26.9595 7.35237 27.9558 7.09337 29.0526 7.09337V11.7368C27.784 11.5862 26.6503 11.8451 25.6513 12.5111C24.6523 13.1771 24.1528 14.2845 24.1528 15.8332V23.5396H19.993V7.41579H24.1528V10.1811ZM43.1066 7.41581H47.2664V23.537H43.1066V21.6341C41.8592 23.204 40.107 23.9889 37.85 23.9889C35.5931 23.9889 33.8567 23.167 32.3213 21.5231C30.7831 19.8793 30.0167 17.8628 30.0167 15.4764C30.0167 13.0899 30.7858 11.0761 32.3213 9.42963C33.8567 7.7858 35.7014 6.96389 37.85 6.96389C40.107 6.96389 41.8592 7.7488 43.1066 9.31863V7.41581ZM35.4318 18.7482C36.2696 19.5965 37.3347 20.022 38.6244 20.022C39.9141 20.022 40.9844 19.5992 41.8327 18.7482C42.6811 17.8998 43.1066 16.8084 43.1066 15.4764C43.1066 14.1444 42.6811 13.0529 41.8327 12.2046C40.9844 11.3562 39.9141 10.9307 38.6244 10.9307C37.3347 10.9307 36.2696 11.3562 35.4318 12.2046C34.5941 13.0529 34.1739 14.1444 34.1739 15.4764C34.1739 16.8084 34.5941 17.8998 35.4318 18.7482ZM52.6342 21.539C54.2569 23.1723 56.2839 23.9889 58.7127 23.9889L58.71 23.9915C60.2798 23.9915 61.7096 23.611 62.9993 22.8472C64.289 22.0834 65.2906 21.0686 65.9989 19.8L62.3888 17.736C62.0664 18.402 61.5775 18.9253 60.9221 19.3005C60.2666 19.6758 59.5187 19.8635 58.6809 19.8635C57.4335 19.8635 56.4028 19.4485 55.5862 18.6213C54.7669 17.7941 54.36 16.7661 54.36 15.4764C54.36 14.1867 54.7696 13.1269 55.5862 12.2997C56.4028 11.4725 57.4335 11.0576 58.6809 11.0576C59.4976 11.0576 60.2349 11.2532 60.8903 11.639C61.5458 12.0275 62.0347 12.5534 62.3571 13.2194L65.9355 11.1237C65.2695 9.85513 64.2916 8.84557 63.0019 8.09237C61.7123 7.33917 60.2825 6.96389 58.7127 6.96389C56.2813 6.96389 54.2569 7.78052 52.6342 9.41378C51.0115 11.0497 50.2002 13.0688 50.2002 15.4764C50.2002 17.884 51.0115 19.9057 52.6342 21.539ZM91.1167 7.41577H86.6688L83.0905 18.2487L78.899 7.41577H74.3533L80.963 23.0216C80.5745 24.1183 80.0539 24.9138 79.3985 25.408C78.7404 25.9022 77.855 26.1375 76.7371 26.1163V29.9854C78.8012 30.0911 80.5243 29.6233 81.9118 28.5821C83.2992 27.5408 84.4119 25.8573 85.2496 23.5369L91.1167 7.41577Z" fill={fill} />
  </svg>

)

LogoLabel.propTypes = {
  fill: PropTypes.string,
}

export default React.memo(LogoLabel)
