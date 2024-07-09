import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import AuthService from '@/shared/api/AuthService/AuthService'
import { routesPaths } from '@/shared/consts/routesPaths'
import { fileToBase64 } from '@/shared/lib/convert'
import { Loader } from '@/shared/ui/loader'
import { CarCardInputs, CarRequestBody } from '@/types/type'
import { CarPreview } from '@/widgets/car-preview'
import { CarSettings, selectColors } from '@/widgets/car-settings'

import { selectPrefilledValues } from '../model/selectors'
import styles from './CreateEditCar.module.scss'
import { FormContextType } from './type'

const { 'form-layout': formLayout, title } = styles

export const FormContext = createContext<FormContextType>(null)

export const CreateEditCarPage = () => {
  const params = useParams()
  const queryClient = useQueryClient()
  const prefilledValues = useSelector(selectPrefilledValues)
  const colors = useSelector(selectColors)
  const navigate = useNavigate()

  const isEditSession = Boolean(params.carId)

  const { isLoading: isLoadingCar, data: car } = useQuery({
    queryKey: ['car', params.carId],
    queryFn: () => AuthService.getCar(params.carId),
    throwOnError: true,
    select: (data) => data.data.data,
    enabled: isEditSession,
  })

  const { isPending: isEditing, mutate: editCar } = useMutation({
    mutationFn: (dataToSend: CarRequestBody) =>
      AuthService.editCar(params.carId, dataToSend),
    onSuccess: async () => {
      toast.success('Успех! Машина отредактирована')
      await queryClient.invalidateQueries({ queryKey: ['car', params.carId] })
    },
    throwOnError: true,
  })

  const { isPending: isCreating, mutate: createCar } = useMutation({
    mutationFn: (dataToSend: CarRequestBody) =>
      AuthService.createCar(dataToSend),
    onSuccess: () => {
      navigate(routesPaths.pathCarList)
      toast.success('Успех! Машина Создана')
    },
    throwOnError: true,
  })

  const { isPending: isDeleting, mutate: deleteCar } = useMutation({
    mutationFn: () => AuthService.deleteCar(params.carId),
    onSuccess: () => {
      navigate(routesPaths.pathCarList)
      toast.success('Успех! Машина удалена')
    },
    throwOnError: true,
  })

  const methods = useForm<CarCardInputs>({
    mode: 'onSubmit',
    defaultValues: isEditSession ? prefilledValues : {},
  })

  const isWorking = isLoadingCar || isEditing || isDeleting || isCreating

  const onSubmit: SubmitHandler<CarCardInputs> = async (data) => {
    const imgBase64 = await fileToBase64(data.thumbnail[0])

    const dataToSend = {
      ...data,
      colors,
      thumbnail: { path: imgBase64, size: data.thumbnail[0].size },
    }

    if (isEditSession) editCar(dataToSend)
    else createCar(dataToSend)
  }

  if (isWorking) return <Loader size="45px" animation="grow" />

  return (
    <FormContext.Provider value={methods}>
      <form className={formLayout} onSubmit={methods.handleSubmit(onSubmit)}>
        <h1 className={title}>Карточка автомобиля</h1>
        <CarPreview car={car} isEditSession={isEditSession} />
        <CarSettings
          car={car}
          isEditSession={isEditSession}
          deleteCar={deleteCar}
        />
      </form>
    </FormContext.Provider>
  )
}
