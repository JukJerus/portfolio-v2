
export default function Project(){
  return(
    <div className="p-3 mt-20">
      <h1 className="bg-gradient-to-r from-amber-500 via-yellow-300 via-65% to-white inline text-transparent bg-clip-text font-bold text-3xl mx-29 md:mx-143">Projects</h1>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 w-s">
          <div className="w-60">
            <img src="./src/assets/solarSTEM.png" alt="#" />
            <p className="text-center">SolarSTEM (Website)</p>
          </div>
          <div className="w-60 bg-amber-400">
            <img src="./src/assets/Kantinku.png" alt="#" />
            <p className="text-center" >Kantinku (Mockup)</p>
          </div>
          <div className="w-60 bg-amber-400">
            <img src="./src/assets/Collagen.png" alt="#" />
            <p className="text-center" >Collagen (Mockup)</p>
          </div>
          <div className="w-60 bg-amber-400">
            <img src="./src/assets/Joking.png" alt="#" />
            <p className="text-center" >Joking.id (Mockup)</p>
          </div>
      </div>
    </div>
  )
}