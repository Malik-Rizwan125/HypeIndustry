import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <>
    <footer className={styles.footer_color}>
  <div className="container px-5 sm:px-10 md:px-28 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col border-solid border-b-2 border-gray-600">
   
    <div className="flex flex-wrap w-full -mb-10 md:mt-0 mt-10 md:text-left text-center ">
      <div className="lg:w-1/5 md:w-1/2 w-full ">
        <h2 className="title-font font-bold text-white tracking-widest text-xl mb-5 uppercase">HypeIndustry</h2>
        <nav className="list-none mb-10">
          <li className='mb-3'>
            <a className="text-white">HypeIndustry Concept</a>
          </li>
          <li className='mb-3'>
            <a className="text-white">Buying Guide</a>
          </li>
          <li className='mb-3'>
            <a className="text-white">Selling Guide</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/5 md:w-1/2 w-full ">
        <h2 className="title-font font-bold text-white tracking-widest text-xl mb-5">Hype Offers</h2>
        <nav className="list-none mb-10">
          <li className='mb-3'>
            <a className="text-white">Footwear</a>
          </li>
          <li className='mb-3'>
            <a className="text-white">Apparel</a>
          </li>
          <li className='mb-3'>
            <a className="text-white">Accessories</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/5 md:w-1/2 w-full ">
        <h2 className="title-font font-bold text-white tracking-widest text-xl mb-5">Shipping</h2>
        <nav className="list-none mb-10">
          <li className='mb-3'>
            <a className="text-white">Shipping for buyers</a>
          </li>
          <li className='mb-3'>
            <a className="text-white">Shipping for sellers</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/5 md:w-1/2 w-full ml-auto">
        <h2 className="title-font font-bold text-white tracking-widest text-xl mb-5">Contact Us</h2>
        <nav className="list-none mb-10">
          <li className='mb-3'>
            <a className="text-white">shipping@hypeindustry.com</a>
          </li>
          <li className='mb-3'>
            <a className="text-white">sales@hypindustry.com</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className={styles.footer_color}>
      <p className="text-gray-500 py-8 text-sm text-center">© 2022 
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">HypeIndustry</a>
      </p>
  </div>
</footer>
    </>
  )
}

export default Footer