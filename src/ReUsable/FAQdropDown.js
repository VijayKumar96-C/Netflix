import react, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons'

const FAQdropDown = (data) => {
    const [clicked, setClicked] = useState(false)

    return (
        <div class="w-[1170px] " >
            <div class="flex items-center justify-between bg-[#2d2d2d] h-20 my-1">
                <b class=" pl-6 text-2xl font-normal text-white" >{data.data.question}</b>
                <div class="pr-6 text-white" >
                    {
                        clicked ?
                        ( <FontAwesomeIcon onClick={() => { setClicked(!clicked) }} icon={faX}  size="xl" />)
                         :
                        (<FontAwesomeIcon onClick={() => { setClicked(!clicked) }} icon={faPlus} size="2xl" />)
                    }
                    
                   
                </div>
            </div>
            {clicked &&
                <div class="flex flex-col items-center h-fit py-4 bg-[#2d2d2d] pl-6 text-white text-2xl font-normal" >
                    <p class="py-2" >{data.data.answer1}</p>
                    <p class="py-2" >{data.data.answer2 && data.data.answer2}</p>
                </div>}
        </div>
    )
}

export default FAQdropDown