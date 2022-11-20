import Image from 'next/image'
import styles from '../styles/Industry_purpose.module.scss'
const Industry_purpose = () => {
  return (
    <>
        <section className={styles.Industry_purpose}>
  <div className="container mx-auto flex px-5 sm:px-10 md:px-28 py-5 sm:py-10 md:py-24 md:flex-row flex-col items-center">
    <div className={`${styles.img_position} md:w-1/2 w-5/6 mb-10 md:mb-0`}>
    <Image  src="/factory-workshop.png" alt="gallery" className={` ${styles.content_img} object-cover object-center`}  width={400} height={300} />
    </div>
      <div className={`${styles.work_content} lg:flex-grow md:w-1/2 lg:ml-10 md:pl-3 flex flex-col md:items-start md:text-left items-center text-center`}>
        <div className={` ${styles.manage_content}`}>
        <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-900">Why HypeIndustry and what is it </h1>
        <p className="mb-8 mx-5 md:ml-10 leading-relaxed">Hypeindustry is a one-of-a-kind Platform + Marketplace offering Bulk/Wholesale goods from Stores, Boutiques, Wholesalers & Resellers for the Footwear, Apparel & Accessory industry! Basically a new marketplace that allows you to buy in bulk (only) footwear, apparel etc...</p>
        </div>
      </div>
      
  </div>
</section>






<section className={styles.Industry_purpose}>
  <div className="container mx-auto flex px-5 sm:px-10 md:px-28 py-5 sm:py-10 md:py-24 md:flex-row flex-col items-center">

  <div className={`${styles.work_content} lg:flex-grow md:w-1/2 lg:ml-0 md:px-3 flex flex-col md:items-start md:text-left items-center text-center`}>
        <div className={` ${styles.manage_content}`}>
          <p className="mb-8 mx-5 leading-relaxed">Hypeindustry is a one-of-a-kind Platform + Marketplace offering Bulk/Wholesale goods from Stores, Boutiques, Wholesalers & Resellers for the Footwear, Apparel & Accessory industry! Basically a new marketplace that allows you to buy in bulk (only) footwear, apparel etc...</p>

          <a className="mt-3 text-indigo-500 inline-flex items-center mr-auto ml-5">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    <div className={`${styles.img_position} md:w-1/2 w-5/6 mb-10 md:mb-0`}>
    <Image  src="/factory-workshop.png" alt="gallery" className={` ${styles.content_img} object-cover object-center`}  width={400} height={300} />
    </div>
    
      
  </div>
</section>
    </>
  )
}

export default Industry_purpose