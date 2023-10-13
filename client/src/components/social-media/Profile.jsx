import React from 'react'
import Modal from "../modal/Modal"
import { useState, useEffect } from "react";

function Profile({ follower }) {
    const [open, setOpen] = useState(false);


    return (


        <div>

            <div
                onClick={() => {
                    setOpen(true);
                }}
                className="cursor-pointer"
            >
                <p>{follower.followeruserID_desc.name}</p>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div class="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4 bg-transparent">
                    <div class="flex justify-center items-end text-center min-h-screen sm:block">
                        <div class="bg-gray-500 transition-opacity bg-opacity-75"></div>
                        <span class="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>
                        <div class="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                            <div class="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
                                <div class="grid grid-cols-1">
                                    <div class="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg">
                                        <div class="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
                                            <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" class="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl" />
                                            <p class="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">{follower.followeruserID_desc.name}</p>
                                            <p class="mt-3 text-base leading-relaxed text-center text-gray-200">{follower.followeruserID_desc.bio}</p>
                                            <div class="w-full mt-6">
                                                <button href="#" class="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base font-medium text-white bg-indigo-600 rounded-xl transition duration-500 ease-in-out transform hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setOpen(false)} >Back</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>

    )
}

export default Profile