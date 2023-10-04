import react from 'react'
import netflixImage from '../img/pngegg.png'

const HomePage = () => {

    return (
        <div >
            <div class="h-full w-full" >
                <div class='  h-screen w-full ' >
                    <div  >
                        <img
                            class="bg-black bg-opacity-80 absolute inset-0 h-screen w-full"
                            src='https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                        />
                        <div class="bg-black bg-opacity-70 h-screen w-full absolute inset-0" >
                        </div>
                    </div>
                    <div class="relative z-20 " >
                        <div class="flex justify-between " >
                            <img
                                class='object-cover h-10 w-36 ml-40 mt-4 '
                                src={netflixImage}
                                alt="Netflix"
                            />
                            <button class=" absolute right-36 bg-[#E50914] hover:bg-red-700 text-white font-bold py-1 px-3 rounded mt-4 " >
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
                                <input class="h-14 w-96 mx-2 px-4 bg-opacity-70 bg-[#161616] placeholder:text-white placeholder:text-base placeholder:font-normal border border-gray-600 rounded" type='text' placeholder='Email address' />
                                <button
                                    class=" h-14 w-52 bg-[#E50914] hover:bg-red-700 text-white text-2xl font-medium font-bold py-2 px-4 rounded"
                                >Get started &gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-black h-full w-full flex flex-row " >
                <div class="pt-52 pb-52 ml-36 w-[579px] text-white" >
                    <b class="text-5xl font-black" >Enjoy on your TV</b>
                    <p class="text-2xl font-normal"  >Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple Tv, Blu-ray playesr and more</p>
                </div>
                <div class="relative" >
                    <img
                        class=""
                        alt='Tv'
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                    />
                    <video autoplay playsinline muted loop
                        class="absolute inset-0 mt-[100px] ml-[83px] w-[468px]"
                    >
                        <source
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                            type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>

    )
}

export default HomePage