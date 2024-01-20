
const SocialButton = ({icon, link}) => {
  return (
    <>
 <a href={link} >
            <div className=" cajaIconos rounded-circle py-2 px-3 border border-primary  ">
            <i className={icon}></i>
        </div>
        </a>


    </>
  )
}

export default SocialButton