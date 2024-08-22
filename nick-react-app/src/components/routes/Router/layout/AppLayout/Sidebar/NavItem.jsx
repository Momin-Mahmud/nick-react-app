import { useNavigate } from 'react-router-dom'
import Icon from '../../../../../../utils/Icon'
const NavItem = ({icon, selectedIcon, size, text, selected, className, navigationPath}) => {
  const navigate = useNavigate()
  return (
    <div className={`flex items-center text-start cursor-pointer hover:bg-[#F5F3FF] justify-start gap-1 min-w-full ${selected && `bg-[#F5F3FF]`} p-2 rounded-lg`} onClick={() => navigate(navigationPath)}>
    {selected ? <Icon name={selectedIcon} size={size} />: <Icon name={icon} size={size} />}
    <span className={`${selected ? `text-[#6D28D9]` : `text-black`} tracking-tight text-sm ${className} font-medium`}>
      {text}
    </span>
  </div>
  )
}

export default NavItem