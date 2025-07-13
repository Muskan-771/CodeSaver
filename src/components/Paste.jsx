import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../redux/pasteSlice'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  console.log(pastes)
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDelete(pasteId){
      dispatch(removeFromPaste(pasteId))
  }


  return (
    // <div>
    //   <input
    //     className='p-2 rounded-2xl min-w-[500px] mt-5'
    //     type='search'
    //     placeholder=' search here'
    //     value={searchTerm}
    //     onChange={(e) => setSearchTerm(e.target.value)}
    //   />

    //   <div className='flex flex-col gap-5 mt-5' >
    //     {
    //       filteredData.length > 0 &&
    //       filteredData.map((paste) => {
    //         console.log(paste)
    //         return (
    //           <div key={paste._id} className='border rounded-2xl bg-slate-400 '>
    //             <div>
    //               {paste.title}
    //             </div>
    //             <div>
    //               {paste.content}
    //             </div>
    //             <div className='flex flex-row gap-4 place-content-evenly p-2 '>

    //               <button >
    //                 <Link
    //                    to={`/?pasteId=${paste?._id}`}
    //                 >
    //                 Edit
    //                 </Link>
    //               </button>

    //               <button>
    //                 <Link
    //                    to={`/pastes/${paste._id}`}
    //                 >
    //                 View
    //                 </Link>

    //               </button>

    //               <button onClick={() => handleDelete(paste?._id)}>Delete</button>

    //               <button onClick={() => {
    //                 navigator.clipboard.writeText(paste?.content)
    //                 toast.success("copied to clipboard");
    //                 } }>Copy
    //               </button>

    //               {/* <button>Share</button> */}

    //             </div>

    //             <div>
    //               {paste.createdAt}
    //             </div>

    //           </div>
    //         )
    //       })
    //     }
    //   </div>

    // </div>




    <div className="max-w-5xl mx-auto px-4 py-8 font-sans">
  {/* Search bar */}
  <input
    className="w-full max-w-xl p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all placeholder:text-gray-500"
    type="search"
    placeholder="🔍 Search pastes..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  {/* Paste cards */}
  <div className="mt-8 flex flex-col gap-6">
    {filteredData.length > 0 ? (
      filteredData.map((paste) => (
        <div
          key={paste._id}
          className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 transition-transform hover:scale-[1.01]"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{paste.title}</h2>
          <p className="text-gray-600 whitespace-pre-line mb-4 max-h-40 overflow-y-auto">
            {paste.content.length > 300
              ? paste.content.slice(0, 300) + "..."
              : paste.content}
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            {/* Edit */}
            <Link
              to={`/?pasteId=${paste._id}`}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-600 text-black font-medium transition"
            >
              Edit
            </Link>

            {/* View */}
            <Link
              to={`/pastes/${paste._id}`}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-600 text-black font-medium transition"
            >
              View
            </Link>

            {/* Delete */}
            <button
              onClick={() => handleDelete(paste._id)}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-600 text-black font-medium transition"
            >
              Delete
            </button>

            {/* Copy */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(paste.content);
                toast.success("Copied to clipboard!");
              }}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-600 text-black font-medium transition"
            >
              Copy
            </button>
          </div>

          {/* Created At */}
          <div className="text-right text-sm text-gray-500 mt-4">
            {new Date(paste.createdAt).toLocaleString()}
          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-500 text-center mt-8 text-lg">No pastes found.</p>
    )}
  </div>
</div>




  )
}

export default Paste
