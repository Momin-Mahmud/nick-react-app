import { iconsList } from "./iconList"

// eslint-disable-next-line react/prop-types
const Icon = ({name = '', size = '10', color = '', className = '', transform = 'none', onClick = () => {}}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      style={{ transform }}
      viewBox={iconsList[name]?.viewBox}
      fill={color || 'none'}
      className={className}
      onClick={onClick}
    >
      {iconsList[name]?.path}
      {iconsList[name]?.defs}
    </svg>
  )
}

export default Icon


