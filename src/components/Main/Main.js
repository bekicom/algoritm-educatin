import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Register } from "../pages/Register/Register";
import video from "../../asets/video/Serverga qo‘yish _ Telegram bot _  Bepul va oson usuli.mp4";
import "./main.css";
import compyu from "../../asets/section1/Group.png";
/// kutuxhona////
import Aos from "aos";
import "aos/dist/aos.css";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  // navigate

  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);
  const toggle4 = () => setModal4(!modal4);

  return (
    <div className="main">
      <Navbar />

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <div className="section1">
        <div className="sec_l">
          <p>
            Zamonaviy <b>olamni</b> Biz bilan zabt eting
          </p>

          <video src={video} controls muted loop></video>
        </div>
        <div className="sec_r">
          <img src={compyu} alt="" />
        </div>
      </div>
      {/* ****************** section2*************** */}
      <div data-aos="fade-up" className="oquvkurslari">
        <div className="oquv">
          <p>O`quv kurslar</p>
        </div>
        <div className="kusrlar">
          <div data-aos="fade-up" className="webdasturlash" onClick={toggle}>
            <p>Web dasturlash</p>
            {/* <span>web dasturlash 9 oy davom etadi</span> */}
            <button onClick={() => navigate("/register")}>
              royxatdan otish
            </button>
          </div>
          <div data-aos="fade-up" className="rustil" onClick={toggle2}>
            <p>Rus-tili</p>
            {/* <span>Gramatika va Rus adabiy So`zlashuv (7oy/3 bosqich)</span> */}
            <button onClick={() => navigate("/register")}>
              royxatdan otish
            </button>
          </div>
          <div data-aos="fade-up" className="ingilztili" onClick={toggle3}>
            <p>Ingilz-tili</p>
            {/* <span>
              ALGORITM da ingiiz tiiini orgatish dasturi 5 bosqichdan iborat:
              3+3+3+351 у
            </span> */}
            <button onClick={() => navigate("/register")}>
              royxatdan otish
            </button>
          </div>
          <div data-aos="fade-up" className="dtm" onClick={toggle4}>
            <p>DTM</p>
            {/* <span>web dasturlash 9 oy davom etadi</span> */}
            <button onClick={() => navigate("/register")}>
              royxatdan otish
            </button>
          </div>
        </div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Web dasturlash</ModalHeader>
          <ModalBody id="modal">
            <div className="webdiv">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.27674 72.0272L0 0H80L72.7233 71.9883L39.9338 80"
                  fill="#E44D26"
                />
                <path
                  d="M39.9998 73.8752V5.91211H72.701L66.4606 67.3608"
                  fill="#F16529"
                />
                <path
                  d="M14.8623 14.7207H40.0001V23.5491H25.8436L26.7697 32.5914H40.0001V41.4003H17.5966L14.8623 14.7207ZM18.0376 45.834H28.0927L28.7984 52.8928L40.0001 55.5374V64.7547L19.4489 59.6988"
                  fill="#EBEBEB"
                />
                <path
                  d="M65.0493 14.7207H39.9556V23.5491H64.1231L65.0493 14.7207ZM63.2191 32.5914H39.9556V41.4198H52.304L51.1353 52.8928L39.9556 55.5374V64.7158L60.4627 59.6988"
                  fill="white"
                />
              </svg>

              <p>HTML</p>
              <span>FRONT END</span>
            </div>
            <div className="webdiv">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80 0L72.7118 71.9916L39.951 80L7.28049 72.0029L0 0H80Z"
                  fill="#264DE4"
                />
                <path
                  d="M66.4723 67.4075L72.7005 5.88733H40V73.8788L66.4723 67.4075Z"
                  fill="#2965F1"
                />
                <path
                  d="M16.6904 32.5922L17.5881 41.4229H40.0001V32.5922H16.6904Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M40 14.7181H39.9654H14.8867L15.7971 23.5491H40V14.7181Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M40 64.7144V55.5266L39.9562 55.5369L28.8022 52.8813L28.0892 45.8383H22.6692H18.0355L19.4386 59.704L39.954 64.7257L40 64.7144Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M52.2979 41.4228L51.1354 52.8757L39.9653 55.5341V64.7215L60.497 59.7041L60.6476 58.2121L63.001 34.9634L63.2454 32.592L65.0535 14.7181H39.9653V23.5491H54.0777L53.1664 32.592H39.9653V41.4228H52.2979Z"
                  fill="white"
                />
              </svg>

              <p>HTML</p>
              <span>FRONT END</span>
            </div>
            <div className="webdiv">
              <svg
                width="80"
                height="70"
                viewBox="0 0 80 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.6163 0C12.0516 0 8.67391 4.38847 8.82516 9.14766C8.97031 13.7199 8.78172 19.6417 7.42453 24.4709C6.0625 29.3137 3.76063 32.3825 0 32.7764V37.2236C3.76063 37.6183 6.0625 40.6856 7.42437 45.5291C8.78172 50.3583 8.97016 56.2801 8.825 60.8523C8.67375 65.6108 12.0514 70 16.6169 70H63.3898C67.9545 70 71.3316 65.6115 71.1803 60.8523C71.0352 56.2801 71.2237 50.3583 72.5809 45.5291C73.943 40.6856 76.2392 37.6171 80 37.2236V32.7764C76.2394 32.3817 73.9431 29.3144 72.5809 24.4709C71.2236 19.6424 71.0352 13.7199 71.1803 9.14766C71.3316 4.38916 67.9545 0 63.3898 0H16.6156H16.6163ZM54.2373 43.0896C54.2373 49.6428 49.7872 53.6171 42.402 53.6171H29.8305C29.4708 53.6171 29.126 53.4602 28.8717 53.1809C28.6174 52.9016 28.4745 52.5228 28.4745 52.1277V17.8724C28.4745 17.4774 28.6174 17.0986 28.8717 16.8193C29.126 16.54 29.4708 16.3831 29.8305 16.3831H42.3305C48.4884 16.3831 52.5298 20.0469 52.5298 25.6721C52.5298 29.6204 49.8111 33.155 46.3475 33.7742V33.9802C51.0625 34.5483 54.2373 38.1353 54.2373 43.0896ZM41.0312 21.1043H33.8631V32.2257H39.9005C44.5677 32.2257 47.1411 30.1614 47.1411 26.4716C47.1406 23.0137 44.9281 21.1043 41.0312 21.1043ZM33.8631 36.6383V48.8943H41.295C46.1544 48.8943 48.7283 46.7526 48.7283 42.7276C48.7283 38.7027 46.0822 36.6377 40.9825 36.6377H33.8631V36.6383Z"
                  fill="#7952B3"
                />
              </svg>

              <p>HTML</p>
              <span>FRONT END</span>
            </div>
            <div className="webdiv">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M80 0H0V80H80V0Z" fill="#F7DF1E" />
                <path
                  d="M53.7395 62.5003C55.351 65.1314 57.4475 67.0654 61.1554 67.0654C64.2703 67.0654 66.2602 65.5085 66.2602 63.3574C66.2602 60.7797 64.2157 59.8666 60.7871 58.367L58.9078 57.5606C53.483 55.2495 49.8792 52.3543 49.8792 46.2336C49.8792 40.5955 54.1751 36.3035 60.8887 36.3035C65.6684 36.3035 69.1046 37.967 71.5808 42.3225L65.7268 46.0812C64.4379 43.7701 63.0475 42.8597 60.8887 42.8597C58.6868 42.8597 57.2913 44.2565 57.2913 46.0812C57.2913 48.3365 58.6881 49.2495 61.9135 50.6463L63.7929 51.4514C70.1802 54.1904 73.7865 56.9828 73.7865 63.2609C73.7865 70.0292 68.4697 73.7371 61.3294 73.7371C54.3478 73.7371 49.8373 70.4101 47.6303 66.0495L53.7395 62.5003ZM27.1833 63.1517C28.3643 65.247 29.4386 67.0184 32.0214 67.0184C34.4913 67.0184 36.0494 66.052 36.0494 62.2946V36.7327H43.5668V62.3962C43.5668 70.1803 39.003 73.7231 32.3414 73.7231C26.3224 73.7231 22.8367 70.6082 21.064 66.8565L27.1833 63.1517Z"
                  fill="black"
                />
              </svg>

              <p>HTML</p>
              <span>FRONT END</span>
            </div>
            <div className="webdiv">
              <svg
                width="86"
                height="80"
                viewBox="0 0 86 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43 54.4501C65.0914 54.4501 83 47.9806 83 40.0001C83 32.0195 65.0914 25.55 43 25.55C20.9086 25.55 3 32.0195 3 40.0001C3 47.9806 20.9086 54.4501 43 54.4501Z"
                  stroke="#61DAFB"
                  stroke-width="5"
                />
                <path
                  d="M29.7734 47.225C40.8191 65.3261 55.6952 76.7652 63 72.775C70.3048 68.7847 67.2723 50.8761 56.2266 32.775C45.1809 14.6739 30.3048 3.23475 23 7.22501C15.6952 11.2153 18.7277 29.1239 29.7734 47.225Z"
                  stroke="#61DAFB"
                  stroke-width="5"
                />
                <path
                  d="M29.7734 32.7749C18.7277 50.876 15.6952 68.7846 23 72.7749C30.3048 76.7652 45.1809 65.3261 56.2266 47.2249C67.2723 29.1238 70.3048 11.2152 63 7.22494C55.6952 3.23468 40.8191 14.6738 29.7734 32.7749Z"
                  stroke="#61DAFB"
                  stroke-width="5"
                />
              </svg>

              <p>HTML</p>
              <span>FRONT END</span>
            </div>
            <div className="webdiv">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.3905 0.853487C38.5764 -0.28193 41.4236 -0.287059 43.6076 0.853487C54.5954 6.48755 65.5865 12.1128 76.5724 17.7503C78.6387 18.8065 80.0208 20.8932 79.9998 23.0538V56.9505C80.0152 59.2005 78.4964 61.3372 76.3165 62.3695C65.3649 67.9725 54.4189 73.5823 43.4692 79.1853C41.238 80.343 38.3337 80.2538 36.1723 79.0013C32.889 77.2741 29.6001 75.5554 26.3165 73.8299C25.6455 73.4669 24.8891 73.178 24.4153 72.5876C24.8342 72.0754 25.583 72.0115 26.1915 71.7879C27.562 71.3924 28.8208 70.7576 30.0798 70.1416C30.3982 69.9438 30.7869 70.0196 31.0921 70.1966C33.8997 71.6574 36.6825 73.1606 39.4995 74.6075C40.1005 74.9223 40.709 74.5043 41.2227 74.2445C51.9696 68.7326 62.7296 63.2416 73.4746 57.7281C73.8728 57.5543 74.0929 57.1708 74.0605 56.775C74.0681 45.5932 74.0624 34.4094 74.0643 23.2276C74.1098 22.7786 73.8235 22.3657 73.3761 22.182C62.4624 16.6046 51.5545 11.0187 40.6427 5.43989C40.4537 5.32195 40.2297 5.25866 40.0003 5.25836C39.7709 5.25805 39.5467 5.32074 39.3573 5.43818C28.4456 11.0187 17.5395 16.6097 6.62775 22.1868C6.1819 22.3709 5.88268 22.7769 5.93574 23.2276C5.93762 34.4094 5.93574 45.5932 5.93574 56.7767C5.91682 56.9698 5.96356 57.1635 6.06965 57.3318C6.17575 57.5001 6.33612 57.6348 6.52916 57.7178C9.44101 59.2162 12.3566 60.7041 15.2704 62.1974C16.9118 62.9991 18.9273 63.4755 20.7358 62.8612C22.3318 62.3418 23.4505 60.8639 23.42 59.3262C23.4351 48.2096 23.4125 37.0914 23.4313 25.9766C23.3914 25.4831 23.9073 25.0753 24.436 25.1218C25.8351 25.1132 27.2361 25.1047 28.6352 25.1252C29.2192 25.1132 29.6211 25.6446 29.5489 26.1418C29.5432 37.3287 29.564 48.5159 29.5395 59.7029C29.5432 62.6843 28.1934 65.9284 25.1544 67.3872C21.4105 69.1472 16.7831 68.774 13.0844 67.0864C9.88247 65.6361 6.82682 63.9246 3.68168 62.3709C1.49607 61.3443 -0.0151148 59.1991 0.000270242 56.9508V23.0538C-0.0226503 20.8485 1.41443 18.7238 3.5451 17.683C14.4948 12.0755 25.4427 6.46362 36.3905 0.853487Z"
                  fill="#8CC84B"
                />
                <path
                  d="M45.9429 24.3339C50.7186 24.0549 55.8311 24.1686 60.1285 26.3035C63.4558 27.9396 65.3004 31.3732 65.3591 34.7276C65.2662 35.18 64.745 35.4296 64.269 35.3986C62.8834 35.3969 61.4975 35.4157 60.1119 35.39C59.5241 35.4105 59.1825 34.9188 59.1087 34.4472C58.7106 32.8422 57.7461 31.2527 56.0814 30.4785C53.5259 29.3175 50.5628 29.3759 47.7763 29.4001C45.742 29.4981 43.5545 29.6579 41.8311 30.7435C40.508 31.5658 40.1061 33.2257 40.5783 34.5626C41.0235 35.5225 42.2446 35.8322 43.2437 36.1177C48.9989 37.4836 55.0977 37.3477 60.743 39.1453C63.0803 39.8781 65.3667 41.3027 66.1667 43.5234C67.2132 46.4997 66.7545 50.0573 64.421 52.4466C62.5286 54.4129 59.7725 55.4831 57.0236 56.0643C53.3667 56.8043 49.5716 56.8231 45.8579 56.4945C42.3658 56.1333 38.7318 55.3007 36.036 53.1416C33.7307 51.3252 32.6048 48.495 32.7166 45.7635C32.7432 45.3022 33.2494 44.9805 33.7364 45.0184C35.1317 45.0082 36.527 45.0047 37.9223 45.0201C38.4797 44.9839 38.8929 45.421 38.9214 45.8977C39.1789 47.4269 39.8122 49.0318 41.2816 49.9385C44.1175 51.5987 47.6758 51.485 50.923 51.5315C53.6132 51.4232 56.633 51.3904 58.8284 49.7769C59.9866 48.8566 60.3298 47.3169 60.0168 45.9923C59.6777 44.874 58.3885 44.3528 57.2814 44.0121C51.5999 42.3812 45.433 42.973 39.8065 41.1287C37.5223 40.3961 35.3135 39.0111 34.4359 36.8816C33.2114 33.8677 33.7725 30.1397 36.3506 27.831C38.8643 25.5345 42.4929 24.6501 45.9429 24.3336V24.3339Z"
                  fill="#8CC84B"
                />
              </svg>

              <p>HTML</p>
              <span>FRONT END</span>
            </div>
          </ModalBody>
        </Modal>
        <Modal isOpen={modal2} toggle={toggle2}>
          <ModalHeader toggle={toggle2}>Rus-tili</ModalHeader>
          <ModalBody>
            ALGORITM da rus tilini o'rgatish dasturi 3 bosaichdan iborat: 3+3+17
            оу 1-bosaich 3 oу davom etadi va unda dastlabki eng muhim mavzularda
            so'zlashish, to 'g'ri talaffuz va to 'g'ri gapirish qoidalari
            o-rgatiladi. 2-bosqich ham 3 оу davom etadi va bu bosaichda
            o-quvchilarga markaz binosida o'zbek tilida so "zlashish taqiqlab qo
            s iladi. 2-bosqichda o “quvchilar mavzularni rus tilida amaliy
            tarzda bajarishlari belgilangan Masalan) . kurs uchun to "ov ailish
            rus tilida amalga oshiriladi a bankdan kredit olish rus tilida
            bankka borib gaplashiladi yoki aptekadan rus tilida dori sotib olish
            kabi. . 3-bosqich 1 oу davom etadi va unda o'quvchining sohasiga oid
            bo 'Igan mavzularda so'zlashish o:rgatiladi , Masalan quruvchi
            bo'lsangiz qurilishga oid, vrach bo “lsangiz bemorlarni qabul
            qilishga oid , matematika fakulteti talabasi bo'lsangiz, rus tilida
            matematika darsini otishni organasiz. Tо "ovlarimiz: 1 oyga so "mdan
          </ModalBody>
        </Modal>
        <Modal isOpen={modal3} toggle={toggle3}>
          <ModalHeader toggle={toggle3}>Ingilz-tili</ModalHeader>
          <ModalBody>
            ALGORITM oquv MARKAZIDA INGLZ TIN ALGORITM O'RGATISH DASTURI
            ALGORITM da ingiiz tiiini orgatish dasturi 5 bosqichdan iborat:
            3+3+3+351 у 1-bosaich 3 oу davom etadi va unda sodda grammatik
            mavzular, READING va LSTENING bo 'yicha kitoblar berilib, dastlabki
            tushunchalar orgatiladi. 2-bosqich ham 3 оу. s Unda mavzular
            murakkab- Iashadi, , o quvchining nutqi shakllantiriladi , dars-
            larning yarmi ozbekcha yarmi inglizcha olib boriladi. 3-bosqich 3
            оу. Unda o'zbek tiida gapirish taqiq- lanadi) bu bosqichda oquvchi
            ingiz tiiida erkin mulogot aiia oladigan darajaga yetadi. 4-bosqich
            3 оу. Unda ingiiz grammatikasi toa yakunlanadi READING va LISTENING
            qobiliyatlari ADVANCED darajasiga chiqadi. 5-bosqich 5 оу boadi.
            Unda o'quvchi IELTS imti- xoniga Reading, Listening, Writing,
            Speaking bo Jim- lariga maxsus xolatda tayyorgarlik ko radi. Darslar
            har kuni olib boriladi Oquvchilar o;qituvch nazoratida o'quv markazi
            hududida tayyorgarlik olib borishadi. Har 3 oyda imtihon, , unda во
            % dan yuqori natija korsatgan keyingi bosqichda o'qiy oladi.
            To'lovlarimiz: 1 oyga 249 00 so tmdan
          </ModalBody>
        </Modal>
        <Modal isOpen={modal4} toggle={toggle4}>
          <ModalHeader toggle={toggle4}>DTM</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};
export default React.memo(Main);
