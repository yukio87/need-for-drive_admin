import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { InputErrMsg } from '@/entities/input-err-msg'
import AuthService from '@/shared/api/AuthService/AuthService'
import { Icon } from '@/shared/ui/icon'
import { Input } from '@/shared/ui/input'
import { Loader } from '@/shared/ui/loader'
import { CategoryId } from '@/types/type'

import { setCategoryId } from '../../../model/slice'
import { InputAddColor } from '../InputAddColor/InputAddColor'
import { iconStyles } from './consts/style'
import styles from './InputGroup.module.scss'
import { InputGroupProps } from './type'

const {
  'input-group': inputGroup,
  'input-container': inputContainer,
  label,
  'icon-wrapper': iconWrapper,
  typehead,
  'typehead-err': typeheadErr,
} = styles

export const InputGroup: FC<InputGroupProps> = ({
  car,
  register,
  control,
  errors,
}) => {
  const dispatch = useDispatch()

  const { isLoading: isLoadingCategories, data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => AuthService.getCategories(),
    select: (data) => data.data.data,
    throwOnError: true,
  })

  const handleChangeCategory = (s: CategoryId[]) => {
    dispatch(setCategoryId(s[0]))
  }

  return (
    <div className={inputGroup}>
      <div className={inputContainer}>
        <Input
          id="name"
          isError={!!errors.name}
          maxLength={150}
          {...register('name', {
            required: 'Поле обязательно к заполнению',
          })}
        >
          Модель автомобиля
        </Input>
        {errors.name && <InputErrMsg errMsg={errors.name.message} />}
      </div>

      <Controller
        name="categoryId"
        control={control}
        rules={{
          required: 'Поле обязательно к заполнению',
        }}
        render={({ field, fieldState }) => (
          <div className={inputContainer}>
            <span className={label}>Тип автомобиля</span>
            <Typeahead
              {...field}
              className={errors.categoryId ? typeheadErr : typehead}
              id="categoryId"
              onChange={(s: CategoryId[]) => {
                field.onChange(s)
                handleChangeCategory(s)
              }}
              options={categories || []}
              labelKey="name"
              emptyLabel={
                isLoadingCategories ? (
                  <Loader size="20px" animation="border" />
                ) : (
                  'Совпадений не найдено'
                )
              }
              defaultSelected={[car.categoryId]}
              inputProps={{ maxLength: 150 }}
            >
              <div className={iconWrapper}>
                <Icon name="IconDropdown1" styles={iconStyles} />
              </div>
            </Typeahead>
            {fieldState.error && (
              <InputErrMsg errMsg={fieldState.error.message} />
            )}
          </div>
        )}
      />
      <InputAddColor id="input-add-color">Доступные цвета</InputAddColor>
    </div>
  )
}
