import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export const FormikWrapper = () => {
	const initialValues = {};
	const validationSchema = Yup.object({});
	const onSubmit = (values) => console.log('Form data', values);
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => (
				<Form>
					<button type="submit">Send</button>
				</Form>
			)}
		</Formik>
	);
};
