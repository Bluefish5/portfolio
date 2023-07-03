import {RiArrowGoBackFill} from 'react-icons/ri';
export default function Home() {
    return (
        <div className="max-w-5xl m-auto bg-neutral-500 text-white font-Sansation pb-1">
            <h1 className="text-center text-6xl pt-5" >Radar</h1>

            <div className="flex">
            <p className="tag-icon">#robotyka </p>
            <p className="tag-icon">#C++/C</p>
            <p className="tag-icon">#arduino</p>
            <p className="tag-icon">#microkontroler</p>
            <p className="tag-icon">#python</p>
            <p className="tag-icon">#pygame</p>
            </div>
            
             <p className='m-10'>Link do filmiku pokazującego działenie projektu na youtube: <br/>

             <a className='text-[#E05550] underline ' href='https://www.youtube.com/watch?v=C2G4AAabR08'>
                https://www.youtube.com/watch?v=C2G4AAabR08</a>
             </p>
             <p className='m-10'>Celem projektu było skonstruowanie sysemu który jest w stanie w czasie rzeczywistym zbierać informacje z 
                czujnika i wysyłanie go do programu na komputrze. Program odbiera dane i wyświetla je w opdowiedni sposób na ekranie.
             </p>
            
             <img className="imgx" src="./radar/radar_1.png"/>
                
            
            
            
            
            <div className="bg-main-color mt-10 rounded-3xl text-center p-4 w-80 mx-auto flex gap-2 mb-4">
            <RiArrowGoBackFill className='text-2xl my-auto '/>
            <a className="text-2xl font-Sansation my-auto" href="/">Wróć do strony głównej</a>   
            </div>
        </div>
        
    )
}