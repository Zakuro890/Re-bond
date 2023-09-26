import React, { ComponentProps, forwardRef } from "react"
import { Input } from "./Input"
import { Styles } from "@/types/styles"

type Props = {
  children: React.ReactNode
  styles?: Styles
  className?: string
} & ComponentProps<"input">

export const RadioInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { children,styles,className, ...inputProps } = props
  return (
    <label style={{...styles?.radioCommonContainer,...styles?.radioContainer}}>
      <p >{children}</p>
      <Input
        {...inputProps}
        type={"radio"}
        style={{ display: "none" }}
        className={className}
        ref={ref}
      />
    </label>
  );
});