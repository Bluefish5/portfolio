import {RiArrowGoBackFill} from 'react-icons/ri';
export default function Home() {
    return (
        <div className="max-w-5xl m-auto bg-neutral-500 text-white font-Sansation pb-1">

        <h1 className="text-center text-6xl pt-5" >Anguar Plan</h1>

        <div className="flex ">
            <p className="tag-icon">#angular</p>
            <p className="tag-icon">#firebase</p>
            <p className="tag-icon">#webside</p>
            <p className="tag-icon">#html</p>
            <p className="tag-icon">#css</p>
            <p className="tag-icon">#typescript</p>
        </div>

        <p className='m-10'>
            Celem projektu było stworzenie aplikacji która była by wstanie
            zarządzać użytkownikami oraz planami tych użutkowników. Główne funkcjonalności
            jakie miały się znajdować to role(np. admin,user..), możliwość tworzenia grafiku
            zarządzenie użytkownikami oraz grafikami, baza danych dostępna na serwerze. 
        </p>

        <div className='flex '>
            <img className="imgx" src="./angular/angular_1.png"/>
            <img className="imgx" src="./angular/angular_2.png"/>
            
        </div>

        <p className='m-10'>
            Aplikacja umożliwia wyświetlenie aktualnych dancyh użytkownika który jest zalogowanyc
            ora jeżeli jest on adminem posiada możliwość dostępu do panelu admina.
            Admin może zarządać użytkownikami oraz planai.
        </p>

        <div className='flex '>
            <img className="imgx" src="./angular/angular_3.png"/>
            <img className="imgx" src="./angular/angular_4.png"/>
        </div>
        <img className="imgx mt-5" src="./angular/angular_5.png"/>

        <p className='m-10'>
            Admin ma możliwość tworznie użytkowników oraz pranów poprzez wypełnienie
            odpowniego formularza.
        </p>

        <div className='flex '>
            <img className="imgx" src="./angular/angular_6.png"/>
            <img className="imgx" src="./angular/angular_7.png"/>
        </div>

        <p className='m-10'>
            Wszytkie dane przechowywane są na serwerze zdalnym udostępaniym przed google
            w tym przypadku jest to firestore
        </p>

        <div className='flex '>
            <img className="imgx" src="./angular/angular_8.png"/>
        </div>

        <div className="bg-main-color mt-10 rounded-3xl text-center p-4 w-80 mx-auto flex gap-2 mb-4">
            <RiArrowGoBackFill className='text-2xl my-auto '/>
            <a className="text-2xl font-Sansation my-auto" href="/">Wróć do strony głównej</a>   
        </div>

        </div>
    )
}