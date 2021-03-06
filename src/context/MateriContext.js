import React, {
  useState,
  createContext,
  useContext
} from 'react'
import * as Yup from 'yup'

const MateriContext = createContext()

export const useMateri = () => useContext(MateriContext)

export const MateriProvider = ({ children }) => {
  const [materiId, setMateriId] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  const openModal = () => setIsVisible(true)

  const closeModal = () => {
    setMateriId(null)
    setIsVisible(false)
  }

  const editMateriHandle = (id) => {
    openModal()
    setMateriId(id)
  }

  return (
    <MateriContext.Provider value={{
      isVisible,
      materiId,
      openModal,
      closeModal,
      editMateriHandle,
    }}>
      {children}
    </MateriContext.Provider>
  )
}