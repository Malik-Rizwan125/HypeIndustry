import Image from 'next/image'
import styles from '../styles/Shipping.module.scss'

const Shipping = () => {
  return (
    <>
<section className="text-gray-600 body-font">
  <div className="container px-5 sm:px-10 md:px-28 pb-10 md:pb-24 mx-auto">
    <div className="flex flex-col">
    
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
        <div className="rounded-lg  overflow-hidden">
        <div className={`${styles.selling_img}`}>
                        <Image src="/buyer.png" alt="logo" layout='fill' className={` ${styles.logo}`} />
                    </div>
        </div>
        <h2 className="text-xl sm:text-4xl font-bold title-font text-gray-900 my-8">Shipping for buyers</h2>
        <p className="text-base leading-relaxed mt-2" style={{color: '#677088'}}>All of our items are being shipped from several warehouses/stores in the USA and worldwide, and usually ships within 24 H to 5 business days depending on the seller’s shipping time.</p>
        <a className="font-bold text-xl inline-flex items-center mt-3" style={{color: 'gray'}}>Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-4 h-6 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>

      <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
        <div className="rounded-lg  overflow-hidden">
        <div className={`${styles.selling_img}`}>
                        <Image src="/buyer.png" alt="logo" layout='fill' className={` ${styles.logo}`} />
                    </div>
        </div>
        <h2 className="text-xl sm:text-4xl font-bold title-font text-gray-900 my-8">Shipping for sellers</h2>
        <p className="text-base leading-relaxed mt-2" style={{color: '#677088'}}>All of our items are being shipped from several warehouses/stores in the USA and worldwide, and usually ships within 24 H to 5 business days depending on the seller’s shipping time.</p>
        <a className="font-bold text-xl inline-flex items-center mt-3" style={{color: 'gray'}}>Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-4 h-6 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      
    </div>
  </div>
  </div>
</section>
    </>
  )
}

export default Shipping