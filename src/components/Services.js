import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktains',
        info:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda.',
      },
      {
        icon: <FaHiking />,
        title: 'free hicking',
        info:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'free van',
        info:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda.',
      },
      {
        icon: <FaBeer />,
        title: 'free Beer',
        info:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda.',
      },
    ],
  }
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
