Id Spotify: 4718acf732be4a25aad302598974a92b

 {menu.map((item, index) => (
            <div className="flex gap-2">
              {<span className='text-5xl text-gray-200'>{item.icon}</span>}
              <button className='text-ColorText text-2xl font-semibold'>{item.name}</button>
            </div>
          ))}