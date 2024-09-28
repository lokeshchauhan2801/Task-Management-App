import classNames from "classnames";
import ArrowDropdownIcon from "../../assets/icons/arrow-dropdown.svg?react";

const DropdownTarget = ({
  children,
  placeholder,
  label,
  onClick,
  className,
}) => {
  return (
    <div role="button" className="flex items-center" onClick={onClick}>
      <div className="flex-grow overflow-hidden">
        {children || (
          <div
            className={classNames(
              "overflow-ellipsis py-2 font-medium text-gray-800 text-[15px]",
              className,
              {
                "font-normal !text-gray-700": !label,
              }
            )}
          >
            {label || placeholder}
          </div>
        )}
      </div>
      <div>
        <ArrowDropdownIcon className="ms-2 size-3 fill-primary" />
      </div>
    </div>
  );
};

export default DropdownTarget;
