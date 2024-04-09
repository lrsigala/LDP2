import ButtonLink from "@/components/atoms/ButtonLink";


const NavBar = ({}) =>{
    return(
        <navigator className=" flex h-32 w-screen bg-cyan-500 items-center justify-between px-40">
        <h1 className="text-2xl">SmartPacient</h1>
        <div>
            <ButtonLink title={"Pacientes en espera"} href={"/App"} type={true}/>
            <ButtonLink title={"Ingreso de paciente"} href={"/App/regpa"} type={true}/>
            <ButtonLink title={"Perfil"} href={"/perfil"} type={true}/>
            <ButtonLink title={"Cerrar Sesión"} href={"/"} type={true}/>
        </div>
    </navigator>
    )
  }
export default NavBar;