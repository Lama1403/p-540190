import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const CustomNavbar = () => {
  return (
    <nav className="box-border flex flex-row justify-between items-center px-4 md:px-10 h-[72.4px] w-full border-b border-[#333333]">
      {/* Left side - Logo */}
      <div className="flex items-center gap-2">
        <svg width="110" height="38" viewBox="0 0 130 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43.1261 39.3385C42.137 39.3385 41.3608 39.0603 40.7975 38.5039C40.2411 37.9475 39.9629 37.1438 39.9629 36.0929V32.023H41.3024V36.0414C41.3024 36.7832 41.4604 37.3224 41.7763 37.659C42.0992 37.9956 42.5526 38.1639 43.1364 38.1639C43.7203 38.1639 44.1702 37.9956 44.4862 37.659C44.8022 37.3224 44.9602 36.7832 44.9602 36.0414V32.023H46.279V36.0929C46.279 37.1438 45.9974 37.9475 45.4341 38.5039C44.8777 39.0603 44.1084 39.3385 43.1261 39.3385ZM51.2872 39.3076C50.8407 39.3076 50.432 39.2046 50.0611 38.9985C49.697 38.7924 49.4051 38.4833 49.1853 38.0712C48.9723 37.6522 48.8659 37.1232 48.8659 36.4844C48.8659 35.8387 48.9689 35.3098 49.175 34.8977C49.3879 34.4855 49.6764 34.1798 50.0405 33.9806C50.4045 33.7746 50.8201 33.6715 51.2872 33.6715C51.8299 33.6715 52.3073 33.7883 52.7194 34.0219C53.1384 34.2554 53.4681 34.5817 53.7086 35.0007C53.9558 35.4197 54.0795 35.9143 54.0795 36.4844C54.0795 37.0545 53.9558 37.5526 53.7086 37.9784C53.4681 38.3974 53.1384 38.7237 52.7194 38.9573C52.3073 39.1908 51.8299 39.3076 51.2872 39.3076ZM48.2373 41.2344V33.7334H49.4635V35.0316L49.4223 36.4947L49.5253 37.9578V41.2344H48.2373ZM51.143 38.2051C51.4521 38.2051 51.7268 38.1364 51.9672 37.999C52.2145 37.8617 52.4103 37.6625 52.5546 37.4014C52.6988 37.1404 52.7709 36.8347 52.7709 36.4844C52.7709 36.1272 52.6988 35.8215 52.5546 35.5674C52.4103 35.3064 52.2145 35.1072 51.9672 34.9698C51.7268 34.8324 51.4521 34.7637 51.143 34.7637C50.8339 34.7637 50.5557 34.8324 50.3084 34.9698C50.0611 35.1072 49.8653 35.3064 49.7211 35.5674C49.5768 35.8215 49.5047 36.1272 49.5047 36.4844C49.5047 36.8347 49.5768 37.1404 49.7211 37.4014C49.8653 37.6625 50.0611 37.8617 50.3084 37.999C50.5557 38.1364 50.8339 38.2051 51.143 38.2051ZM58.0005 41.3065C57.4922 41.3065 56.9942 41.2378 56.5065 41.1004C56.0256 40.9699 55.6307 40.7776 55.3216 40.5234L55.8986 39.5549C56.139 39.7541 56.4412 39.9121 56.8053 40.0289C57.1762 40.1525 57.5506 40.2143 57.9284 40.2143C58.5328 40.2143 58.9759 40.0735 59.2575 39.7919C59.5392 39.5171 59.68 39.1015 59.68 38.5451V37.5663L59.783 36.3196L59.7418 35.0728V33.7334H60.9679V38.4009C60.9679 39.3969 60.7138 40.1285 60.2055 40.5955C59.6971 41.0695 58.9622 41.3065 58.0005 41.3065ZM57.8356 38.9882C57.3136 38.9882 56.8396 38.8783 56.4137 38.6585C55.9947 38.4318 55.6616 38.1193 55.4143 37.7208C55.1739 37.3224 55.0537 36.8553 55.0537 36.3196C55.0537 35.7906 55.1739 35.327 55.4143 34.9286C55.6616 34.5302 55.9947 34.2211 56.4137 34.0012C56.8396 33.7814 57.3136 33.6715 57.8356 33.6715C58.3027 33.6715 58.7217 33.7643 59.0927 33.9497C59.4636 34.1352 59.759 34.4237 59.9788 34.8152C60.2055 35.2068 60.3188 35.7082 60.3188 36.3196C60.3188 36.9309 60.2055 37.4358 59.9788 37.8342C59.759 38.2257 59.4636 38.5177 59.0927 38.71C58.7217 38.8955 58.3027 38.9882 57.8356 38.9882ZM58.0314 37.896C58.3542 37.896 58.6427 37.8307 58.8969 37.7002C59.1511 37.5629 59.3468 37.3774 59.4842 37.1438C59.6285 36.9034 59.7006 36.6287 59.7006 36.3196C59.7006 36.0104 59.6285 35.7391 59.4842 35.5056C59.3468 35.2652 59.1511 35.0831 58.8969 34.9595C58.6427 34.829 58.3542 34.7637 58.0314 34.7637C57.7086 34.7637 57.4166 34.829 57.1556 34.9595C56.9014 35.0831 56.7022 35.2652 56.558 35.5056C56.4206 35.7391 56.3519 36.0104 56.3519 36.3196C56.3519 36.6287 56.4206 36.9034 56.558 37.1438C56.7022 37.3774 56.9014 37.5629 57.1556 37.7002C57.4166 37.8307 57.7086 37.896 58.0314 37.896ZM62.8672 39.2355V33.7334H64.0934V35.248L63.9491 34.8049C64.114 34.434 64.3716 34.1524 64.7219 33.96C65.0791 33.7677 65.5221 33.6715 66.0511 33.6715V34.8977C65.9961 34.8839 65.9446 34.8771 65.8965 34.8771C65.8484 34.8702 65.8003 34.8667 65.7523 34.8667C65.2646 34.8667 64.8765 35.011 64.588 35.2995C64.2994 35.5811 64.1552 36.0036 64.1552 36.5668V39.2355H62.8672ZM70.3472 39.2355V38.1227L70.2751 37.8857V35.9383C70.2751 35.5605 70.1617 35.2686 69.935 35.0625C69.7084 34.8496 69.3649 34.7431 68.9047 34.7431C68.5956 34.7431 68.2899 34.7912 67.9877 34.8874C67.6923 34.9835 67.4416 35.1175 67.2355 35.2892L66.7306 34.3516C67.026 34.1249 67.3763 33.9566 67.7816 33.8467C68.1937 33.7299 68.6196 33.6715 69.0592 33.6715C69.856 33.6715 70.4708 33.8639 70.9036 34.2485C71.3432 34.6263 71.563 35.2136 71.563 36.0104V39.2355H70.3472ZM68.6162 39.3076C68.204 39.3076 67.8434 39.2389 67.5343 39.1015C67.2252 38.9573 66.9848 38.7615 66.813 38.5142C66.6482 38.2601 66.5658 37.975 66.5658 37.659C66.5658 37.3499 66.6379 37.0717 66.7821 36.8244C66.9333 36.5771 67.1771 36.3814 67.5137 36.2371C67.8503 36.0929 68.2968 36.0208 68.8532 36.0208H70.4502V36.8759H68.9459C68.5063 36.8759 68.2109 36.9481 68.0598 37.0923C67.9087 37.2297 67.8331 37.4014 67.8331 37.6075C67.8331 37.8411 67.9258 38.0265 68.1113 38.1639C68.2968 38.3013 68.5544 38.37 68.8841 38.37C69.2 38.37 69.4817 38.2978 69.729 38.1536C69.9831 38.0093 70.1651 37.7964 70.2751 37.5148L70.4914 38.2875C70.3678 38.6104 70.1445 38.8611 69.8217 39.0397C69.5057 39.2183 69.1039 39.3076 68.6162 39.3076ZM75.7607 39.3076C75.2318 39.3076 74.7544 39.1908 74.3285 38.9573C73.9095 38.7169 73.5797 38.3871 73.3393 37.9681C73.0989 37.5491 72.9787 37.0545 72.9787 36.4844C72.9787 35.9143 73.0989 35.4197 73.3393 35.0007C73.5797 34.5817 73.9095 34.2554 74.3285 34.0219C74.7544 33.7883 75.2318 33.6715 75.7607 33.6715C76.2209 33.6715 76.633 33.7746 76.9971 33.9806C77.3612 34.1798 77.6497 34.4855 77.8626 34.8977C78.0755 35.3098 78.182 35.8387 78.182 36.4844C78.182 37.1232 78.079 37.6522 77.8729 38.0712C77.6668 38.4833 77.3818 38.7924 77.0177 38.9985C76.6536 39.2046 76.2346 39.3076 75.7607 39.3076ZM75.9152 38.2051C76.2243 38.2051 76.4991 38.1364 76.7395 37.999C76.9868 37.8617 77.1826 37.6625 77.3268 37.4014C77.4779 37.1404 77.5535 36.8347 77.5535 36.4844C77.5535 36.1272 77.4779 35.8215 77.3268 35.5674C77.1826 35.3064 76.9868 35.1072 76.7395 34.9698C76.4991 34.8324 76.2243 34.7637 75.9152 34.7637C75.6061 34.7637 75.3279 34.8324 75.0806 34.9698C74.8402 35.1072 74.6444 35.3064 74.4933 35.5674C74.3491 35.8215 74.277 36.1272 74.277 36.4844C74.277 36.8347 74.3491 37.1404 74.4933 37.4014C74.6444 37.6625 74.8402 37.8617 75.0806 37.999C75.3279 38.1364 75.6061 38.2051 75.9152 38.2051ZM77.5844 39.2355V37.9372L77.6359 36.4741L77.5329 35.011V31.5902H78.8105V39.2355H77.5844ZM83.298 39.3076C82.6866 39.3076 82.1509 39.1874 81.6906 38.947C81.2373 38.6997 80.8835 38.3631 80.6294 37.9372C80.3821 37.5113 80.2584 37.0271 80.2584 36.4844C80.2584 35.9349 80.3786 35.4506 80.6191 35.0316C80.8663 34.6057 81.2029 34.2726 81.6288 34.0322C82.0616 33.7917 82.5527 33.6715 83.1022 33.6715C83.638 33.6715 84.1154 33.7883 84.5344 34.0219C84.9534 34.2554 85.2832 34.5851 85.5236 35.011C85.764 35.4369 85.8842 35.9383 85.8842 36.5153C85.8842 36.5703 85.8808 36.6321 85.8739 36.7008C85.8739 36.7695 85.8705 36.8347 85.8636 36.8966H81.2785V36.0414H85.1836L84.6787 36.3093C84.6855 35.9933 84.6203 35.7151 84.4829 35.4747C84.3455 35.2342 84.1566 35.0453 83.9162 34.908C83.6827 34.7706 83.4113 34.7019 83.1022 34.7019C82.7863 34.7019 82.5081 34.7706 82.2676 34.908C82.0341 35.0453 81.8486 35.2377 81.7112 35.485C81.5807 35.7254 81.5155 36.0104 81.5155 36.3402V36.5462C81.5155 36.8759 81.591 37.1679 81.7422 37.422C81.8933 37.6762 82.1062 37.872 82.381 38.0093C82.6557 38.1467 82.9717 38.2154 83.3289 38.2154C83.638 38.2154 83.9162 38.1673 84.1635 38.0712C84.4108 37.975 84.6306 37.8239 84.8229 37.6178L85.5133 38.4112C85.266 38.6997 84.9534 38.9229 84.5756 39.0809C84.2047 39.232 83.7788 39.3076 83.298 39.3076Z" fill="#00D0C6"/>
          <path d="M42.0242 19.7951H51.0853V22.4716H37.336L46.5942 6.29454H38.8331V3.61804H51.2823L42.0242 19.7951Z" fill="white"/>
          <path d="M57.2294 3.61804V22.4716H54.3929V3.61804H57.2294Z" fill="white"/>
          <path d="M64.5984 3.61804V19.7951H70.1533V22.4716H61.7619V3.61804H64.5984Z" fill="white"/>
          <path d="M75.7073 3.61804V19.7951H81.2622V22.4716H72.8708V3.61804H75.7073Z" fill="white"/>
          <path d="M86.7761 3.61804V22.4716H83.9396V3.61804H86.7761Z" fill="white"/>
          <path d="M110.533 22.8255H106.948L105.451 21.2904C103.914 22.3138 102.063 22.8255 100.211 22.8255C97.7686 22.8255 95.3654 21.9202 93.5532 20.2671C91.4652 18.4959 90.3227 15.8587 90.4015 13.1429C90.3227 10.4664 91.4258 7.86858 93.3956 6.01865C95.2472 4.24744 97.6898 3.26343 100.251 3.26343C102.614 3.26343 104.899 4.12935 106.672 5.70377C108.957 7.63242 110.1 10.1515 110.1 13.2609C110.1 15.7013 109.115 18.0235 107.421 19.7554L110.533 22.8255ZM102.693 14.9928L105.411 17.748C106.633 16.4885 107.263 14.796 107.224 13.0641C107.263 11.1748 106.554 9.32491 105.214 7.98666C102.457 5.2708 97.9655 5.2708 95.2078 7.98666C93.9077 9.36427 93.1986 11.2142 93.238 13.1429C93.1986 15.0322 93.9471 16.8427 95.2866 18.1416C96.5473 19.4011 98.2807 20.149 100.093 20.149C101.275 20.1884 102.417 19.8735 103.442 19.3224L99.0292 14.9928H102.693Z" fill="white"/>
          <path d="M124.758 17.9061H116.682L114.594 22.4719H111.521L120.858 2.4375L129.84 22.4719H126.728L124.758 17.9061ZM123.616 15.2296L120.818 8.81387L117.864 15.2296H123.616Z" fill="white"/>
          <g clipPath="url(#clip0_221_318)">
            <path d="M20.5724 17.2054L6.4431 24.0634L20.5724 30.6622V36L0 26.3782V21.1267L14.3044 14.1824L0 7.49717V2.17664L20.5724 11.7812V17.2054Z" fill="white"/>
            <path d="M0 2.17658L5.44512 0L26 9.62188L20.5724 11.7812L0 2.17658Z" fill="#D8D8D8"/>
            <path d="M20.5724 17.2053L26 15.0287V9.62183L20.5724 11.7811V17.2053Z" fill="#AFAFAF"/>
            <path d="M20.5724 30.6622V20.0038L26 17.5336V33.8234L20.5724 36V30.6622Z" fill="#AFAFAF"/>
          </g>
          <defs>
            <clipPath id="clip0_221_318">
              <rect width="26" height="36" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      
      {/* Right side - Wallet Connection */}
      <div className="flex items-center">
        <ConnectButton 
          chainStatus="icon"
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
          accountStatus="address"
        />
      </div>
    </nav>
  );
};
