import { SVGAttributes } from 'react'

type AddProps = SVGAttributes<HTMLOrSVGElement>

const Add = (props: AddProps) => (
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
      d="M24 6a3 3 0 0 1 3 3v30a3 3 0 1 1-6 0V9a3 3 0 0 1 3-3Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 24a3 3 0 0 1 3-3h30a3 3 0 1 1 0 6H9a3 3 0 0 1-3-3Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Add
