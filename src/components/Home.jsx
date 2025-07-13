import React, { useEffect, useState  } from 'react'
import {useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPaste } from '../redux/pasteSlice';
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams , setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId")
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes)

   function handleClick(e){
        if(title == ""){
          pleaseCreate();
        }
        else{
          createPaste();
        }
   }

   useEffect(() => {
    if(pasteId){
      const paste = allPastes.find((p) => p._id === pasteId)
      setTitle(paste.title);
      setValue(paste.content);
    }
     
   }, [pasteId])
   


   function pleaseCreate(){
    toast.error("please create the paste")
   }

  function createPaste(e){
  
    const paste = {
        title : title,
        content : value,
        _id : pasteId ||  Date.now().toString(36),
        createdAt : new Date().toISOString(),
    }

  if(pasteId){
    // update
    dispatch(updateToPaste(paste));
  }
  else{
    // create
     dispatch(addToPastes(paste));
  }

  //after updation or creation
  setTitle('');
  setValue('');
  setSearchParams({});
}

  return (
  // <div>
  //     <div className='flex flex-row gap-7 place-content-between'>
  //     <input
  //       className='p-1 rounded-2xl mt-2 w-[66%] pl-4'
  //       type="text"
  //       placeholder=' enter title here'
  //       value={title} onChange={(e) => setTitle(e.target.value)} 
  //     />

  //     <button 
  //      onClick={handleClick}
  //     className='p-2 rounded-2xl mt-2 bg-black text-white'>
  //       {
  //         pasteId ? "Update My Paste" : "Create My Paste"
  //       }
  //     </button>
  //   </div>

  //   <div className='mt-9 bg-black rounded-2xl'>
  //     <textarea 
  //         className=' rounded 2xl mt-4 p-4  min-w-[500px]'
  //         value={value}
  //         placeholder=' enter content here'
  //         onChange={(e) => setValue(e.target.value)}
  //         rows={20}
      
  //     />
  //   </div>
  // </div>



  <div className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-blue-100 p-6 font-sans">
  <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-8">
    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 drop-shadow-md">
      📝 {pasteId ? "Update Your Paste" : "Create a New Paste"}
    </h1>

    {/* Input & Button Row */}
    <div className="flex flex-col md:flex-row gap-6 md:justify-between">
      <input
        className="flex-1 p-3 rounded-xl bg-white/90 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={handleClick}
        className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-black font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
      >
        {pasteId ? "🔄 Update Paste" : "✨ Create Paste"}
      </button>
    </div>

    {/* Textarea */}
    <div className="mt-8">
      <textarea
        className="w-full min-h-[300px] p-4 rounded-xl bg-white/90 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all resize-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter content here..."
        rows={15}
      />
    </div>
  </div>
</div>




  







  // styling 






















// <div className="min-h-screen bg-gray-50 p-6 font-sans">
//   <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 space-y-8 transition-all duration-300 animate-fadeIn">

//     {/* Header */}
//     <h1 className="text-3xl font-bold text-gray-900 text-center tracking-tight mb-4 animate-fadeIn delay-100">
//       📝 {pasteId ? "Update Your Paste" : "Create a New Paste"}
//     </h1>

//     {/* Input and Button */}
//     <div className="flex flex-col md:flex-row gap-6 items-center animate-fadeIn delay-200">
//       <input
//         type="text"
//         placeholder="Enter title here"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="flex-grow rounded-xl border border-gray-300 px-5 py-3 text-gray-800 placeholder-gray-400 
//           focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 
//           transition duration-300 ease-in-out shadow-sm hover:shadow-md"
//       />
//       <button
//         onClick={createPaste}
//         className="rounded-xl bg-indigo-600 px-8 py-3 text-white font-semibold 
//           hover:bg-indigo-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
//       >
//         {pasteId ? "Update My Paste" : "Create My Paste"}
//       </button>
//     </div>

//     {/* Textarea */}
//     <textarea
//       placeholder="Enter content here"
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//       rows={20}
//       className="w-full rounded-2xl border border-gray-300 p-6 text-gray-900 placeholder-gray-400 resize-none
//         focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50
//         transition duration-300 ease-in-out shadow-sm hover:shadow-md animate-fadeIn delay-300"
//     />
//   </div>
// </div>


















//   <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 text-white font-sans">
//   <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8">
//     <h1 className="text-4xl font-bold mb-6 text-center text-white drop-shadow-lg">📝 Create or Update Your Paste</h1>

//     <div className="flex flex-col md:flex-row gap-6 md:justify-between">
//       <input
//         className="flex-1 p-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         type="text"
//         placeholder="Enter title here"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <button
//         onClick={createPaste}
//         className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg"
//       >
//         {pasteId ? "🔄 Update My Paste" : "✨ Create My Paste"}
//       </button>
//     </div>

//     <div className="mt-8">
//       <textarea
//         className="w-full h-[400px] p-5 rounded-2xl bg-white/20 text-white placeholder-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
//         value={value}
//         placeholder="Enter content here..."
//         onChange={(e) => setValue(e.target.value)}
//         rows={20}
//       />
//     </div>
//   </div>
// </div>









// {/* <div className="min-h-screen bg-gray-100 py-10 px-4 font-inter">
//   <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-8 transition-all duration-300">
//     <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
//       📝 {pasteId ? "Update Your Paste" : "Create a New Paste"}
//     </h1>

//     <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center mb-6">
//       <input
//         className="flex-1 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//         type="text"
//         placeholder="Enter title here"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <button
//         onClick={createPaste}
//         className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium shadow-md transition-all"
//       >
//         {pasteId ? "Update Paste" : "Create Paste"}
//       </button>
//     </div>

//     <div>
//       <textarea
//         className="w-full h-80 border border-gray-300 rounded-2xl px-5 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 placeholder-gray-400 transition"
//         placeholder="Enter content here..."
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//     </div>
//   </div>
// </div> */}













  )
}

export default Home
