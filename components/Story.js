function Story({img, username}) {
  return (
    <div>
        <img className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer transition duration-150 transform hover:scale-110 ease-out" />
        <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  )
}

export default Story;
