import { SVGAttributes } from 'react'

type CancelProps = SVGAttributes<HTMLOrSVGElement>

const Cancel = (props: CancelProps) => (
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
      d="M9.879 9.879a3 3 0 0 1 4.242 0l24 24a3 3 0 1 1-4.242 4.242l-24-24a3 3 0 0 1 0-4.242Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M38.121 9.879a3 3 0 0 0-4.242 0l-24 24a3 3 0 1 0 4.242 4.242l24-24a3 3 0 0 0 0-4.242Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Cancel
