import {RiArrowGoBackFill} from 'react-icons/ri';

export default function Home() {
    return (
    <div className="max-w-5xl m-auto bg-neutral-500 text-white font-Sansation pb-1">
        <h1 className="text-center text-6xl pt-5" >Mini-sumo</h1>

        <div className="flex ">
            <p className="tag-icon">#robotyka </p>
            <p className="tag-icon">#mechanika</p>
            <p className="tag-icon">#elektronika</p>
            <p className="tag-icon">#C++/C</p>
            <p className="tag-icon">#Arduino</p>
            <p className="tag-icon">#Microkontroler</p>
            <p className="tag-icon">#KiCad</p>
            <p className="tag-icon">#fusion 360</p>
        </div>

        <p className='m-10'>
            Projekt był skonstrułowany w celach braniu udzału w 
            zawodach robotycznych w kategori mini-sumo. Na konstrukcje
            robota składało się zaprojektowanie elektroniki,mechaniki oraz
            zaprogramowanie go w odpowdni sposów.
        </p>

        <h2 className="m-10 text-2xl">Projekt i realizaja</h2>

        <p className='m-10'>
            Projekt zaczęto od zaprojektowania schemetu płytki oraz samej płytki
            która była odpowiedzialna za logike i sterowanie roborem. Projekt 
            powstał przy pomocy programu Kicad.
        </p>

        <div className='flex '>
            <img className="imgx" src="./minisumo/minisumo_1.png"/>
            <img className="imgx" src="./minisumo/minisumo_3.png"/>
            
        </div>
        <img className="imgx mt-5" src="./minisumo/minisumo_2.png"/>
        

        <p className='m-10'>
            Kolejnym etapem było zaprogramowanie mechaniki oraz ustawienia
            elementów w robocie. Robot powstał w fusione do tego wygenerowano
            dla niego rysunki oraz obiek odwzorowania w rzeczywistości.
        </p>

        <div className='flex '>
            <img className="imgx" src="./minisumo/minisumo_5.png"/>
            <img className="imgx h-64" src="./minisumo/minisumo_4.png"/>
            
        </div>
        <img className="imgx mt-5" src="./minisumo/minisumo_6.png"/>

        <p className='m-10'>
            Program został napisany za pomocą C++ oraz funckji arduno.
        </p>
        <img className="imgx" src="./minisumo/minisumo_7.png"/>

        <p className='m-10'> 
            Ostatnim etapem było przełożenie projektów na rzeczywsty produkt.
            Płytka PCB została wytrawona kwasem oraz za pomocą metody termoprzewodzącej.
            Elemetych mechaniczne zostały wydrukowane na drukarce 3D.
        </p>

        <div className='flex '>
            <img className="imgx w-80" src="./minisumo/minisumo_1.jpg"/>
            <img className="imgx w-80" src="./minisumo/minisumo_3.jpg"/>
            <img className="imgx w-80 mt-5" src="./minisumo/minisumo_2.jpg"/>
            
        </div>
        

        <div className="bg-main-color mt-10 rounded-3xl text-center p-4 w-80 mx-auto flex gap-2 mb-4">
            <RiArrowGoBackFill className='text-2xl my-auto '/>
            <a className="text-2xl font-Sansation my-auto" href="/">Wróć do strony głównej</a>   
        </div>




    </div>
    )
}