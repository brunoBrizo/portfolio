import { companies } from "@/data";
import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
      {companies.map((company) => (
        <React.Fragment key={company.id}>
          <div className="flex md:max-w-60 max-w-32 gap-2">
            <div className="md:w-10 w-5">
              <Image
                src={company.img}
                alt={company.name}
                width={0}
                height={0}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="md:w-24 w-20">
              <Image
                src={company.nameImg}
                alt={company.name}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                height={0}
                style={{ height: "100%" }}
              />
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Companies;
