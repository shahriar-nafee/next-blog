import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";

export default function SinglePage() {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div>
          <h1 className="fw-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <div className="d-flex gap-3 mt-md-5">
            <div>
              <Image
                className="rounded-circle border border-3 border-secondary object-fit-cover border-opacity-50"
                src={"/p1.jpeg"}
                alt=""
                width={70}
                height={70}
              />
            </div>
            <div className="align-self-center text-secondary">
              <div className="fw-bold">John Doe</div>
              <div className="mt-2">11.02.2023</div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="object-fit-cover"
            src={"/p1.jpeg"}
            alt=""
            width={400}
            height={220}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 mt-5">
          <div>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officia consequatur maxime asperiores sed quia eos
              maiores dolorem dignissimos ex rem laborum itaque sunt modi
              reprehenderit possimus, fuga at. Repellendus!
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officia consequatur maxime asperiores sed quia eos
              maiores dolorem dignissimos ex rem laborum itaque sunt modi
              reprehenderit possimus, fuga at. Repellendus!
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officia consequatur maxime asperiores sed quia eos
              maiores dolorem dignissimos ex rem laborum itaque sunt modi
              reprehenderit possimus, fuga at. Repellendus!
            </p>
          </div>
          <div>
            <Comments />
          </div>
        </div>
        <div className="col-md-4">
          <Menu />
        </div>
      </div>
    </div>
  );
}
