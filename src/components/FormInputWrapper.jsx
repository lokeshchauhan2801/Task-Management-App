import classNames from "classnames";

const FormInputWrapper = ({ title, children, error, className }) => {
  return (
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        {title}
      </label>
      <div className={classNames("form-input-wrapper", className)}>
        <div className="flex-grow">{children}</div>
      </div>
      <p className="form-input-error mt-2">{error}</p>
    </div>
  );
};

export default FormInputWrapper;
