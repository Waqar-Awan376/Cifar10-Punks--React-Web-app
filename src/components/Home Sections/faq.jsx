import React from "react";
const Faq=()=>
{
    return(
        <div className="my-5 p-3 background-overlay height-500px">
            <h1 className="my-5 text-center">FAQ</h1>
            <div className="text-white m-auto w-75 my-4">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item bg-transparent">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button bg-transparent text-white" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How will the Cifar10 Punk be launched?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dicta illo laudantium magnam modi non nulla provident quas reiciendis voluptates? Eveniet in incidunt ipsa minima, pariatur quaerat tempora. Autem ducimus ipsa ipsum.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-transparent">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What is the Cifar10 Punk?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias beatae consectetur delectus, dignissimos doloribus dolorum est et excepturi ipsam ipsum iure nulla officiis quam quia recusandae reprehenderit, tempore, veritatis voluptas voluptatem.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-transparent">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How much does each Punk cost?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid amet animi aspernatur dolor dolorem eligendi est ipsa modi natus numquam odio odit quae quaerat, quibusdam quidem saepe, sit vitae voluptatem.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
