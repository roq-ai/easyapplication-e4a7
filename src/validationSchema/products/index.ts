import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().nullable(),
  stock: yup.number().integer().nullable(),
  category: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
