import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Input, Textarea } from "@nextui-org/react";
import { faAnchorCircleXmark, faCircleXmark, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

type Props = {
  initial?: string
  type: string
  labelName: string
  keyName: string
  placeholder: string
  errors?: any
  register?: any
  onChange?: any
  readOnly?: boolean
  hasIcon?: boolean
};

const InputForm = ({ type, labelName, keyName, placeholder, errors = {}, register, initial, readOnly, onChange, hasIcon = true }: Props) => {
  const changeProps = onChange ? (onChange = { onChange }) : ({ ...register })
  const [errorValue, setErrorValue] = useState<any>()

  useEffect(() => {
    let keys = `${keyName}`.split(".")
    if (errors[keys[0]]) {
      if (keys[1] && keys[1] !== 'undefined') {
        setErrorValue(errors[`${keys[0]}`][`${keys[1]}`]);
      }
      else {
        setErrorValue(errors[`${keys[0]}`]);
      }
    }
  }, [errors])

  const inputClassname = `form-control ${errorValue ? 'is-invalid' : ''} w-full h-[44px] placeholder:p-3 placeholder:text-[13px] placeholder:font-semibold placeholder:text-[#e5e5e5] font-sans text-[14px] text-[#495057] bg-transparent ${errorValue ? 'border-2 border-red-500' : ''}`
  const iconsClassname = "w-[14px] h-[14px]"
  const iconsColor = errorValue ? '#FA3737' : '#000'
  const InputIcons = () => (<FontAwesomeIcon icon={errorValue ? faCircleXmark : faCircleCheck} className={iconsClassname} color={iconsColor} />)

  return (
    <div className="relative w-full" key={keyName}>
      {
        type === 'password' ?
          (
            <Input.Password
            size="md"
              underlined
              className={inputClassname}
              readOnly={readOnly}
              width="100%"
              key={keyName}
              {...changeProps}
              name={keyName}
              type={type}
              placeholder={placeholder}
              visibleIcon={<FontAwesomeIcon icon={faLockOpen} className={iconsClassname} color={iconsColor} />}
              hiddenIcon={<FontAwesomeIcon icon={faLock} className={iconsClassname} color={iconsColor} />} />
          )
          :
          (
            type === 'textarea' ?
              (
                <Textarea
                  size="md"
                  underlined
                  className={inputClassname}
                  readOnly={readOnly}
                  minRows={5}
                  width="100%"
                  key={keyName}
                  {...changeProps}
                  name={keyName}
                  type={type}
                  labelPlaceholder={labelName}
                />
              )
              :
              (
                <Input
                size="md"
                  underlined
                  className={inputClassname}
                  readOnly={readOnly}
                  width="100%"
                  key={keyName}
                  name={keyName}
                  type={type}
                  {...changeProps}
                  labelPlaceholder={labelName}
                  contentRight={hasIcon && <InputIcons />}
                />
              )
          )
      }
      <div className="invalid-feedback mt-1">{errorValue?.message}</div>
    </div>
  );
};
export default InputForm;

