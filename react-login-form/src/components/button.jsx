
const Button = ({text, onClickEvent, endpoint}) => {
  return (
    <button className='btn' onClick={onClickEvent} data-endpoint={endpoint} >{text}</button>
  )
}

export default Button