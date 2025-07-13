import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';



const ViewPaste = () => {
   
  const {id} = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p)=> p._id === id)[0];
  console.log("final paste", paste)
  // aisa krne pr array aa rha tha and content show nhi ho rha tha ui me to hmne 0 index vali value le li to aa gya


  return (
    // <div>
      
    //   <div className='flex flex-row gap-7 place-content-evenly'>
    //     <input
    //       className='p-1 rounded-2xl mt-2 w-[66%] pl-4'
    //       type="text"
    //       placeholder=' enter title here'
    //       disabled
    //       value={paste.title}
    //     // value={title} onChange={(e) => setTitle(e.target.value)}
    //     />

    //     <button onClick={() => {
    //                 navigator.clipboard.writeText(paste.content)
    //                 toast.success("copied to clipboard");
    //                 } }>Copy
    //               </button>

    //   </div>
         
    //   <div className='mt-4  rounded-2xl'>
    //     <textarea
    //       className=' rounded 2xl mt-4 p-4  min-w-[500px]'
    //       // value={value}
    //       value={paste.content}
    //       placeholder=' enter content here'
    //       // onChange={(e) => setValue(e.target.value)}
    //       rows={20}
    //       disabled
    //     />
    //   </div>
    // </div>



    <div className="max-w-4xl mx-auto px-4 py-10 font-sans">
  {/* Title + Copy Button Row */}
  <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
    {/* Title */}
    
    <input
      type="text"
      disabled
      value={paste.title}
      placeholder="Paste title"
      className="w-full md:w-3/4 px-4 py-2 rounded-xl border border-gray-300 bg-gray-100 text-gray-700 placeholder:text-gray-400 focus:outline-none"
    />

    {/* Copy Button */}
    <button
      onClick={() => {
        navigator.clipboard.writeText(paste.content);
        toast.success("Copied to clipboard!");
      }}
      className="px-6 py-2 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold shadow-md transition-all"
    >
      Copy
    </button>
  </div>

  {/* Content Display Area */}
  <div className="mt-6">
    <textarea
      value={paste.content}
      disabled
      placeholder="Paste content"
      rows={20}
      className="w-full p-4 rounded-xl border border-gray-300 bg-gray-100 text-gray-700 placeholder:text-gray-400 focus:outline-none resize-none"
    />
  </div>
</div>




  )
}

export default ViewPaste

