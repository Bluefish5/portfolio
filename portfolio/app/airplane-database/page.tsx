import {RiArrowGoBackFill} from 'react-icons/ri';
export default function Home() {
    return (
        <div className="max-w-5xl m-auto bg-neutral-500 text-white font-Sansation  pb-1">
            <h1 className="text-center text-6xl pt-5" >Airplane-database</h1>

            <div className="flex ">
                <p className="tag-icon">#python </p>
                <p className="tag-icon">#pickle</p>
                <p className="tag-icon">#numpy</p>
                <p className="tag-icon">#PyQt5</p>
                <p className="tag-icon">#matplotlib</p>
                <p className="tag-icon">#desktop app</p>
                <p className="tag-icon">#database</p>
            </div>
            
            <p className='m-10'>Projekt w swojich załorzeniach miał na celu stworzenie aplikacji która posiada
            troche bradziej rozbudowaną baze danych z relacjami. Aplikacja miała zostać wykonana obiektowo oraz
            z wykorzystaniem biblioteki która umożliwia stworzenie gui</p>

            <div className="flex">
                <img className="imgx" src="./airplane/airplane_1.png"/>
                <img className="imgx" src="./airplane/airplane_2.png"/>
                
            </div>
            <img className="imgx mx-auto mt-5" src="./airplane/airplane_3.png"/>

            <div className="bg-main-color mt-10 rounded-3xl text-center p-4 w-80 mx-auto flex gap-2 mb-4">
            <RiArrowGoBackFill className='text-2xl my-auto '/>
            <a className="text-2xl font-Sansation my-auto" href="/">Wróć do strony głównej</a>   
    </div>

        </div>
    )
}