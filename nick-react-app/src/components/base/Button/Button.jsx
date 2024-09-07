import Icon from "../../../utils/Icon";
// eslint-disable-next-line react/prop-types
const Button = ({ innerText = '', onClick, type = 'primary', size = 'medium', icon, iconLeading = false, iconSize, className }) => {
  console.log('innerText', innerText);

  const variant = () => {
    switch (type) {
      case 'primary':
        return 'text-white bg-[#C026D3] hover:border-[#73007b] hover:shadow-lg rounded-lg focus:outline-none dark:focus:ring-blue-800 text-center font-center';
      case 'secondary':
        return 'bg-white hover:bg-[#fde0ff] text-[#C026D3] rounded-lg hover:shadow-lg';
      case 'primaryDark':
        return 'text-white bg-[#A21CAF] hover:bg-[#C026D3] hover:shadow-lg rounded-lg focus:outline-none dark:focus:ring-blue-800 text-center font-center';  
      case 'outlined' : 
        return 'text-[#6B7280] border border-[#E5E7EB] hover:shadow-lg rounded-lg focus:outline-none dark:focus:ring-blue-800 text-center font-center';
      case 'secondary-no-bg':
        return 'text-[#A21CAF] hover:bg font-medium rounded-lg dark:bg dark:hover:bg focus:outline-none dark:focus:';
      default:
        return 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800';
    }
  };

  const sizeVariant = () => {
    switch (size) {
      case 'small':
        return 'text-xs font-light px-1.5 py-1.5';
      case 'medium':
        return 'text-sm font-medium px-4 py-1.5';
      case 'large':
        return 'text-base px-4 py-2';
      default:
        return 'text-base px-5 py-2.5';
    }
  };

  return (
    <button onClick={onClick} type='button' className={` flex items-center justify-center gap-2 ${variant()} ${sizeVariant()} ${className}`}>
      {!iconLeading && icon && <Icon name={icon} size={iconSize} />}
      {innerText}
      {iconLeading && icon && <Icon name={icon} size={iconSize} />}
    </button>
  )
}

export default Button;
