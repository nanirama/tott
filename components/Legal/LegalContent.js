import React from "react";
import Link from "next/link";
export default function LegalPage() {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div className="w-full page_content lg:mt-20 mt-16">
            <div className="max-w-4xl mx-auto flex flex-col px-4">
                <div className="lg:py-20 py-10 text-center">
                    <div className="text-base text-gray-600 font-semibold mb-2">Privacy Policy</div>
                    <h1 className="lg:text-5xl text-3xl font-semibold  md:mb-6 mb-4">We care about your privacy</h1>
                    <p className="text-xl text-gray-500 leading-8 mb-8">Your privacy is important to us at Untitled. We respect your privacy regarding any information we may collect from you across our website.</p>
                    <div className="flex flex-wrap tabs justify-center text-left sm:pt-10 pt-5 ">
                        <ul
                            className="max-w-xs mx-auto flex mb-0 flex-wrap flex-row justify-center items-center bg-gray-100 p-2 gap-2 rounded-lg border"
                            role="tablist"
                        >
                            <li>
                                <a
                                    className={
                                        "sm:text-base text-sm font-medium block py-2 2xl:px-4 sm:px-5 px-4 " +
                                        (openTab === 1
                                            ? "text-gray-700 rounded-lg bg-white shadow"
                                            : "text-gray-500")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    Legal version
                                </a>
                            </li>
                            <li>
                                <a
                                    className={
                                        "sm:text-base text-sm font-medium block py-2 2xl:px-4 sm:px-5 px-4 " +
                                        (openTab === 2
                                            ? "text-gray-700 rounded-lg bg-white shadow"
                                            : "text-gray-500")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    Simple version
                                </a>
                            </li>

                        </ul>
                        <div className="relative flex flex-col min-w-0 break-words w-full sm:mt-16 mt-10">
                            <div className="px-4 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                                        <p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </p>
                                        <h2>What information do we collect?</h2>
                                        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                                        <p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </p>
                                        <h2>How do we use your information?</h2>
                                        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                                        <p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </p>
                                        <h3>Do we use cookies and other tracking technologies?</h3>
                                        <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
                                        <h3>How long do we keep your information?</h3>
                                        <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
                                        <h3>How do we keep your information safe?</h3>
                                        <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
                                        <h2>What are your privacy rights?</h2>
                                        <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
                                        <h3>How can you contact us about this policy?</h3>
                                        <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
                                        <ol>
                                            <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                                            <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                                            <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                                        </ol>
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </p>
                                        <h2>What information do we collect?</h2>
                                        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                                        <p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </p>
                                        <h2>How do we use your information?</h2>
                                        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                                        <p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </p>
                                        <h3>Do we use cookies and other tracking technologies?</h3>
                                        <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
                                        <h3>How long do we keep your information?</h3>
                                        <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
                                        <h3>How do we keep your information safe?</h3>
                                        <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
                                        <h2>What are your privacy rights?</h2>
                                        <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
                                        <h3>How can you contact us about this policy?</h3>
                                        <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}