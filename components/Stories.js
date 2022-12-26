import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import Story from './Story.js';
function Stories() {
  const [ suggestions, setSuggestions ] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId : faker.datatype.uuid(),
      username : faker.internet.userName(),
      avatar : faker.image.avatar(),
      email : faker.internet.email(),
      password : faker.internet.password(),
      birthdate : faker.date.birthdate(),
      registeredAt : faker.date.recent(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile) => (
        <div key={profile.userId} img={profile.avatar} username={profile.username} className="relative">
          <Story
            className=" rounded-full  border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
            src='https://links.papareact.com/zof'
            alt=""
            width={800}
            height={800}
            />
        </div>
      ))}

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
