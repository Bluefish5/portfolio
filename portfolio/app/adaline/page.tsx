import {RiArrowGoBackFill} from 'react-icons/ri';
export default function Adaline() {
    return (
      
<div className="max-w-5xl m-auto bg-neutral-500 text-white font-Sansation pb-1">
    <h1 className="text-center text-6xl pt-5" >Adalidne</h1>
    <div className="flex ">
        <p className="tag-icon">#python </p>
        <p className="tag-icon">#machine learning</p>
        <p className="tag-icon">#numpy</p>
        <p className="tag-icon">#PyQt5</p>
        <p className="tag-icon">#matplotlib</p>
        <p className="tag-icon">#desktop app</p>
        <p className="tag-icon">#adaline</p>
    </div>
    <p className="m-10" >Projekt w swojich założeniach miał na celu skonstruowanie aplikcaji desktopowej dzięki której była
        by możliwa nauka sieci neuronów którym celem było by znalecienie takiej funkcji liniowej która odzieli między
        sobą zbiory dwóch różnych zbiorów punktów.
    </p>
    
    <div className="flex">
        <img className="imgx" src="./adaline_app.png"/>
        <img className="imgx" src="./6.png"/>
    </div>
    


    <h2 className="m-10 text-2xl">Podstawa teoretyczna</h2>
    <p className="m-10" >Model Adaline (ang. Adaptive Linear Neuron)
        Schemat neuronu Adaline przedstawiono na poniższym rysunku. Budowa tego neuronu jest
        bardzo podobna do modelu perceptronu, a jedyna różnica dotyczy algorytmu uczenia. Sygnał
        wyznacza się w ten sam sposób, co w przypadku uczenia perceptronu. Jednak w przypadku
        neuronu typu Adaline porównuje się sygnał wzorcowy d z sygnałem s, na wyjściu części
        liniowej neuronu (nie uwzględnia się funkcji aktywacji).</p>
    <img className="imgx" src="./7.png"/>

    <p className="m-10" >Różnicę między sygnałem wzorcowym, a sygnałem s nazywamy błędem ε = − d s. Uczenie
        neuronu, czyli dobór wag, sprowadza się do minimalizacji funkcji określonej w sposób
        następujący:</p>

    <img className="imgx" src="./8.png"/>
    
    <h2 className="m-10 text-2xl">Funkcojnalności i implementacja</h2>
    
    <p className="m-10">
        Pierwszą i najważniejszą funkcjąlnościa było napisanie programu dzięki któremy było możliwe
    </p>

    <img className="imgx" src="./6.png"/>

    <p className="m-10">Do programu dane wprowadzane są poprzez podanie pliku textowego który musi być odpowiednio sformatowany.</p>

    <div className="flex">
        <img className="imgx" src="./1.png"/>
        <img className="imgx" src="./2.png"/>
    </div>
    
    <p className='m-10'>
        Aplikacja posiada również parametry które da się ustawić
        aby kontrolować dzizłanie programu takie jak możliwy minimalny błąd
        oraz ilość iteracji algorytmu znajdującego odpowiednią funkcje. Program
        ma także rysowania jak zmieniała się wartość błedu przez wszytkie iteracje.
    </p>

    <div className="flex">
        <img className="imgx" src="./3.png"/>
        <img className="imgx" src="./5.png"/>
    </div>
    

    <div className="bg-main-color mt-10 rounded-3xl text-center p-4 w-80 mx-auto flex gap-2 mb-4">
        <RiArrowGoBackFill className='text-2xl my-auto '/>
        <a className="text-2xl font-Sansation my-auto" href="/">Wróć do strony głównej</a>   
    </div>


</div>
    )
}