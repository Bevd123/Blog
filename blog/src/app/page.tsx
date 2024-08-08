import Image from 'next/image';
import backgroundImage from '../../public/BG.png'; // Ersetze durch deinen Bildpfad

function Homepage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image
                src={backgroundImage}
                alt="Hintergrundbild"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute text-center z-10">
                <h1 className="text-6xl font-bold p-10 border text-black bg-opacity-25 backdrop-blur-sm bg-white border-none mb-10 rounded-2xl">Entdecke Nepal mit mir!</h1>
                <a 
                href='BlogOverview'
                className="bg-white hover:rounded-xl text-black font-bold py-2 px-4 transition-rounded duration-300">
                  Folge mir!

                </a>

            </div>
        </div>
    );
}

export default Homepage;