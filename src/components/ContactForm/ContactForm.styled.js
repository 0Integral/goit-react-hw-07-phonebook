import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
  width: 500px;
  padding: 20px;

  border: 1px solid black;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const FormField = styled(FormikField)`
  display: block;
  margin-top: 5px;
`;
