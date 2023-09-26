import React from 'react'

type Props = {
  title: string
  className?: string
}

const Title = ({title,className}: Props) => {
  return (
    <h3 className={className}>{title}</h3>
  )
}

export default Title