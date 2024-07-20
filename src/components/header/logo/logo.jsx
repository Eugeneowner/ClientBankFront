import s from "./logo.module.scss"
import { LogoIcon } from "../../assets/icons"

const Logo = () => { 
  return ( 
    <div className={s.logo}>
      <LogoIcon size={"64px"}/>
      <p className={s.logo_text}>Personal Bank</p>
    </div>
  )
}

export default Logo