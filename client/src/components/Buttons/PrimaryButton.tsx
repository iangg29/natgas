import React from 'react'
type Props = {
    label : string;
}
const PrimaryButton = ({label}: Props) : JSX.Element => {
  return (
    <button className = "primary-button">{label}</button>
  )
}

export default PrimaryButton