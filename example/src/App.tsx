import React, { useState } from 'react'
import { Card } from 'project-isaac-components'
import 'project-isaac-components/dist/index.css'

const App = () => {
  const [data] = useState([
    {
      title: 'eCommerce',
      platforms: ['Android', 'Web', 'iOS'],
      image:
        'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'
    },
    {
      title: 'eCommerce 1',
      platforms: ['Android', 'Web', 'iOS'],
      image:
        'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'
    },
    {
      title: 'eCommerce 2',
      platforms: ['Android', 'Web', 'iOS'],
      image:
        'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'
    },
    {
      title: 'eCommerce 3',
      platforms: ['Android', 'Web', 'iOS'],
      image:
        'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'
    },
    {
      title: 'eCommerce 4',
      platforms: ['Android', 'Web', 'iOS'],
      image:
        'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'
    }
  ])
  return (
    <>
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            imgUrl='https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'
            title={item.title}
            downloads='4k'
            rating='5.0'
            platforms={item.platforms}
          />
        )
      })}
    </>
  )
}

export default App
