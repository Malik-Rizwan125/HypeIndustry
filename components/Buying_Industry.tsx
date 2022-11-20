
import styles from '../styles/Buying_Industry.module.scss'
const Buying_Industry = () => {
  return (
    <>
    <section className={styles.Buying_Industry}>
  <div className="container px-5 sm:px-10 md:px-28 py-10 md:py-24 mx-auto">
    <h1 className="sm:text-3xl md:text-5xl text-2xl font-bold title-font text-center text-gray-900 mb-10 md:mb-20">Buying on Hypeindustry is simple!</h1>
    <div className= {`${styles.bg_Rectangle_img} flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6`}>
        <div className='lg:w-1/2 '>
            <div className="p-4 lg:w-4/6 flex">
                <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-black text-indigo-500 mb-4 flex-shrink-0">
                <p className='text-white font-bold text-2xl'>1</p>
                </div>
                <div className="flex-grow pl-6">
                <p className="leading-relaxed text-sm" style={{color: '#677088'}} >Create a buyer account / profile, with all required fields: Full name, Company name or Store Name, Address, Credit Card info etc...</p>
               
                </div>
            </div>
      </div>
      <div className='lg:w-1/2'>
            <div className="p-4 lg:w-4/6 lg:ml-auto flex">
                <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-black text-indigo-500 mb-4 flex-shrink-0">
                <p className='text-white font-bold text-2xl'>2</p>
                </div>
                <div className="flex-grow pl-6">
                <p className="leading-relaxed text-sm" style={{color: '#677088'}} >You will then receive email alerts whenever any seller posts an offer on the platform. Then it is up to you to click on the link to view the offer or not. Of course, each email alert contains the offer details and models, so you know what has been posted, and if it is in any of your interest to purchase or not.</p>
               
                </div>
            </div>
      </div>

      <div className='lg:w-1/2'>
            <div className="p-4 lg:w-4/6 flex">
                <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-black text-indigo-500 mb-4 flex-shrink-0">
                <p className='text-white font-bold text-2xl'>3</p>
                </div>
                <div className="flex-grow pl-6">
                <p className="leading-relaxed text-sm" style={{color: '#677088'}} >The offer can either be: an “open stock inventory”, meaning you can select any sizes you want from the seller stock with of course a minimum quantity imposed by the seller (if he wants to), or a “buy all /take all offer”, which means that the seller wants you to buy all the quantities in that specific model. Usually “buy all deals” have a higher discounted purchase price. Keep in mind, once you place an order on an open stock model, the stock is live and updated right away for the next buyer, which will reflect less quantities in the inventory...until it reaches a: “sold out” status.</p>
               
                </div>
            </div>
      </div>
      <div className='lg:w-1/2'>
            <div className="p-4 lg:w-4/6 lg:ml-auto flex">
                <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-black text-indigo-500 mb-4 flex-shrink-0">
                <p className='text-white font-bold text-2xl'>4</p>
                </div>
                <div className="flex-grow pl-6">
                <p className="leading-relaxed text-sm" style={{color: '#677088'}} >Once logged in, simply view the offer and click on any of the models you wish to order by clicking on the “open stock / or buy all” buttons.</p>
               
                </div>
            </div>
      </div>
     
      <div className='lg:w-1/2'>
            <div className="p-4 lg:w-4/6 flex">
                <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-black text-indigo-500 mb-4 flex-shrink-0">
                <p className='text-white font-bold text-2xl'>5</p>
                </div>
                <div className="flex-grow pl-6">
                <p className="leading-relaxed text-sm" style={{color: '#677088'}} >Once the seller approves the order, (this might take 10 min or up to to 3 days) your credit card will be charged, and you will receive an email with a tracking number. NO charges will be done unless orders are APPROVED ! We created a dashboard for buyers so you can see all the information you need: invoice number, tracking number, carrier /shipper, pdf downloadable invoices etc...Now, you have your own excel accounting sheet with you all the time.</p>
               
                </div>
            </div>
      </div>
      <div className='lg:w-1/2'>
            <div className="p-4 lg:w-4/6 lg:ml-auto flex">
                <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-black text-indigo-500 mb-4 flex-shrink-0">
                <p className='text-white font-bold text-2xl'>6</p>
                </div>
                <div className="flex-grow pl-6">
                <p className="leading-relaxed text-sm" style={{color: '#677088'}} >Please keep in mind: there are no refunds, no returns, no order cancellations, all sales are finals unless the wrong items were shipped! This is a B2B Platform.</p>
               
                </div>
            </div>
      </div>
    </div>
    <button className={`${styles.learn_btn} flex mx-auto mt-16 text-white border-0 py-2 px-8 rounded-full text-lg`}>Learn more</button>
  </div>
</section>
    </>
  
  
  )
}

export default Buying_Industry