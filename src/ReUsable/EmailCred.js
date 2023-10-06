import react from 'react'


const EmailCred = () => {
    return (
        <div class="flex  h-full items-center justify-center mt-6" >
            <input class="h-14 w-96 mx-2 px-4 bg-opacity-70 bg-[#161616] placeholder:text-white placeholder:text-base placeholder:font-normal border border-gray-600 rounded" type='text' placeholder='Email address' />
            <button
                class=" h-14 w-52 bg-[#E50914] hover:bg-red-700 text-white text-2xl font-medium font-bold py-2 px-4 rounded"
            >Get started &gt;</button>
        </div>
    )
}

export default EmailCred