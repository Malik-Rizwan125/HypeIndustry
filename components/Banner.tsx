import Image from 'next/image';
import styles from "../styles/CssStyles.module.css";
const Banner = () => {
  return (
    <>
<div className={`${styles.banner_section} `}>
    <div className={`${styles.max_container} container p-0`}>
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
                <div className={`${styles.industry_img}`}>
                <Image  src="/Vector.png"  layout="fill" className={`p-1`} />
                </div>
            </div>
        </div>
    </div>
</div>

    {/* <div className={`${styles.banner_section} `}>
        <div className={` ${styles.max_container} container p-0`}>
          <div className= {`${styles.banner_content} `}>
            <h1 className='m-0'>New marketplace that allows you to buy in bulk</h1>
            <p className='m-0 py-4'>Hypeindustry is a one-of-a-kind Platform+Marketplace offering Bulk/Wholesale goods from Stores, Boutiques,Wholesalers & Resellers for the Footwear,Apparel & Accessory industry.</p>

            <button className={` ${styles.read_btn} rounded-pill text-white`}>Read more</button>
          </div>
        </div>
    </div> */}
    </>
  )
}

export default Banner