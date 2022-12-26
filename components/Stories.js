import faker from "faker";
import { useEffect } from 'react';

function Stories() {
  useEffect(()=>{
    const suggestions = [...Array(20)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
      }));
      console.log(suggestions);
  },[]);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {/* Story*/}
      {/* Story*/}
      {/* Story*/}
      {/* Story*/}
      {/* Story*/}
      {/* Story*/}
    </div>
  )
}
export default Stories;
