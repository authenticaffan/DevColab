import React from "react"

const communities = [
    {
      id: 1,
      name: 'React Rockers',
      href: '#',
      imageSrc: './reactrockers.png',
      imageAlt: "",
    },
    {
        id: 2,
        name: 'Frontend Freakz',
        href: '#',
        imageSrc: './frontendfreakez.png',
        imageAlt: "",
      },
      {
        id: 3,
        name: 'Daily Debuggers',
        href: '#',
        imageSrc: './dailydebuggers.png',
        imageAlt: "",
      },
      {
        id: 4,
        name: 'Coding Buddies',
        href: '#',
        imageSrc: './codingbuddies.png',
        imageAlt: "",
      },
  ]
  
  export default function Community() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#11c591] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>  
        </div>           
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">Join our Communities</h2>
  
          <div className="mt-6 pt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {communities.map((community) => (
              <div key={community.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={community.imageAlt}
                    src={community.imageSrc}
                    className="h-100 w-80 object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-base text-gray-700 text-center">
                      <a href={community.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {community.name}
                      </a>
                    </h3>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    )
  }
  