import Logo from './assets/logo-removebg.png'


function Title() {

  return (
      <div className="container">
          <img src={Logo} className="web-logo" alt="Project Logo"/>
          <h1 className="title-text">Spam Detection</h1>
      </div>
  )
}

export default Title;