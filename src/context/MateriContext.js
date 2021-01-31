import React, {
  useState,
  createContext,
  useContext
} from 'react'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { showMessage } from 'react-native-flash-message'

import { colors } from '../utils'
import { createMateri } from '../redux/actions/materi'

const MateriContext = createContext()

export const useMateri = () => useContext(MateriContext)

export const MateriProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [materiId, setMateriId] = useState(null)
  const dispatch = useDispatch()

  const validationSchema = Yup.object({
    kataBicara: Yup.string()
      .required('Wajib Diisi')
      .trim('Wajib Diisi')
  })

  const openModal = () => setIsVisible(true)

  const closeModal = () => setIsVisible(false)

  const editMateriHandle = (id) => {
    openModal()
    setMateriId(id)
  }

  return (
    <MateriContext.Provider value={{
      isVisible,
      materiId,
      validationSchema,
      openModal,
      editMateriHandle,
      closeModal
    }}>
      {children}
    </MateriContext.Provider>
  )
}