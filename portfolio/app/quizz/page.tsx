import {RiArrowGoBackFill} from 'react-icons/ri';
export default function Home() {
    return (
        <div className="max-w-5xl m-auto bg-neutral-500 text-white font-Sansation pb-1">
            <h1 className="text-center text-6xl pt-5" >Quizz</h1>

            <div className="flex">
            <p className="tag-icon">#android</p>
            <p className="tag-icon">#moblie</p>
            <p className="tag-icon">#java</p>
            
            
            </div>
            
             
             <p className='m-10'>Projekt miał w swojm celu odtworzenie na płytce stykowej prostej kopii 
             konsoli do gier. Gra którą można zagrać to popularna gra tetris.
             </p>
            
             <img className="imgx max-h-70" src="./quizz/quizz_1.png"/>



            <p className='m-10'>TODO</p>
            <div className="bg-main-color mt-10 rounded-3xl text-center p-4 w-80 mx-auto flex gap-2 mb-4">
            <RiArrowGoBackFill className='text-2xl my-auto '/>
            <a className="text-2xl font-Sansation my-auto" href="/">Wróć do strony głównej</a>   
        </div>
        </div>
        
    )
}