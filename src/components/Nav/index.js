import React from "react";
import { Outlet, Link, useNavigate} from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function Nav() {
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  return (
    <>
      <nav className="bg-white px-4 md:px-[100px] py-4 md:py-[30px] w-full">
        <div className="container flex flex-wrap items-center  mx-auto">
            <Link onClick={goBack} className="block md:hidden">
              <FiArrowLeft size={24}/>
            </Link>
          <Link className="font-pjs-bold text-[24px] md:text-[32px] ml-3" to={'/'}>
            <p className="inline">My</p>
            <p className="inline text-primary">Qasidah</p>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
