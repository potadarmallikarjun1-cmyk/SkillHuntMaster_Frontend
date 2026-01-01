import React from 'react'

const Blogs_slider = () => {
  return (
    <>
     <div className="content w-full bg-gradient-to-r from-blue-500 to-purple-600 p-2 sm:p-20 text-white font-bold shadow-2xl">
             <h1 className="text-3xl sm:text-5xl capitalize text-center mb-13">
               Welcome to panel
             </h1>
             <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 text-left">
               {[1, 2, 3, 4].map((e) => (
                 <div
                   key={e}
                   className="card-body cursor-pointer bg-gray-300 text-black h-[250px] px-5 flex items-center justify-center rounded-md"
                 >
                   <div>
                     <p>Search of Millions</p>
                     <p className="text-sm">
                       A small river named duden flows <br /> by their place and
                       supplies.
                     </p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
    </>
  )
}

export default Blogs_slider
