import { useMemo } from 'react';

export default function useFormikErrors(formik) {
  return useMemo(() => {
    const e = {};
    for (const field in formik.errors) {
      if (formik.touched[field] && formik.errors[field]) {
        e[field] = formik.errors[field];
      }
    }
    return e;
  }, [formik.touched, formik.errors]);
}