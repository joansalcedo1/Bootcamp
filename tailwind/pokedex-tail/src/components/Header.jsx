export default function Header() {
    return (
        <div className="bg-black border-4 flex flex-row">
             
            <div id="home" className="">
                
                <h1 className="font-serif text-3xl font-bold align-middle text-center m-3">Pokedex</h1>
            </div>
         
            <div id="Agua">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Agua</button>

            </div>
            <div id="Fuego">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Fuego</button>

            </div>
            <div id="pasto">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Pasto</button>

            </div>
        </div>
    )
}