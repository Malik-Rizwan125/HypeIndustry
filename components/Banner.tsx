import Image from 'next/image'
import styles from '../styles/Banner.module.scss'

const Banner = () => {
    return (
        <>
            <section className={styles.banner_section}>
                <div className="container-fluid mx-auto ">
                    <div className= {`${styles.mange_banner_content} mx-auto`}>
                 
                                <div className={`${styles.banner_content} hidden lg:block w-2/6 sm:px-10 px-6`} >
                                
                                </div>
                                
                          
                                <div className={`${styles.banner_img} w-4/6 sm:py-24 py-16 sm:px-10 px-6`}>
                                    <Image alt="gallery" className="object-cover object-center" src="/Vector.png" layout="fill" />
                                </div>
                                <div className={` ${styles.text_set} z-10 `}>
                                        <h2 className="text-lg sm:text-xl md:text-5xl font-medium title-font ">New marketplace that allows you to buy in bulk</h2>
                                        <p className="leading-relaxed my-5">Hypeindustry is a one-of-a-kind Platform+Marketplace offering Bulk/Wholesale goods from Stores, Boutiques,Wholesalers & Resellers for the Footwear,Apparel & Accessory industry.</p>
                                        <button className={` ${styles.read_btn}  mt-4 text-white border-0 py-2 px-8 rounded-full text-lg`}>Read more</button>
                                    </div>
                            
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner