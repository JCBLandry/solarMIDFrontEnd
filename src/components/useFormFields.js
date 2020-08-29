// import { useState } from "react";

// export function useFormFields(initialState) {
//   const [fields, setValues] = useState(initialState);

//   return [
//     fields,
//     function (e) {
//       setValues({
//         ...fields,
//         [e.target.id]: e.target.value,
//       });
//     },
//   ];
// }
import { useState } from "react";

export const useFormFields = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (e) => {
        setValue(e.target.value);
      },
    },
  };
};
