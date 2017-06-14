/* global initTabs */
import React from 'react'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import ResourceCard from '../components/ResourceCard'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'
import Masonry from 'react-masonry-component'

export default class extends React.Component {
  state = {
    activeTab: 'all'
  }

  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params =
      'resource?per_page=100&fields=title,acf,better_featured_image'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount () {
    initTabs()
    logPageView()
  }

  render () {
    const { activeTab } = this.state
    const tabs = {
      all: 'All',
      audio: 'Audio',
      text: 'Text',
      video: 'Video'
    }
    const massonryComp = (
      <Masonry>
        {this.props.data
          .filter(post => activeTab === 'all' || activeTab === post.acf.type)
          .map((post, i) =>
            <div className='col s12 m6 l4 xl3' key={i}>
              <ResourceCard
                title={post.title.rendered}
                type={post.acf.type}
                content={post.acf.description}
                url={post.acf.url}
                price={post.acf.price}
                img={
                  post.better_featured_image !== null
                    ? post.better_featured_image.source_url
                    : ''
                }
                imgWidth={
                  post.better_featured_image !== null
                    ? post.better_featured_image.media_details.width
                    : '1'
                }
              />
            </div>
          )}
      </Masonry>
    )

    return (
      <Layout
        headerType='interior'
        title='Resources | Catechetical Institute at Franciscan University'
        description='Franciscan University has produced a prodigious amount of material over the years that can help you be a better catechist. Here you will find videos, audio clips, magazines, books, brochures, and other resources produced by University faculty, conference speakers, and an array of collaborators.'
      >
        <main id='resources'>
          <StickyNav />
          <Title
            title='Resources'
            imgPath='/static/img/campus-11.jpg'
            posY='-44vh'
          />
          <div className='section valign-wrapper white-background-flourish'>
            <div className='valign container'>

              <div className='row light flow-text'>
                <div className='col s12'>
                  <p className='flow-text'>
                    Franciscan University has produced a prodigious amount of
                    material over the years that can help you be a better
                    catechist. Here you will find videos, audio clips,
                    magazines, books, brochures, and other resources produced by
                    University faculty, conference speakers, and an array of
                    collaborators. We are pleased to make much of it available
                    for free, with a handful of items requiring a subscription
                    or purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className='section banner valign-wrapper red-background-flourish'
            id='banner'
          >

            <div className='valign container container-wide'>
              <div className='row center white-text '>
                <h2 className='light flourish-white'>Featured Resources</h2>
                <p className='flow-text'>
                  Resources marked with{' '}
                  <svg
                    fill='#fff'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M0 0h24v24H0z' fill='none' />
                    <path d='M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z' />
                  </svg>{' '}
                  are offered at no charge.
                </p>
              </div>
              <div className='row'>
                {this.props.data.map(function (post, i) {
                  if (post.acf.featured) {
                    for (let f = 0; f < 4; f++) {
                      return (
                        <div className='col s12 m6 l6 xl3' key={i}>
                          <ResourceCard
                            title={post.title.rendered}
                            type={post.acf.type}
                            content={post.acf.description}
                            url={post.acf.url}
                            price={post.acf.price}
                            img={
                              post.better_featured_image !== null
                                ? post.better_featured_image.source_url
                                : ''
                            }
                            imgWidth={
                              post.better_featured_image !== null
                                ? post.better_featured_image.media_details.width
                                : '1'
                            }
                          />
                        </div>
                      )
                    }
                  }
                })}
              </div>
            </div>
          </div>
          <div className='section valign-wrapper white-background-flourish'>
            <div className='valign container container-wide'>
              <div className='row'>
                <div className='col s12'>
                  <ul className='tabs'>
                    {Object.keys(tabs).map(tabKey =>
                      <li className='tab col s3' key={tabKey + 'li'}>
                        <a
                          key={tabKey}
                          href={'#' + tabKey}
                          className={tabKey === activeTab && 'active'}
                          onClick={() => this.setState({ activeTab: tabKey })}
                        >
                          {tabs[tabKey]}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* For each tab, we generate a row */}
              {Object.keys(tabs).map(tabKey =>
                <div className='row' id={tabKey} key={tabKey}>
                  {/* We render masonry comp only if we are in current active tab key */}
                  {activeTab === tabKey && massonryComp}
                </div>
              )}

            </div>
          </div>

          <style jsx>
            {`
            @media only screen and (min-width: 993px) {
              .container-wide {
                width: 85%;
                max-width: 2000px;
              }

              .tab a {
                font-size: 18px;
              }
                `}
          </style>
        </main>
      </Layout>
    )
  }
}
