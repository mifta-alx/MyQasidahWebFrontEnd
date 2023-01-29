import React from "react";
import { Mockup, GooglePlay, AppStore, ListDetail } from "../../assets";
import { Icon } from "@iconify/react";
export default function Home() {
  return (
    <>
      <div className="pt-8 md:pt-0 px-4 md:px-[100px] w-full">
        <div className="flex md:justify-between w-full justify-center">
          <div className="flex flex-col justify-between max-w-lg md:mr-8 duration-400 transition-transform ">
            <div className="flex flex-col flex-wrap max-w-md">
              <div className="text-[1.5rem] md:text-[2.5rem] lg:text-[48px] font-pjs-bold md:text-left text-center">
                <p className="inline">
                  Baca
                  <p className="inline text-primary"> Qasidah </p>
                  dimanapun dan kapanpun.
                </p>
              </div>
              <p className="font-pjs-regular text-xs lg:mt-10 mt-4 md:text-left text-center leading-6">
                Kini jadi lebih mudah dalam membaca qasidah. Terdapat lebih dari
                50+ Qasidah. Sekarang semua qasidah berada dalam genggamanmu.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <img
                src={Mockup}
                className="md:hidden max-w-xs"
                alt="iphoneImage"
              />
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:max-w-[214px] md:text-left w-full text-center lg:mt-0 mt-8">
                <p className="font-pjs-bold text-2xl md:text-[16px] lg:text-[30px]">
                  Download App Sekarang
                </p>
                <p className="font-pjs-regular text-xs md:mt-5 mt-2">
                  Download dan mulailah baca qasidah.
                </p>
              </div>
              <div className="w-[2px] bg-gray-300 my-5 mx-16 lg:block hidden" />
              <div className="flex lg:flex-col flex-row justify-center mt-4 lg:mt-0 mx-16 md:mx-0">
                <a href={() => false}>
                  <img src={AppStore} alt="appStore" />
                </a>
                <a className="ml-4 lg:ml-0 lg:mt-5" href={() => false}>
                  <img src={GooglePlay} alt="googlePlay" />
                </a>
              </div>
            </div>
          </div>
          <img
            src={Mockup}
            className="hidden md:block lg:max-w-lg md:max-w-sm"
            alt="iphoneImage"
          />
        </div>
        <div className="px-10 lg:px-[85px] pt-20 pb-10 md:pt-[140px] md:pb=[70px] flex flex-col lg:flex-row md:justify-between items-center w-full ">
          <div className="flex flex-col flex-wrap lg:max-w-sm">
            <p className="text-[14px] font-pjs-bold uppercase tracking-widest text-primary">
              multi platform
            </p>
            <div className="flex flex-wrap mt-[10px]">
              <p className="font-pjs-bold text-lg lg:text-[36px] lg:leading-[50px]">
                baca qasidah di platform manapun
              </p>
              <p className="font-pjs-medium text-base mt-7 leading-[25px]">
                baca qasidah tanpa batasan, sekarang qasidah bisa dibaca di
                banyak platform, seperti android, iOS, maupun website.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-8 md:mt-12 lg:mt-0">
            <div className="mt-4">
              <div className="p-[18px] bg-white drop-shadow-md rounded-[15px] flex justify-center">
                <Icon
                  icon="iconoir:www"
                  className="text-primary text-2xl md:text-4xl"
                />
              </div>
            </div>
            <div className="ml-16 md:ml-20 mr-11 md:mr-[50px] mt-[100px]">
              <div className="p-[18px] bg-white drop-shadow-md rounded-[15px] flex justify-center">
                <Icon
                  icon="uil:android"
                  className="text-primary text-3xl md:text-5xl"
                />
              </div>
            </div>
            <div className="">
              <div className="p-[18px] bg-white drop-shadow-md rounded-[15px] flex justify-center">
                <Icon
                  icon="mdi:apple-ios"
                  className="text-primary text-4xl md:text-6xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 lg:px-[85px] pt-10 pb-20  md:pt-[70px] md:pb=[140px] flex flex-col lg:flex-row md:justify-between items-center w-full">
          <div>
            <img
              src={ListDetail}
              alt="listdetail"
              className="hidden lg:flex lg:max-w-sm"
            />
          </div>
          <div className="flex flex-col flex-wrap lg:max-w-sm">
            <p className="text-[14px] font-pjs-bold uppercase tracking-widest text-primary">
              mudah dan cepat
            </p>
            <div className="flex flex-wrap mt-[10px]">
              <p className="font-pjs-bold text-lg lg:text-[36px] lg:leading-[50px]">
                layanan manajemen qasidah yang baik
              </p>
              <p className="font-pjs-medium text-base mt-7 leading-[25px]">
                sekarang memanajemen qasidah dapat dilakukan dengan mudah.
                Tambah, ubah, dan hapus qasidah menjadi lebih dinamis.
              </p>
              <p className="font-pjs-medium text-base mt-7 leading-[25px]">
                tersedia detail dari qasidah dengan tampilan yang menarik
                beserta informasi yang ada didalamnya.
              </p>
            </div>
          </div>
          <img
            src={ListDetail}
            alt="listdetail"
            className="flex lg:hidden mt-10 max-w-[240px] md:max-w-sm"
          />
        </div>
      </div>
      <div className="bg-other-gray py-10 md:py-[110px] justify-center items-center flex flex-col">
        <div className="justify-center flex flex-col">
          <p className="font-pjs-bold text-2xl md:text-4xl text-center">
            Highlight features
          </p>
          <div className="flex justify-center">
            <p className="font-pjs-regular text-sm md:text-base mt-3 md:mt-[30px]">
              Fitur unggulan aplikasi MyQasidah
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:mt-16 items-center md:justify-between w-full px-10 lg:px-[260px]">
          <div className="flex flex-row md:flex-col items-center w-full mt-8">
            <div>
              <div className="bg-white rounded-full justify-center p-5 md:p-[30px] mx-0 md:mx-[26px] flex">
                <Icon
                  icon="ri:search-line"
                  className="text-primary text-4xl md:text-6xl"
                />
              </div>
            </div>
            <div className="md:mt-10 md:justify-center md:items-center ml-6 md:ml-0 flex flex-col">
              <p className="font-pjs-bold text-xl">Pencarian Cepat</p>
              <div className="md:mt-5 md:max-w-[160px]">
                <p className="font-pjs-regular text-xs md:text-sm md:text-center">
                  cari qasidah dengan cepat
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col items-center w-full mt-8">
            <div>
              <div className="bg-white rounded-full justify-center p-5 md:p-[30px] mx-0 md:mx-[26px] flex">
                <Icon
                  icon="material-symbols:update-rounded"
                  className="text-primary text-4xl md:text-6xl"
                />
              </div>
            </div>
            <div className="md:mt-10 md:justify-center md:items-center ml-6 md:ml-0 flex flex-col">
              <p className="font-pjs-bold text-xl">Up-to-date</p>
              <div className="md:mt-5 md:max-w-[160px]">
                <p className="font-pjs-regular text-xs md:text-sm md:text-center flex-wrap">
                  akan selalu ada penambahan qasidah
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col items-center w-full mt-8">
            <div>
              <div className="bg-white rounded-full justify-center p-5 md:p-[30px] mx-0 md:mx-[26px] flex">
                <Icon
                  icon="ph:users-three"
                  className="text-primary text-4xl md:text-6xl"
                />
              </div>
            </div>
            <div className="md:mt-10 md:justify-center md:items-center ml-6 md:ml-0 flex flex-col">
              <p className="font-pjs-bold text-xl">Easy-to-use</p>
              <div className="md:mt-5 md:max-w-[160px]">
                <p className="font-pjs-regular text-xs md:text-sm md:text-center flex-wrap">
                  kemudahan akses bagi pengguna
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="p-6 md:pt-16 md:px-8 lg:px-[190px] bg-white sm:p-6">
        <div class="md:flex md:justify-between">
          <div class="md:mb-0 max-w-sm">
            <p className="font-pjs-bold text-2xl md:mb-11 mb-6">
              My<p className="inline text-primary">Qasidah</p>
            </p>
            <div className="hidden md:flex flex-wrap mb-11">
              <p className="font-pjs-bold text-4xl">
                Baca
                <p className="inline text-primary"> Qasidah </p>
                dimanapun dan kapanpun.
              </p>
            </div>
            <div className="md:mb-11 mb-6">
              <h2 class="mb-3 text-sm font-pjs-bold text-gray-900">
                Contact Us
              </h2>
              <ul>
                  <li>
                    <p className="font-pjs-regular text-sm mb-2">myqasidah@gmail.com</p>
                  </li>
                  <li>
                    <p className="font-pjs-regular text-sm">08123456789</p>
                  </li>
              </ul>
            </div>
            <div className="md:mb-11 mb-6">
              <h2 class="mb-3 text-sm font-pjs-bold text-gray-900">
                Location
              </h2>
              <ul>
                  <li>
                    <p className="font-pjs-regular text-sm mb-2">Malang, East Java, Indonesia</p>
                  </li>
              </ul>
            </div>
          </div>
          <div class="md:grid grid-cols-2 gap-4 sm:gap-20 sm:grid-cols-3 hidden">
            <div>
              <h2 class="mb-9 text-[18px] font-pjs-bold text-gray-900">
                Technology
              </h2>
              <ul class="text-gray-600">
                <li class="mb-6">
                  <a href="#" class="hover:underline font-pjs-regular text-sm">
                    React
                  </a>
                </li>
                <li class="mb-6">
                  <a href="#" class="hover:underline font-pjs-regular text-sm">
                    NodeJS
                  </a>
                </li>
                <li class="mb-6">
                  <a href="#" class="hover:underline font-pjs-regular text-sm">
                    Express.js
                  </a>
                </li>
                <li class="mb-6">
                  <a href="#" class="hover:underline font-pjs-regular text-sm">
                    MongoDB
                  </a>
                </li>
                <li class="mb-6">
                  <a href="#" class="hover:underline font-pjs-regular text-sm">
                    ReactNative
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline font-pjs-regular text-sm">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-[18px] font-pjs-bold text-gray-900">
                Follow us
              </h2>
              <ul class="text-gray-600">
                <li class="mb-6">
                  <a
                    href="#" class="hover:underline font-pjs-regular text-sm"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="#" class="hover:underline font-pjs-regular text-sm"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-[18px] font-pjs-bold text-gray-900">Legal</h2>
              <ul class="text-gray-600">
                <li class="mb-6">
                  <a href="#" class="hover:underline font-pjs-regular text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline font-pjs-regular text-sm">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-autolg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="#" class="hover:underline text-sm font-pjs-medium">
              MyQasidah
            </a>
            . All Rights Reserved.
          </span>
          {/* <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" class="text-gray-500 hover:text-gray-900 ">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Instagram page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span class="sr-only">Twitter page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                <span class="sr-only">GitHub account</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Dribbbel account</span>
            </a>
        </div> */}
        </div>
      </footer>
    </>
  );
}
