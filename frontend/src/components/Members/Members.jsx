const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        '#',
    },
    {
        name: 'John Doe',
        role: 'Full-Stack Developer',
        imageUrl:
          '#',
      },
      {
        name: 'Jane Smith',
        role: 'Data Scientist',
        imageUrl:
          '#',
      },
      {
        name: 'Carlos Martinez',
        role: 'UI/UX Designer',
        imageUrl:
          '#',
      },{
        name: 'Aiko Tanaka',
        role: 'Front-End Developer',
        imageUrl:
          '#',
      },
      {
        name: 'Ravi Kumar',
        role: ' DevOps Engineer',
        imageUrl:
          '#',
      },

    // More people...
  ]
  
  export default function Members() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recently Joined Members</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            We are thrilled to welcome the newest members to the DevColab community! Our vibrant and diverse group of tech enthusiasts, developers, and innovators continues to grow. Here are a few of the talented individuals who have recently joined us:
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  