

const ButtonAction = ({title,href,func,type}) =>{

  
    return(
      <button onClick={()=>{func()}} className={`text-black text-base hover:text-white ${type?"hover:bg-black":" hover:bg-cyan-500"} no-underline border-2 border-cyan-500 p-5 rounded-full`}>
              {title}
      </button>
    )
  }
export default ButtonAction;