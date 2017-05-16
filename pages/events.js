import React from 'react'
import Nav from '../components/Nav';
import StickyNav from '../components/StickyNav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Head from 'next/head'
import 'isomorphic-fetch'

export default class extends React.Component {

//   static async getInitialProps () {
//   const apiUrl = '';
//   const params = '';
//   const res = await fetch(apiUrl + params)
//   const data = await res.json()
//   return { data }
// }

  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Head>
          <meta charset="utf-8" />
          <title>Events | Catechetical Institute at Franciscan University</title>
          <meta name="description" content="A static html template for Franciscan University websites." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="/static/css/materialize.css" rel="stylesheet" />
          <link href="/static/css/style.css" rel="stylesheet" />
        </Head>
        <Nav headerType="interior" />
        <main id="events">
          <StickyNav />
          <Title title="Events" imgPath="/static/img/campus-7.jpg" posY="-44vh" />
          <div className="section white-background-flourish">
            <div className="container wide-container">
              <h2 className="light center" style={{marginBottom: '0px'}}>St. John Bosco Conference</h2>
              <span className="sub-heading center">July 17-20, 2017</span>
              <div className="center">
                <a href="https://www.cvent.com/events/st-john-bosco-conference-july-17-20-2017/registration-fd101066745c42f099a1fade8be9ed1c.aspx?fqp=true%C2%A0" title="Register for the St. John Bosco Conference" target="_blank"><button className="btn waves-effect waves-light">Register</button></a>
                <a href="https://steubenvilleconferences.com/wp-content/uploads/2016/11/FNL_2017_Conf_Media_inserts_11_Bosco2.pdf" title="St. John Bosco Conference Flyer PDF"><button className="btn waves-effect waves-light" style={{marginLeft: '8px'}}>Flyer</button></a>
              </div>

              <div className="row valign-wrapper">
                <div className="col s12 m6 order-1">
                  <img className="responsive-img materialboxed" src="/static/img/st._john_bosco.jpeg" srcSet="/static/img/st._john_bosco.jpeg 300w, /static/img/st._john_bosco.jpeg 600w, /static/img/st._john_bosco.jpeg 800w, /static/img/st._john_bosco.jpeg 1200w" sizes="(min-width: 600px) 50vw, 100vw" alt="Crowd at an event." title="Event" />
                  <div className="video-container" style={{marginTop:'24px'}}>
                    <iframe width="1092" height="665" src="https://www.youtube.com/embed/GZvZ8brOYQM" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>

                <div className="col s12 m6 valign order-2">
                  <p className="flow-text">
                    Founded over 20 years ago, this amazing gathering has evolved to serve all aspects of the evangelizing and catechizing mission of the Church, with an annual array of relevant, inspiring, and practical workshops on parenting and priestly excellence, children, youth, and adult ministry, multicultural, ecumenical, and special needs service, and a host of tracks offering certification for school teachers and parish catechists, campus and youth ministers, catechetical leaders, RCIA teams, and much more. It is a place for people to share their favorite resources, discuss particular challenges facing their ministry, learn from and be mentored by some of the finest professionals in the field, and open themselves to the Holy Spirit through confession, adoration, and Mass. Many participants think of the conference as an annual re-charge of their spiritual batteries, and a true retreat for the soul. Come to the St. John Bosco conference and be renewed in your hope as you spend four days being blessed by an amazing ministry team, dynamic presenters, and fellowship with those that share your passion for Christ and the Church!
                  </p>
                  <a href="https://www.cvent.com/events/st-john-bosco-conference-july-17-20-2017/registration-fd101066745c42f099a1fade8be9ed1c.aspx?fqp=true%C2%A0" title="Register for the St. John Bosco Conference" target="_blank"><button className="btn waves-effect waves-light">Register</button></a>
                  <a href="https://steubenvilleconferences.com/wp-content/uploads/2016/11/FNL_2017_Conf_Media_inserts_11_Bosco2.pdf" title="St. John Bosco Conference Flyer PDF"><button className="btn waves-effect waves-light" style={{marginLeft: '8px'}}>Flyer</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="section red-background-flourish white-text">
            <div className="container wide-container">
              <h2 className="light center" style={{marginBottom: '0px'}}>Speaking the Truth in Love Conference</h2>
              <span className="sub-heading center">October 13-15, 2017</span>
              <div className="center">
                <a href="https://www.cvent.com/events/st-john-bosco-conference-july-17-20-2017/registration-fd101066745c42f099a1fade8be9ed1c.aspx?fqp=true%C2%A0" title="Register for the St. John Bosco Conference" target="_blank"><button className="btn waves-effect waves-light btn-inverted-white">Register</button></a>
                <a href="https://steubenvilleconferences.com/wp-content/uploads/2016/11/FNL_2017_Conf_Media_inserts_11_Bosco2.pdf" title="St. John Bosco Conference Flyer PDF"><button className="btn waves-effect waves-light btn-inverted-white" style={{marginLeft: '8px'}}>Flyer</button></a>
              </div>
              <div className="row valign-wrapper">
                <div className="col s12 m6 valign order-2">
                  <p className="flow-text">
                    This unique conference is a Silver Jubilee celebration of the gift of the Catechism of the Catholic Church to the Church of our day, and will examine ways in which the Catechism is providing a creative reference point for catechetical, cultural and ecclesial renewal through its reclamation of the Christian heritage, its explanatory power and its compelling articulation of a civilization characterized by faith, hope and love.  Franciscan University is grateful for the assistance of the USCCB's Committee on Evangelization and Catechesis in making this conference possible.  Keynotes include, Cardinal Donald Wuerl, Archbishop of Washington, Archbishop Leonard Blair, Chair, Committee for Evangelization and Catechesis, USCCB, Dr. John Cavadini, Director of the Institute for Church Life at the University of Notre Dame, Dr. Scott Hahn, Father Michael Scanlan Chair of Biblical Theology and the New Evangelization, Franciscan University, Dr. Tracey Rowland, John Paul II Research Chair of Theology, University of Notre Dame, Sydney, and Dr. Petroc Willey, Director of the Catechetical Institute and the Office of Catechetics, Franciscan University.
                  </p>
                  <a href="https://www.cvent.com/events/st-john-bosco-conference-july-17-20-2017/registration-fd101066745c42f099a1fade8be9ed1c.aspx?fqp=true%C2%A0" title="Register for the St. John Bosco Conference" target="_blank"><button className="btn waves-effect waves-light btn-inverted-white">Register</button></a>
                  <a href="https://steubenvilleconferences.com/wp-content/uploads/2016/11/FNL_2017_Conf_Media_inserts_11_Bosco2.pdf" title="St. John Bosco Conference Flyer PDF"><button className="btn waves-effect waves-light btn-inverted-white" style={{marginLeft: '8px'}}>Flyer</button></a>
                  </div>
                  <div className="col s12 m6 order-1">
                    <img className="responsive-img materialboxed" src="/static/img/speaking-the-truth.png" srcSet="/static/img/speaking-the-truth.png 300w, /static/img/speaking-the-truth.png 600w, /static/img/speaking-the-truth.png 800w, /static/img/speaking-the-truth.png 1200w" sizes="(min-width: 600px) 50vw, 100vw" alt="Speaking the Truth in Love Conference Flyer." title="Speaking the Truth in Love" />
                  </div>
                </div>
              </div>
            </div>

            <div className="section valign-wrapper black-text white-background-flourish">
              <div className="valign container wide-container">
                <h2 className="light center" style={{marginBottom: '0px'}}>Find a Nearby Event</h2>
                <div className="row light flow-text">
                  <table className="highlight responsive-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Presenter</th>
                        <th>Event/Title</th>
                        <th>Location</th>
                        <th>Event Email</th>
                        <th>Presenter Email</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>8/20/2017</td>
                        <td>Tom Crowe</td>
                        <td>Social Media Sainthood</td>
                        <td>Steubenville, OH</td>
                        <td>email@franciscan.edu</td>
                        <td>email@franciscan.edu</td>
                      </tr>
                      <tr>
                        <td>10/29/2017</td>
                        <td>Brian Sizemore</td>
                        <td>Philosophy of Photography</td>
                        <td>Steubenville, OH</td>
                        <td>email@franciscan.edu</td>
                        <td>email@franciscan.edu</td>
                      </tr>
                      <tr>
                        <td>10/29/2017</td>
                        <td>Brian Sizemore</td>
                        <td>Philosophy of Photography</td>
                        <td>Steubenville, OH</td>
                        <td>email@franciscan.edu</td>
                        <td>email@franciscan.edu</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </main>
        <Footer />


        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
        <script src="static/js/app.js"></script>

      </div>
    )
  }
}
