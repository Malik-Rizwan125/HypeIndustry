
import styles from '../styles/Selling_HypeIndustry.module.scss'
const Selling_HypeIndustry = () => {
    return (
        <>

            <div className={` ${styles.Selling_HypeIndustry} primary-color`}>
                <div className="container py-5 md:py-24 m-auto">
                    <div className={` ${styles.selling_content} w-full md:w-3/5 m-auto`}>
                        <div className='px-10 sm:px-0'>
                            <h1 className="sm:text-3xl text-2xl text-center font-bold title-font mb-4 text-gray-900">Selling on HypeIndustry</h1>
                            <div className={`${styles.tab_btn_content} flex flex-col md:flex-row w-full sm:my-10`}>
                                <button className="flex mx-auto uppercase text-white bg-gray-500 border-0 py-2 justify-center w-full focus:outline-none font-semibold text-medium">become a Seller</button>
                                <button className="flex mx-auto  uppercase text-black border-0 py-2 justify-center w-full focus:outline-none font-semibold text-medium">create a listing</button>
                                <button className="flex mx-auto  uppercase text-black border-0 py-2 justify-center w-full focus:outline-none font-semibold text-medium">seller fees</button>
                                <button className="flex mx-auto  uppercase text-black border-0 py-2 justify-center w-full focus:outline-none font-semibold text-medium">CONDITION OF ITEMS</button>
                            </div>
                        </div>
                        <div id="accordion-collapse" data-accordion="collapse">
                            <h2 id="accordion-collapse-heading-1">
                                <button type="button" className="flex items-center w-full p-5 font-bold text-left text-black" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                    <span >How do I sell on HypeIndustry?</span>
                                    <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                                <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <p className="mb-2 text-black dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                    <p className="text-black dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-2">
                                <button type="button" className="flex items-center  w-full p-5 font-bold text-left text-black" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                    <span>I requested to become a SELLER, how long will it take to get approved?</span>
                                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                                <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-black dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                    <p className="text-black dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-3">
                                <button type="button" className="flex items-center  w-full p-5 font-bold text-left text-black" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                    <span>How do I delete my Account?</span>
                                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                                <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-black dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                    <p className="mb-2 text-black dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                    <p className="mb-2 text-black dark:text-gray-400">Learn more about these technologies:</p>
                                    <ul className="pl-5 text-black list-disc dark:text-gray-400">
                                        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                    </ul>
                                </div>
                            </div>

                            <h2 id="accordion-collapse-heading-5">
                                <button type="button" className="flex items-center  w-full p-5 font-bold text-left text-black" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                    <span className='
                                    font-bold'>Can I create several Seller Accounts?</span>
                                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
                                <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-black dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                    </ul>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-6">
                                <button type="button" className="flex items-center  w-full p-5 font-bold text-left text-black" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                    <span>How do I become a seller if I have a store outside the USA?</span>
                                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-6" className="hidden" aria-labelledby="accordion-collapse-heading-6">
                                <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-black dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                    <p className="mb-2 text-black dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                    <p className="mb-2 text-black dark:text-gray-400">Learn more about these technologies:</p>
                                    <ul className="pl-5 text-black list-disc dark:text-gray-400">
                                        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                    </ul>
                                </div>
                            </div>

                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Selling_HypeIndustry