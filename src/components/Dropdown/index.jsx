import { useState } from "react";
import DropdownWrapper from "./DropdownWrapper";
import DropdownItem from "./DropdownItem";

const Dropdown = ({
  options,
  selectedOptions,
  onChange,
  placeholder,
  multiselect,
  wrapperClass,
  contentClass,
  itemClass,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const isSelected = (option) => {
    return (
      (selectedOptions ?? []).findIndex((o) => o.value === option.value) !== -1
    );
  };

  const handleItemClick = (option) => {
    let updatedSelection = selectedOptions || [];
    if (isSelected(option)) {
      updatedSelection = updatedSelection.filter(
        (o) => o.value !== option.value
      );
    } else {
      if (multiselect) {
        updatedSelection = [...updatedSelection, option];
      } else {
        updatedSelection = [option];
      }
    }
    onChange && onChange(updatedSelection);
    if (!multiselect) {
      setIsOpen(false);
    }
  };

  return (
    <DropdownWrapper
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      placeholder={placeholder}
      label={selectedOptions?.[0]?.label}
      target={children}
      className={wrapperClass}
      contentClass={contentClass}
    >
      {options?.length ? (
        options?.map((option) => (
          <DropdownItem
            key={option.value}
            label={option.label}
            isSelected={isSelected(option)}
            onClick={(e) => {
              e.stopPropagation();
              handleItemClick(option);
            }}
            className={itemClass}
          />
        ))
      ) : (
        <DropdownItem
          label="No Options"
          isSelected={false}
          onClick={() => {}}
          className={itemClass}
        />
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
