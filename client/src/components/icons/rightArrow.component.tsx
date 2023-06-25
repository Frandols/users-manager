import { SVGAttributes } from 'react'

type RightArrowProps = SVGAttributes<HTMLOrSVGElement>

const RightArrow = (props: RightArrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 24a3 3 0 0 1 3-3h34a3 3 0 1 1 0 6H7a3 3 0 0 1-3-3Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M24.802 8.959a3 3 0 0 1 4.24-.157l14 13a3 3 0 0 1 0 4.396l-14 13a3 3 0 0 1-4.083-4.396L36.59 24 24.96 13.198a3 3 0 0 1-.157-4.24Z"
      clipRule="evenodd"
    />
  </svg>
)
export default RightArrow
