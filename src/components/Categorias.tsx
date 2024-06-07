import sala from "@/assets/sala.webp";
import comedor from "@/assets/comedor.webp";
import jardin from "@/assets/jardin.webp";
import recamara from "@/assets/recamara.webp";

function Categorias() {
    return (
        <div className={'flex flex-col text-center'}>
            <div className={'flex flex-row'}>
                <div className={'rounded-3xl h-1/4 m-4'}>
                    <img className={'h-[200px] w-[400px] md:h-[150px] md:w-[250px] rounded-3xl'} src={sala}
                         alt="No se encontro"/>
                         <h1>Salas</h1>
                </div>
                <div className={'rounded-3xl h-1/4 m-4'}>
                    <img className={'h-[200px] w-[400px] md:h-[150px] md:w-[250px] rounded-3xl'} src={comedor}
                         alt="No se encontro"/>
                         <h1>Comedores</h1>
                </div>
            </div>
            <div className={'flex flex-row'}>
                <div className={'rounded-3xl h-1/4 m-4'}>
                    <img className={'h-[200px] w-[400px] md:h-[150px] md:w-[250px] rounded-3xl'} src={jardin}
                         alt="No se encontro"/>
                         <h1>Muebles de Jardin</h1>
                </div>
                <div className={'rounded-3xl h-1/4 m-4'}>
                    <img className={'h-[200px] w-[400px] md:h-[150px] md:w-[250px] rounded-3xl'} src={recamara}
                         alt="No se encontro"/>
                         <h1>Recamaras</h1>
                </div>
            </div>
        </div>
    );
}

export default Categorias;
