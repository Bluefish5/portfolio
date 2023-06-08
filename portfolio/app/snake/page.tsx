import {RiArrowGoBackFill} from 'react-icons/ri';
export default function Home() {
    return (
        <div className="max-w-5xl m-auto bg-neutral-500 text-white font-Sansation pb-1">

            <h1 className="text-center text-6xl pt-5" >Snake 2</h1>

            <div className="flex ">
            <p className="tag-icon">#python </p>
            <p className="tag-icon">#pygame</p>
            <p className="tag-icon">#gra</p>
            <p className="tag-icon">#terminal</p>
            </div>
            
            <p className='m-10'>
                Celem projektu było napisanie gry tylko i wyłącznie w terminalu
                bez użycia żadnych biblotek graficznych następcie z użyciem takich 
                bibliotek.
            </p>
            <div className='flex '>
                <img className="imgx" src="./snake/grapchic_snake_2.png"/>
                <img className="imgx" src="./snake/terminal_snake_2.png"/>
            </div>

            <p className='m-10'>
                Aplikacji posiada takie elementy jak wyświetlenie najlepszychwyników graczy 
                oraz zmiane trudności co wpływa na gre. 
            </p>

            <div className='flex '>
                <img className="imgx" src="./snake/grapchic_snake_1.png"/>
                <img className="imgx" src="./snake/terminal_snake_3.png"/>
            </div>

            <div className='flex mt-5'>
                <img className="imgx" src="./snake/grapchic_snake_3.png"/>
                <img className="imgx" src="./snake/terminal_snake_1.png"/>
            </div>

            <p className='m-10'>
                Gra to najpolplarniejsza gra w snakea zbiera się owocki zeby zdobywać 
                punkty po zebraniu owocka nasza postać rośnie.
            </p>

            <div className='flex '>
                <img className="imgx" src="./snake/grapchic_snake_4.png"/>
                <img className="imgx" src="./snake/terminal_snake_4.png"/>
            </div>

            <p className='m-10'>
                Jęzeli uderzymy w ściane gra się kończy i da nam możliwość zapisu naszego wyniku
                który jest przechowywany w pliku tak aby nastepna osoba która bedzie grała w snakea
                dziedze mogła zobaczyć nasz wynik.
            </p>

            <div className='flex mt-5'>
                <img className="imgx" src="./snake/grapchic_snake_6.png"/>
                <img className="imgx" src="./snake/terminal_snake_5.png"/>
            </div>

            <div className="bg-main-color mt-10 rounded-3xl text-center p-4 w-80 mx-auto flex gap-2 mb-4">
            <RiArrowGoBackFill className='text-2xl my-auto '/>
            <a className="text-2xl font-Sansation my-auto" href="/">Wróć do strony głównej</a>   
            </div>
        </div>
    )
}