import React from 'react';
import { Formik } from 'formik';


const validate = (values) => {
    const errors = {};
    if(!values.name)  errors.name = 'Required';
    if(!values.type)  errors.type = 'Required';
    if(!values.price) {
        errors.price = 'Required';
    }  else if (values.price.type !== 'number') errors.price = 'type in a number'
        
    return errors;
}

const onFormSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
}


const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ name: '', price: '', type: '', instock: null }}
      validate={validate}
      onSubmit={onFormSubmit}>
        
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder=""
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="number"
            name="price"
            placeholder=""
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <input
            type="text"
            name="type"
            placeholder=""
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}

       
    </Formik>
  </div>
);

export default Basic;