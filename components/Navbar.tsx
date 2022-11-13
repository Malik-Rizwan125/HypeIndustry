import Image from 'next/image';
import styles from "../styles/CssStyles.module.css";
const Navbar = () => {
  return (
    <>
    
<nav className={` ${styles.header} py-0 navbar navbar-expand-lg navbar-light              justity-content-between bg-light `} >
  <div className={` ${styles.max_container} container p-0`}>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className={styles.unset_img}>
    <Image alt="Mountains" src="/logo.png" width={80}
  height={90}   className={`{styles.custom_img} bg-dark  p-2`} />
  </div>
      <ul className="navbar-nav mr-auto ps-5 text-dark">
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark fw-bold" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hypeindustry
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark fw-bold" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hype Offers
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark fw-bold" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shipping
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item active">
        <a className="nav-link text-dark fw-bold" href="#">Seller Request Form</a>
        </li>
      </ul>
    </div>
    <form className={`${styles.form} form-inline my-2 my-lg-0 `}>
          <div className={`${styles.user_img} d-flex align-items-center fw-bold`}>
          <Image alt="Mountains" src="/user.png" width={30}
              height={30}   className={` p-1`} />

              <p className='m-0'>Login</p>
          </div>
          <div>
              <Image alt="Mountains" src="/MagnifyingGlass.png" width={30}
              height={30}   className={`${styles.custom_img} p-1`} />

              <input className={` ${styles.input_form} form-control ps-sm-5 mr-sm-2`} type="search" placeholder="Brand, models…" aria-label="Search" />
          </div>
    </form>
    </div>
</nav>
    </>
  )
}

export default Navbar