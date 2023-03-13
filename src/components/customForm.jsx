import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("meta", meta);
  console.log("field", field);
  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? " border-2 border-red-600 rounded-sm w-3/4"
            : " border-2 border-slate-400 rounded-sm w-3/4"
        }
      />
      {meta.touched && meta.error && (
        <div className=" text-red-600 text-xs font-semibold">{meta.error}</div>
      )}
    </>
  );
};

export default CustomInput;
