import PrimaryModal from './PrimaryModal'
import SecondaryModal from './SecondaryModal'

const modalsByType = {
  primary: PrimaryModal,
  secondary: SecondaryModal,
}

export const getModalByType = (type) => modalsByType[type]
