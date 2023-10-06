import react from 'react'
import netflixImage from '../img/pngegg.png'
import FAQdropDown from '../ReUsable/FAQdropDown'
import EmailCred from '../ReUsable/EmailCred'

const HomePage = () => {

    const FAQ = [
        {
            "No": 1,
            "question": "What is Netflix?",
            "answer1": "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
            "answer2": "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        },
        {
            "No": 2,
            "question": "How much does Netflix cost?",
            "answer1": "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
        },
        {
            "No": 3,
            "question": "Where can I watch?",
            "answer1": "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
            "answer2": "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        },
        {
            "No": 4,
            "question": "How do I cancel?",
            "answer1": "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        },
        {
            "No": 5,
            "question": "What can I watch on Netflix?",
            "answer1": "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        },
        {
            "No": 6,
            "question": "Is Netflix good for kids?",
            "answer1": "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
            "answer2": "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        }

    ]

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
                            <EmailCred/>
                            {/* <div class="flex  h-full items-center justify-center mt-6" >
                                <input class="h-14 w-96 mx-2 px-4 bg-opacity-70 bg-[#161616] placeholder:text-white placeholder:text-base placeholder:font-normal border border-gray-600 rounded" type='text' placeholder='Email address' />
                                <button
                                    class=" h-14 w-52 bg-[#E50914] hover:bg-red-700 text-white text-2xl font-medium font-bold py-2 px-4 rounded"
                                >Get started &gt;</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class=" h-2 w-full bg-[#232323]" >
            </div>
            <div class="bg-black h-full w-full flex flex-row " >
                <div class="pt-52 pb-52 ml-36 w-[579px] text-white" >
                    <b class="text-5xl font-black" >Enjoy on your TV</b>
                    <p class="text-2xl font-normal"  >Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple Tv, Blu-ray playesr and more</p>
                </div>
                <div class="relative">
                    <video autoplay playsinline muted loop class="absolute inset-0 mt-[100px] ml-[83px] w-[468px] z-0">
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                    </video>
                    <img class="relative z-1" alt="Tv" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                </div>
            </div>
            <div class=" h-2 w-full bg-[#232323]" >
            </div>
            <div class="bg-black flex flex-row" >
                <div class="relative" >
                    <img
                        alt="Mobile"
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                    />
                    <div class=" absolute inset-0 bg-black mt-[330px]  w-80 h-24 ml-40 flex flex-row border border-gray-500 rounded-lg" >
                        <div class="pt-2 pl-2">
                            <img
                                class="w-[57px] h-[80px]"
                                src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
                            />
                        </div>
                        <div class="pt-4 pl-2" >
                            <b class="text-white">Stranger Things</b>
                            <p class="text-[#0071eb]" >Downloading...</p>
                        </div>
                        <div class="w-12 h-12 mt-6 ml-16" >
                            <img
                                alt="download gif"
                                src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif'
                            />
                        </div>
                    </div>
                </div>
                <div class="pt-52 pb-52 ml-36 w-[579px] text-white" >
                    <b class="text-5xl font-black" >Download your shows to watch offline</b>
                    <p class="text-2xl font-normal" >save your favourites easily and always have something to watch.</p>
                </div>
            </div>
            <div class=" h-2 w-full bg-[#232323]" >
            </div>
            <div class="bg-black flex flex-row pb-16" >
                <div class="pt-52 pb-52 ml-36 w-[579px] text-white">
                    <b class="text-5xl font-black">Watch everywhere</b>
                    <p class="text-2xl font-normal">Stream unlimited movied and TV shows on your phone, tablet, laptop and TV.</p>
                </div>
                <div class="relative mt-16">
                    <video autoplay playsinline muted loop class="absolute inset-0 mt-[50px] ml-[120px] w-[395px] z-0">
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                    </video>
                    <img class="relative z-1" alt="Tv Images" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
                </div>
            </div>
            <div class=" h-2 w-full bg-[#232323]" >
            </div>
            <div class="bg-black flex flex-row" >
                <div class="pl-24" >
                    <img
                        alt="Mobile"
                        src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
                    />
                </div>
                <div class="pt-40 pb-52 ml-8 w-[579px] text-white" >
                    <b class="text-5xl font-black" >Create profiles for kids</b>
                    <p class="text-2xl font-normal" >Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>
            <div class=" h-2 w-full bg-[#232323]" >
            </div>
            <div class="bg-black flex flex-col items-center justify-center pt-20 pb-16" >
                <b class="text-5xl font-black text-center text-white pb-4" >Frequently Asked question</b>
                {
                    FAQ.map((data) => {
                        return <FAQdropDown data={data} />
                    })
                }
                <p class="text-xl text-white font-normal mt-10 leading-6" >Ready to watch? Enter your email to create or restart your membership.</p>
                <EmailCred/>
            </div>
            <div class=" h-2 w-full bg-[#232323]" >
            </div>
            <div class="bg-black h-full pt-16 pl-36 text-white pb-16" >
                <p>Questions? Call +91 9344958706</p>
                <div class="pt-4 pb-4" >
                    <ul class="grid grid-rows-4 grid-flow-col gap-4 underline" >
                        <li>FAQ</li>
                        <li>Account</li>
                        <li>Investor Relations</li>
                        <li>Ways to Watch</li>
                        <li>Privacy</li>
                        <li>Corporate Information</li>
                        <li>Speed Test</li>
                        <li>Only on Netflix</li>
                        <li>Help Centre</li>
                        <li>Media Centre</li>
                        <li>Jobs</li>
                        <li>Terms of Use</li>
                        <li>Cookie Preferences</li>
                        <li>Contact Us</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
                <p >Netflix India</p>
            </div>
        </div>

    )
}

export default HomePage