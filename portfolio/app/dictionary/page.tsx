import {RiArrowGoBackFill} from 'react-icons/ri';
export default function Home() {
    return (
        <div className="max-w-5xl m-auto bg-neutral-500 text-white font-Sansation pb-1">
            <h1 className="text-center text-6xl pt-5" >Dictionary</h1>

            <div className="flex ">
                <p className="tag-icon">#slownik </p>
                <p className="tag-icon">#C</p>
                <p className="tag-icon">#lista linków</p>
            </div>

            <p className='m-10' >Program pełniący funkcję słownika polsko-angielskiego i angielsko-polskiego. Użytkownik podaje z 
                jakiego języka przetłumaczyć słowo, a program powinien znaleźć jego tłumaczenie. Dostępne słowa<br/>
                przechowuje w pliku tekstowym „slownik.txt”. Program wykonuje również polecenia tzn. <br/>
                - Wypisuje plik bez liczb<br/>
                - Wypisuje słowa polskie względem długości słowa<br/>
                - Wypisuje słowa polskie bez powtórzeń<br/>
            </p>
            <img className="imgx" src="./dictionary/dictionary_1.png"/>
            <p className='m-10' >W programie poruszamy się poprzez podawanie liczb które mają przypisane do siebie czynności:</p>
            <div className='flex '>
                <img className="imgx" src="./dictionary/dictionary_2.png"/>
                <img className="imgx" src="./dictionary/dictionary_3.png"/>
            </div>

            <p className='m-10'>TODO</p>
            <div className="bg-main-color mt-10 rounded-3xl text-center p-4 w-80 mx-auto flex gap-2 mb-4">
            <RiArrowGoBackFill className='text-2xl my-auto '/>
            <a className="text-2xl font-Sansation my-auto" href="/">Wróć do strony głównej</a> 
            </div>  
            
        </div>
    )
}