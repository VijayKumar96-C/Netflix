import react from 'react'
import netflixImage from '../img/pngegg.png'

const HomePage = () => {
    // 'D:\Workspace\Netflix\netflix-clone\img\pngegg.png'
    return (
        <div class="h-full w-full" >
            <div class=' absolute h-screen w-full bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg)]' >
                <div>
                    <div class="flex justify-between" >
                        <img
                            class='object-cover h-10 w-36 ml-40 mt-4 '
                            src={netflixImage}
                            alt="Netflix"
                        />
                        <button class=" absolute right-36 bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-3 rounded mt-4 " >
                            Sign In
                        </button>
                    </div>
                    <div class="flex flex-col "  >
                        <div class=" flex flex-col items-center justify-center text-white text-center mt-40"  >
                            <b class="text-5xl font-black mx-40 "  >The biggest Indian hits. Ready to watch here from ₹ 149.</b>
                            <p class="text-2xl font-light mt-4" >Join today. Cancel anytime.</p>
                            <p class="text-xl font-normal mt-4 leading-6" >Ready to watch? Enter your email to create or restart your membership.</p>
                        </div>
                        <div class="flex  h-full items-center justify-center mt-6" >
                            <input class="h-14 w-96 mx-2 px-4 bg-transparent placeholder:text-white placeholder:text-base placeholder:font-normal border border-gray-300" type='text' placeholder='Email address' />
                            <button
                                class=" h-14 w-52 bg-red-500 hover:bg-red-600 text-white text-2xl font-medium font-bold py-2 px-4 rounded"
                            >Get started &gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage