import React from "react"

type Props = {
  children: React.ReactNode
  direction?: "row" | "column"
  justify?:
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "stretch"
  align?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch"
  wrap?: "nowrap" | "wrap" | "wrap-reverse"

  // その他のCSS設定
  className?: string
}
export const Flex = (props: Props) => {
  const { children, align, direction, justify, wrap, className } = props
  return (
    <div
      style={{
        display: "flex",
        alignItems: align,
        flexDirection: direction,
        justifyContent: justify,
        flexWrap: wrap,
      }}
      className={className}
    >
      {children}
    </div>
  )
}