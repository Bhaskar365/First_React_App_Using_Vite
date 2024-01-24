import React from 'react'

function Card({ username="Sample Text" , 
        post = "No work man", 
    }) {
    //console.log(props)
    return (
        <>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
                src="https://th.bing.com/th/id/R.0ef3f46e721fc38992d27ae094d8839d?rik=pkkoLMJ1sYH5%2bQ&riu=http%3a%2f%2fcdn.ebaumsworld.com%2fmediaFiles%2fpicture%2f1035099%2f85708057.jpg&ehk=0s2rVcOCi7BxjLnx3xC6W7QoS3gzbFcqqunGh21%2boZw%3d&risl=&pid=ImgRaw&r=0" alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, nisi. 
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                {username}
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                {post}
                            </div>
                        </figcaption>
                    </div>
            </figure>
        </>
    )
}

export default Card