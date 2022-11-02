import React, { Fragment } from "react";
import { DUMMY_DATA } from "../../dummyData/dummyInfo";
import ProjectCard from "../../modules/card";
function HomeProduct() {
    return (
        <section className="flex flex-col gap-4 mt-20 px-6">
            <div className="md:px-20 max-w-7xl mx-auto">
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
