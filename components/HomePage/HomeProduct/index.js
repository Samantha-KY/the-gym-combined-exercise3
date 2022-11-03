import React, { Fragment } from "react";
import { DUMMY_DATA } from "../../dummyData/dummyInfo";
import ProjectCard from "../../modules/card";
function HomeProduct() {
    return (
        <section className="flex flex-col max-w-7xl mx-auto md:px-20 gap-4 mt-20 px-6">
            <div className="">
            {DUMMY_DATA?.map((project, index) => {
                return (
                    <Fragment key={index}>
                        <ProjectCard project={project} />
                    </Fragment>
                );
            })}
            </div>
        </section>
    );
}

export default HomeProduct;
