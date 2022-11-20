import Image from 'next/image'
import styles from '../styles/Services.module.scss'

export default function Services() {
  return (
    <>
      <section className={styles.services_banner}>
        <div className="container mx-auto flex px-5 sm:px-10 lg:px-28 pb-10 md:pt-5 md:pb-24 lg:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
            <h1 className="title-font text-lg sm:text-3xl text-3xl mb-5 sm:mb-8 font-medium text-white bg-black py-1 px-2 lg:mr-8">Why HypeIndustry and what is it exactly?
            </h1>
            <p className=" text-lg" style={{ color: '#677088' }}>Hypeindustry is a one-of-a-kind Platform + Marketplace offering Bulk/Wholesale goods from Stores, Boutiques, Wholesalers & Resellers for the Footwear, Apparel & Accessory industry! Basically a new marketplace that allows you to buy in bulk (only) footwear, apparel etc... Buy cheaper because of the bulk volume discount and resell worldwide to make a small margin and keep the volume and recurrence active! The key to make your money fast..</p>

          </div>
          <div className='lg:w-1/2 w-full'>
            <div className={` ${styles.img_container}`}>
              <Image alt="content" className={` ${styles.Services_img} object-cover object-top`} src="/icons.png" layout='fill' />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.relationShip}>
        <div className="container mx-auto flex px-5 sm:px-10 py-5 md:py-24 lg:px-28  lg:flex-row flex-col items-center">

          <div className='lg:w-1/2 w-full'>
            <div className={` ${styles.img_container}`}>
              <Image alt="content" className={` ${styles.Services_img} object-cover object-top`} src="/Group 3031.png" layout='fill' />
            </div>
          </div>
          <div className="lg:flex-grow lg:w-1/2 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center lg:ml-20">
            <h1 className="title-font text-lg md:text-3xl sm:text-2xl mb-5 sm:mb-8 font-medium text-white bg-black py-1 px-2 lg:mr-8">20 years of relationships + experience
            </h1>
            <p className="text-lg" style={{ color: '#677088' }}>The idea of building a B2B marketplace, came to us a few years ago. Experiencing the process of buying and selling in bulk: footwear, apparel etc... since early 2002 we’ve encountered issues and restrictions , we also faced lots of question from sellers and buyers, shipping issues etc... But at the end of this journey, we are now providing answers and solutions that will help our network and partners!</p>

          </div>
        </div>
      </section>

      <section className={styles.business}>
        <div className="container mx-auto px-5 sm:px-10 py-5 md:py-24 lg:px-28 items-center">
          <div className='flex lg:flex-row flex-col'>
            <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
              <h1 className="title-font text-lg sm:text-3xl text-3xl mb-5 sm:mb-8 font-bold text-black py-1 px-2 lg:mr-8">Always the same issue through the years
              </h1>
              <p className="text-lg " style={{ color: '#677088' }}>Many years have past of doing this bulk /wholesale trading business.And it is always the same questions that came to us from our suppliers: “Hey can you move apparel? I have too much of this brand etc...”, or “Can you buy any accessories?”, “Can you move soccer shoes?”, “I received another shipment of this model ;can you buy more or help me move more now?” etc...
              </p>
              <p className="text-lg pt-4" style={{ color: '#677088' }}>
                Well the answer was: “We don’t have any clients for those items, or let me ask around”</p>

            </div>
            <div className='lg:w-1/2 w-full'>
              <div className={` ${styles.img_container}`}>
                <Image alt="content" className={` ${styles.Services_img} object-cover object-top`} src="/Group.png" layout='fill' />
              </div>
            </div>
          </div>

          <div className='flex lg:flex-row flex-col'>

            <div className='lg:w-1/2 w-full'>
              <div className={` ${styles.Utopia_img}`}>
                <Image alt="content" className={` ${styles.Services_img} object-cover object-top`} src="/Utopia.png" layout='fill' />
              </div>
            </div>

            <div className="lg:flex-grow lg:w-1/2 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center lg:ml-20">
              <h1 className="title-font text-lg sm:text-3xl text-3xl mb-5 sm:mb-8 font-bold text-black py-1 px-2 lg:mr-8">Utopia </h1>
              <p className="text-lg " style={{ color: '#677088' }}>In a utopian marketplace, the best option would be to move a bunch of footwear/apparel or else, in bulk (one shot), to: another reseller, store or wholesaler somewhere on planet earth.
              </p>
              <p className="text-lg pt-4" style={{ color: '#677088' }}>
                Well, there are no B2B marketplaces anywhere that deal with: limited/ hyped goods, or a marketplace where stores (with no brand account) & reseller could buy from (in bulk prices footwear, apparel, accessories) without any boundaries or questions! So let's try and create that platform: so other store owners & resellers/wholesalers worldwide could profit from!</p>

            </div>

          </div>
        </div>
      </section>

      <section className={styles.reality}>
        <div className="container mx-auto px-5 sm:px-10 py-5 md:py-24 lg:px-28 items-center">
          <div className='flex lg:flex-row flex-col md:pb-10'>
            <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
              <h1 className="title-font text-lg sm:text-3xl text-3xl mb-5 sm:mb-8 font-bold text-black py-1 px-2 lg:mr-8">Always the same issue through the years
              </h1>
              <p className="text-lg " style={{ color: '#677088' }}>Many years have past of doing this bulk /wholesale trading business.And it is always the same questions that came to us from our suppliers: “Hey can you move apparel? I have too much of this brand etc...”, or “Can you buy any accessories?”, “Can you move soccer shoes?”, “I received another shipment of this model ;can you buy more or help me move more now?” etc...
              </p>
              <p className="text-lg pt-4" style={{ color: '#677088' }}>
                Well the answer was: “We don’t have any clients for those items, or let me ask around”</p>

            </div>
            <div className='lg:w-1/2 w-full'>
              <div className={` ${styles.img_container}`}>
                <Image alt="content" className={` ${styles.Services_img} object-cover object-top`} src="/reality1.png" layout='fill' />
              </div>
            </div>
          </div>

          <div className='flex lg:flex-row flex-col'>

            <div className='lg:w-1/2 w-full'>
              <div className={` ${styles.Utopia_img}`}>
                <Image alt="content" className={` ${styles.Services_img} object-cover object-top`} src="/reality2.png" layout='fill' />
              </div>
            </div>

            <div className="lg:flex-grow lg:w-1/2 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center lg:ml-20">
              <h1 className="title-font text-lg sm:text-3xl text-3xl mb-5 sm:mb-8 font-bold text-black py-1 px-2 lg:mr-8">Utopia </h1>
              <p className="text-lg " style={{ color: '#677088' }}>In a utopian marketplace, the best option would be to move a bunch of footwear/apparel or else, in bulk (one shot), to: another reseller, store or wholesaler somewhere on planet earth.
              </p>
              <p className="text-lg pt-4" style={{ color: '#677088' }}>
                Well, there are no B2B marketplaces anywhere that deal with: limited/ hyped goods, or a marketplace where stores (with no brand account) & reseller could buy from (in bulk prices footwear, apparel, accessories) without any boundaries or questions! So let's try and create that platform: so other store owners & resellers/wholesalers worldwide could profit from!</p>

            </div>

          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font">
        <div className="container px-5 sm:px-10 md:px-28 pb-10 md:pb-24 mx-auto">
          <div className="flex flex-col">

            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg  overflow-hidden">
                  <div className={`${styles.selling_img}`}>
                    <Image src="/Package.png" alt="logo" layout='fill' className={` ${styles.logo}`} />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold title-font text-gray-900 my-6">SHIPPING</h2>
                <p className="text-lg" style={{ color: '#677088' }}>Sellers (stores and resellers) do not need to worry about shipment.We use the main carrier with tracking all the time !</p>
                
              </div>

              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg  overflow-hidden">
                  <div className={`${styles.selling_img}`}>
                    <Image src="/UserGear.png" alt="logo" layout='fill' className={` ${styles.logo}`} />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold title-font text-gray-900 my-6">ANONYMITY</h2>
                <p className="text-lg" style={{ color: '#677088' }}>By using this platform, nobody knows who the sellers are. Anonymity is respected!</p>
                
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg  overflow-hidden">
                  <div className={`${styles.selling_img}`}>
                    <Image src="/ShieldCheck.png" alt="logo" layout='fill' className={` ${styles.logo}`} />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold title-font text-gray-900 my-6">BRAND INTEGRITY</h2>
                <p className="text-lg" style={{ color: '#677088' }}>Reputable brands dislike to see their product sell for significantly under retail and doing so, may cause stores to lose their accounts.</p>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg  overflow-hidden">
                  <div className={`${styles.selling_img}`}>
                    <Image src="/LinkBreak.png" alt="logo" layout='fill' className={` ${styles.logo}`} />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold title-font text-gray-900 my-6">FREEDOM</h2>
                <p className="text-lg" style={{ color: '#677088' }}>Freedom for Stores/Resellers to list in bulk any inventory they want at any time they want! Inventory should sell faster this way! Better than offering a 10%-35% off coupons on their website and selling them one item at a time... let’s move the inventory ASAP! Stores are not museums: Boxes, tape, rent,electricity bill, payroll: those have a cost!</p>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg  overflow-hidden">
                  <div className={`${styles.selling_img}`}>
                    <Image src="/ArrowsCounter.png" alt="logo" layout='fill' className={` ${styles.logo}`} />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold title-font text-gray-900 my-6">”FLA$H FLIPPING”</h2>
                <p className="text-lg" style={{ color: '#677088' }}>This option (for the top buyers only) allows you to re-flip a bundle or amount of items ( by adding a margin per pair) ,you just purchased , and flip it back on our platform for a limited time (1 hour window)! Creating a new avenue of profit for our clients! The profit/commission is paid right away if the bundle sells !Making money on a click of a button .The new bulk traders have arrived !</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
