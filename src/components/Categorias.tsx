import sala from "@/assets/sala.webp";
import comedor from "@/assets/comedor.webp";
import jardin from "@/assets/jardin.webp";
import recamara from "@/assets/recamara.webp";

function Categorias() {
    return (
        <div className={'flex flex-col'}>
            <div className={'flex flex-row'}>
                <div className={'rounded-3xl h-1/4 m-4'}>
                    <img className={'h-[200px] w-[400px] md:h-[150px] md:w-[250px] rounded-3xl'} src={sala}
                         alt="No se encontro"/>
                </div>
                <div className={'rounded-3xl h-1/4 m-4'}>
                    <img className={'h-[200px] w-[400px] md:h-[150px] md:w-[250px] rounded-3xl'} src={comedor}
                         alt="No se encontro"/>
                </div>
            </div>
            <div className={'flex flex-row'}>
                <div className={'rounded-3xl h-1/4 m-4'}>
                    <img className={'h-[200px] w-[400px] md:h-[150px] md:w-[250px] rounded-3xl'} src={jardin}
                         alt="No se encontro"/>
                </div>
                <div className={'rounded-3xl h-1/4 m-4'}>
                    <img className={'h-[200px] w-[400px] md:h-[150px] md:w-[250px] rounded-3xl'} src={recamara}
                         alt="No se encontro"/>
                </div>
            </div>
        </div>
    );
}

export default Categorias;
