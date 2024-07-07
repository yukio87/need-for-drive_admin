import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Controller } from 'react-hook-form'

import { InputErrMsg } from '@/entities/input-err-msg'
import AuthService from '@/shared/api/AuthService/AuthService'
import { Icon } from '@/shared/ui/icon'
import { Input } from '@/shared/ui/input'
import { Loader } from '@/shared/ui/loader'
import { CategoryId } from '@/types/type'

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
  isEditSession,
  register,
  control,
  errors,
  clearErrors,
}) => {
  const { isLoading: isLoadingCategories, data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => AuthService.getCategories(),
    select: (data) => data.data.data,
    throwOnError: true,
  })

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
              onChange={(s: CategoryId[]) => field.onChange(s[0])}
              options={categories || []}
              labelKey="name"
              emptyLabel={
                isLoadingCategories ? (
                  <Loader size="20px" animation="border" />
                ) : (
                  'Совпадений не найдено'
                )
              }
              defaultSelected={isEditSession ? [car.categoryId] : []}
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

      <div className={inputContainer}>
        <Input
          id="priceMin"
          isError={!!errors.priceMin}
          type="number"
          {...register('priceMin', {
            required: 'Поле обязательно к заполнению',
            min: { value: 0, message: 'Некорректное значение' },
          })}
        >
          Минимальная цена
        </Input>
        {errors.priceMin && <InputErrMsg errMsg={errors.priceMin.message} />}
      </div>

      <div className={inputContainer}>
        <Input
          id="priceMax"
          isError={!!errors.priceMax}
          type="number"
          {...register('priceMax', {
            required: 'Поле обязательно к заполнению',
            min: { value: 0, message: 'Некорректное значение' },
          })}
        >
          Максимальная цена
        </Input>
        {errors.priceMax && <InputErrMsg errMsg={errors.priceMax.message} />}
      </div>

      <InputAddColor
        id="input-add-color"
        isEditSession={isEditSession}
        register={register}
        errors={errors}
        clearErrors={clearErrors}
      >
        Доступные цвета
      </InputAddColor>
    </div>
  )
}
