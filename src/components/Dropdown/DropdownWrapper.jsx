import { useEffect, useRef } from 'react'
import classNames from 'classnames'
import DropdownTarget from './DropdownTarget'

const DropdownWrapper = ({
  isOpen,
  setIsOpen,
  target,
  placeholder,
  label,
  children,
  className,
  contentClass,
}) => {
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen && setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [setIsOpen])

  return (
    <div ref={dropdownRef} className={classNames('relative', className)}>
      {
        <DropdownTarget
          placeholder={placeholder || 'Select'}
          label={label}
          onClick={(e) => {
            e.stopPropagation()
            setIsOpen && setIsOpen(!isOpen)
          }}
        >
          {target}
        </DropdownTarget>
      }
      {isOpen && (
        <div className={classNames('dropdown', contentClass)}>{children}</div>
      )}
    </div>
  )
}

export default DropdownWrapper
