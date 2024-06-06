import sala from '@/assets/sala.webp'
import ProductoCard from "@/components/ProductoCard.tsx";

function Home() {
    return (
        <div className={'flex flex-col justify-center items-center'}>

            <div className={'flex flex-row justify-around'}>
                <ProductoCard
                    imagen={sala}
                    nomProd={'Sala de 5 piezas'}
                    precio={29990}
                /><ProductoCard
                imagen={sala}
                nomProd={'Sala de 5 piezas'}
                precio={29990}
            /><ProductoCard
                imagen={sala}
                nomProd={'Sala de 5 piezas'}
                precio={29990}
            /><ProductoCard
                imagen={sala}
                nomProd={'Sala de 5 piezas'}
                precio={29990}
            />
            </div>
            <div className={'flex flex-row justify-around'}>
                <ProductoCard
                    imagen={sala}
                    nomProd={'Sala de 5 piezas'}
                    precio={29990}
                /><ProductoCard
                imagen={sala}
                nomProd={'Sala de 5 piezas'}
                precio={29990}
            /><ProductoCard
                imagen={sala}
                nomProd={'Sala de 5 piezas'}
                precio={29990}
            /><ProductoCard
                imagen={sala}
                nomProd={'Sala de 5 piezas'}
                precio={29990}
            />
            </div>
        </div>
    );
}

export default Home;