//write rfsc for the boiler code
import React from 'react'

function card({channel,btntext}) {
  //console.log("Props",props);
  console.log(channel)
  console.log(btntext)
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="p-4">
    <h5 className="mb-2 text-slate-800 text-xl font-semibold">
      Website Review Check Update from Our Team in "{channel}"
    </h5>
    <p className="text-slate-600 leading-normal font-light">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
    </p>
 
    <button className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      {btntext}
    </button>
  </div>
</div>
  )
}

export default card