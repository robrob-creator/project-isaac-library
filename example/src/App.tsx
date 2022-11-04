import React, { useState } from 'react'
import { Card, Footer } from 'project-isaac-components'
import 'project-isaac-components/dist/index.css'

const App = () => {
  const [data] = useState([
    {
      title: 'eCommerce',
      platforms: [
        { name: 'Android', icon: 'https://via.placeholder.com/12x12' },
        { name: 'Web', icon: 'https://via.placeholder.com/12x12' },
        { name: 'iOS', icon: 'https://via.placeholder.com/12x12' }
      ],
      stacks: [{ name: 'Linux' }, { name: 'MySQL' }, { name: 'C#' }],
      image:
        'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'
    },
    {
      title: 'eCommerce 1',
      stacks: [{ name: 'Linux' }, { name: 'MySQL' }, { name: 'C#' }],
      platforms: [
        { name: 'Android', icon: 'https://via.placeholder.com/12x12' },
        { name: 'Web', icon: 'https://via.placeholder.com/12x12' },
        { name: 'iOS', icon: 'https://via.placeholder.com/12x12' }
      ],
      image:
        'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'
    },
    {
      title: 'eCommerce 2',
      stacks: [{ name: 'Linux' }, { name: 'MySQL' }, { name: 'C#' }],
      platforms: [
        { name: 'Android', icon: 'https://via.placeholder.com/12x12' },
        { name: 'Web', icon: 'https://via.placeholder.com/12x12' },
        { name: 'iOS', icon: 'https://via.placeholder.com/12x12' }
      ],
      image:
        'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'
    },
    {
      title: 'eCommerce 3',
      stacks: [{ name: 'Linux' }, { name: 'C#' }],
      platforms: [
        { name: 'Android', icon: 'https://via.placeholder.com/12x12' },
        { name: 'Web', icon: 'https://via.placeholder.com/12x12' }
      ],
      image:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    }
  ])
  return (
    <div style={{ margin: '5%' }}>
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            imgUrl={item.image}
            title={item.title}
            downloads='4k'
            rating='5.0'
            platforms={item.platforms}
            stacks={item.stacks}
          />
        )
      })}
      <Footer />
    </div>
  )
}

export default App
