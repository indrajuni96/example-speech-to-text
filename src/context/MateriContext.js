import React, {
  useState,
  createContext,
  useContext
} from 'react'
import * as Yup from 'yup'
import { Keyboard } from 'react-native'
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

  const initialValues = {
    kataBicara: ''
  }

  const validationSchema = Yup.object({
    kataBicara: Yup.string()
      .required('Wajib Diisi')
      .trim('Wajib Diisi')
  })

  const onSubmit = async (values, { resetForm }) => {
    Keyboard.dismiss()

    try {
      await dispatch(createMateri(values))
      resetForm()

      showMessage({
        message: 'Materi success created',
        type: "default",
        backgroundColor: colors.greenDark
      })
    } catch (error) {
      showMessage({
        message: 'Materi failed created!',
        type: "default",
        backgroundColor: colors.redDark
      })
    }
    closeModal()
  }

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
      initialValues,
      validationSchema,
      openModal,
      editMateriHandle,
      closeModal,
      onSubmit
    }}>
      {children}
    </MateriContext.Provider>
  )
}