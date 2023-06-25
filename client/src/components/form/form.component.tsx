import {
  Formik,
  Form as FormikForm,
  FormikConfig,
  FormikValues,
  FormikFormProps,
} from 'formik'

type FormProps<T> = Pick<
  FormikConfig<T>,
  'initialValues' | 'validationSchema' | 'onSubmit'
> &
  FormikFormProps

const Form = <T,>({
  initialValues,
  validationSchema,
  onSubmit,
  ...rest
}: FormProps<T & FormikValues>) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      <FormikForm {...rest} />
    </Formik>
  )
}

export default Form
