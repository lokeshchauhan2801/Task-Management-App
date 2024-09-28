import classNames from "classnames";

const DropdownItem = ({ label, isSelected, onClick, className }) => {
  return (
    <div
      className={classNames("dropdown-item", className, {
        selected: isSelected,
      })}
      onClick={onClick}
      role="button"
    >
      <span className="flex-grow overflow-ellipsis font-medium">{label}</span>
    </div>
  );
};

export default DropdownItem;
