import Shoes from "../img/shoes color all.webp";
import logo from "../public/img/Goalkeeper.jpg"
function App() {
  const item1 =
    "https://www.amazon.com/adidas-Adizero-Sneaker-White-Metallic/dp/B0C2JV55SG/ref=sr_1_21?dib=eyJ2IjoiMSJ9.D-tDtxvxW3BC8eH7Jqdj-gOAZV1HNCl54lAzKsVjKORuGbrMIbuC505OnxE6OHChBdNzY3Eq2nOTglcVwTh3ib019dP1BUpBswOZw5HwT8OuXR8EMtbMXYPfz3nJzGJH6toEbDLIAc76U26oiyPiha-GBrcr5hNg8Pd0-Z2TUlu9JtzsihsFFOeGfPI_G07bme6VIEBm-n9ktp95rdX8u2hzzw2wpByxWhT0WAw-eVBauOIbyqrAHkkr7LJv57edQU2XpAxMKU5gq7AeU8ZgbZRItgPlf5GLxeHzJG7QZ-A.zJ1di-5r2ZIz-d59a6fXssX5cQ9dnx9OfZpy5YQWWhg&dib_tag=se&keywords=football%2Bboots&qid=1770109515&sr=8-21&th=1&psc=1";
  const item2 =
    "https://www.amazon.com/PUMA-Artificial-Sneaker-Hyperlink-Blue-Mint/dp/B0CZ9NLHPN/ref=sr_1_11?dib=eyJ2IjoiMSJ9.aZbDKOf8MX8dUDT7TcqhdALkojUQjEqbtr76wGzVNdusJykF6NX7ALb83I0EOP-lBdNzY3Eq2nOTglcVwTh3ieYuCueL7QjC1EIWegqY8AMmOT6EcVOEpTKFP1bYdIjhZoXTRQo1HKo05LCnA1258PKmLho7gqld0n63N3hyzDIexOaT-ntnI-ZtQe3pwYBPDrL9JXyjWSZrztwXtiTfuYdIFFk1DnI2AEOEtXcuM-AME8WH6hSDnXNO0uhwa8z6PcKkOPC_Z8sGQp2c337loP_JUA5AbRwsiP0g64mAcR8.bRp4I1Cf4zvE5Lzke4sCPyn5lifY140uXIecPLreJfs&dib_tag=se&keywords=football%2Bboots&qid=1770176526&sr=8-11&th=1&psc=1";
  const item3 =
    "https://www.amazon.com/HRJR-Football-Unisex-Adult-Lightweight-Professional/dp/B0FR93MWBY/ref=sr_1_15?crid=1H6GV8TS4VW2D&dib=eyJ2IjoiMSJ9.mzgUYBdhNz47QJWK3AOSd5ROkJ9aLupL1DdSXizCDbwyz2NKm1x4ViQ4QdEWe2A_x73N5-T-u3RTKiMMNy8cVgZ1xKyPgTs64H5XXEwB0xhEM2mC6JB2eXei6sgUP_ovoaBzwjxPgpVxrnBLiDHvBEGeRu330OsT2CfzkMf7xhteyGbyqOZsvRmeu_BZqN4X99vHEdc2_RhKD6If3OnNESUjtVHw8_80ZYacwVjue8eK66tvhNnFGs9lbmp4ej-kC4YVRfzfjgLiO0vcu05yLRHwVrrlHI8c18Jtde0AvfI.ym_ZrQjsXpytXpVptFxiRrP3G6VSmP1w4tcvOYlHs7o&dib_tag=se&keywords=shoes%2Bfootball&qid=1770216607&sprefix=shoes%2Bfootball%2B%2Caps%2C627&sr=8-15&th=1&psc=1";
  const item4 =
    "https://www.amazon.com/Up-run-Football-Lightweight-Professional/dp/B0F1CNC1Z6/ref=sr_1_28_sspa?crid=FS1080304KDJ&dib=eyJ2IjoiMSJ9.qwWND-ibpjK0shlAeEvuHVWStKYHw34dCKzEGWeDyKYwifPplGpyyXE6hX_j7cSqqYJv1Fx7fV488QREej3jApXScMyrJZrZoqEFBANRqbs5PF5__nWcOi4EgAGcE3m6-rOgmZAwC1FohoMO6193XqkLaEatocmDTQHiYsfK4bpOQuEase3G0jTjJqER_v969k_O7YnJHq44r_-S-V0eqH48rlkcX-o6EZkAu2TSEqDP1IJcmpzyH9C1_JPlJZZH70PnzykWa4XLvXvVJa9bDp59BQ4MtqDfsfEJUE2EiAA.yuRCnDSXPY01y4JCJlynf_3yfpnJC6_BwDLVZf5p8vg&dib_tag=se&keywords=shoes%2Bfootball&qid=1770263903&sprefix=%2Caps%2C447&sr=8-28-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1&psc=1";
  const item5 =
    "https://www.amazon.com/adidas-Freak-Inline-Football-Cleats/dp/B0BLWFKCCL/ref=sr_1_28?crid=FS1080304KDJ&dib=eyJ2IjoiMSJ9.eq7EOAwAFGFJEWWkPduYwRz5oAS68mwkGTEZhU5H3L9I4NEIAWaAUMx4qVjWXX0JqYJv1Fx7fV488QREej3jAlbwCSlKfmOCqvNcg2rDpOs1KGZsCJ7TMWlM6AGJfouBVmlOgdTrAZCjwPp7oe0BO7SCz8p35uCh-8yxzsKHsKWBl64stQNqYlcxNuhlQDD0vDry-nW4NYzSokn8GRfLLLTZEUOKq16CfN1Xmzj6ut27-I7nmqNPbHpVl8JC8nXDDqUSUtju7xCU4fk1WH_jYZ59BQ4MtqDfsfEJUE2EiAA.b_kYPA4liTtDIxrrC1G_XfYYlWeiLlEKyVLobdngy1U&dib_tag=se&keywords=shoes+football&qid=1770275059&sprefix=%2Caps%2C447&sr=8-28";
  const item6 =
    "https://www.amazon.com/New-Balance-Mens-Soccer-White/dp/B096NBBKDP/ref=sr_1_30?crid=FS1080304KDJ&dib=eyJ2IjoiMSJ9.eq7EOAwAFGFJEWWkPduYwRz5oAS68mwkGTEZhU5H3L9I4NEIAWaAUMx4qVjWXX0JqYJv1Fx7fV488QREej3jAlbwCSlKfmOCqvNcg2rDpOs1KGZsCJ7TMWlM6AGJfouBVmlOgdTrAZCjwPp7oe0BO7SCz8p35uCh-8yxzsKHsKWBl64stQNqYlcxNuhlQDD0vDry-nW4NYzSokn8GRfLLLTZEUOKq16CfN1Xmzj6ut27-I7nmqNPbHpVl8JC8nXDDqUSUtju7xCU4fk1WH_jYZ59BQ4MtqDfsfEJUE2EiAA.b_kYPA4liTtDIxrrC1G_XfYYlWeiLlEKyVLobdngy1U&dib_tag=se&keywords=shoes+football&qid=1770275059&sprefix=%2Caps%2C447&sr=8-30";
  const item7 =
    "https://www.amazon.com/TerGisisi-Mens-Cleats-Training-Football/dp/B0FLY8TD65/ref=is_sr_dp_2?crid=19QB6B1NU4638&dib=eyJ2IjoiMSJ9.eq7EOAwAFGFJEWWkPduYwRz5oAS68mwkGTEZhU5H3L9I4NEIAWaAUMx4qVjWXX0JqYJv1Fx7fV488QREej3jAlbwCSlKfmOCqvNcg2rDpOs1KGZsCJ7TMWlM6AGJfouBVmlOgdTrAZCjwPp7oe0BO9B0zWdafMQ00w8WpTlDoZVHZUjCjhHYI35_2zMWS4kgvDry-nW4NYzSokn8GRfLLPe4tfaNKTabaH32fccjYnrTNKDeUNIGx-AirMmgSEqwDqUSUtju7xCU4fk1WH_jYUaj8RGOWDZ0wX5nM96C5po.BmgZjW0ErnLPO1GXPutjTVTfmCFM1kY62RL_1KqRWJc&dib_tag=se&keywords=shoes%2Bfootball&qid=1770280115&sprefix=%2Caps%2C486&sr=8-36&th=1&psc=1";
  const item8 =
    "https://www.amazon.com/dp/B0FK4Z67JN/ref=sspa_dk_detail_0?pd_rd_i=B0FK4Z67JN&pd_rd_w=9JbSV&content-id=amzn1.sym.7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_p=7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_r=1XMS439RGREF3T0EEDR0&pd_rd_wg=a7sZI&pd_rd_r=bb6a1dc6-b09b-4496-ab88-4d134a902dac&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&th=1&psc=1";
  const item9 =
    "https://www.amazon.com/Up-run-Football-Lightweight-Professional/dp/B0FLJT68BS/ref=pd_ci_mcx_di_int_sccai_cn_d_sccl_1_4/144-9446479-0401538?pd_rd_w=MYimD&content-id=amzn1.sym.751acc83-5c05-42d0-a15e-303622651e1e&pf_rd_p=751acc83-5c05-42d0-a15e-303622651e1e&pf_rd_r=TZQ0WA00YCDMP993DBNE&pd_rd_wg=pBvYc&pd_rd_r=cd5e174e-869e-430b-b733-2fc81f4d3e00&pd_rd_i=B0FLJT68BS&th=1&psc=1";

  return (
    <div>
      <div className="flex justify-between bg-blue-500 px-2 py-4">
        <h1 className="font-light text-2xl font-serif">Shop Sport⚽</h1>
        <nav className="flex gap-15 font-serif">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">About</a>
        </nav>
      </div>
      <div className="text-amber-50 text-center text-5xl p-7 font-serif font-bold ">
        Shoes football
      </div>
      <img src={Shoes} className="w-full h-100 object-center rounded-lg" />

      <div className="flex item-center justify-center m-5">
        <div className="px-3 py-3 bg-blue-500  rounded-full font-bold w-fit ">
          <a
            href="https://www.amazon.com/s?k=shoes+football&crid=19QB6B1NU4638&sprefix=%2Caps%2C486&ref=nb_sb_ss_recent_2_0_recent"
            target="_blank"
          >
            <button>Check it in the Website </button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 mt-15 ">
        {/* Product 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/shoes 2.jpg" alt=""></img>
            <h1 className="font-bold">
              ADIDAS MAN'S <br />
              Color: White/Gold Metallic/White
            </h1>
            adidas Men's Adizero Electric Football Sneakers.
          </p>
          <a href={item1} target="_blenk">
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
        {/* Product 2*/}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/shoes blue.jpg" alt=""></img>
            <h1 className="font-bold">
              Puma <br />
              Color: Hyperlink Blue-mint-puma
            </h1>
            Puma Mens Future 7 Play Firm, <br /> Artificial Ground Soccer
            Cleats.
          </p>
          <a href={item2} target="_blenk">
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
        {/* Product 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7">
          <p className="mt-2 text-sm">
            <img src="img/shoes black-white.jpg" alt=""></img>
            <h1 className="font-bold">
              Cr7 <br />
              Color: White
            </h1>
            Men's Soccer Cleats Football Cleats <br /> for Unisex-Adult High-Top
            Spikes Shoes.
          </p>
          <a href={item3} target="_blenk">
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
        {/* Product 4 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/shoes red.jpg" alt=""></img>
            <h1 className="font-bold">
              Top Soccer Shoes
              <br />
              Color:Red Ag
            </h1>
            Men's High Top Soccer Shoes FG Long Spikes <br /> Adult Football
            Shoes Lightweight Professional <br />
            Athletic Training
          </p>
          <a href={item4} target="_blenk">
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
        {/*Product 5  */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/shoes yellow.jpg" alt=""></img>
            <h1 className="font-bold">
              Adidas Freak23
              <br />
              Color:yellow-mix-white
            </h1>
            adidas Freak 23 Inline Mens Football Cleats{" "}
          </p>
          <a href={item5} target="_blenk">
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
        {/* Product 6 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/shoes new balane.jpg" alt=""></img>
            <h1 className="font-bold">
              New Balance
              <br />
              Color: Red/White
            </h1>
            New Balance Men's 442 V2 Team FG Soccer Shoe
          </p>
          <a href={item6} target="_blenk">
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
        {/* Product 7 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/shoes orange.jpg" alt=""></img>
            <h1 className="font-bold">
              Unisex-Adult Soccer
              <br />
              Color: Orange
            </h1>
            Unisex-Adult Soccer Cleats Youth High-top Training Football Cleats
          </p>
          <a href={item7} target="_blenk">
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
        {/* Product 8 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/shoes green.jpg" alt=""></img>
            <h1 className="font-bold">
              Unisex Soccer Cleats Mens
              <br />
              Color: Green/Orange
            </h1>
            Unisex Soccer Cleats Mens Lightweight Football Shoes
          </p>
          <a href={item8} target="_blenk">
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
        {/* Product 9 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/shoes whitered.jpg" alt=""></img>
            <h1 className="font-bold">
              High Top Soccer Shoes
              <br />
              Color: white Fg
            </h1>
            Football Cleats for Men Women High Top Soccer Shoes FG Long Spikes
            Football Shoes
          </p>
          <a href={item9} target="_blenk">
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
      
      </div>
      <img
        src="img/shoes remove background.png"
        className="w-max h-100 object-center rounded-lg"
      />
      {/* ស្បែកជើងចប់ត្រឹមនឹង */}

      <div className="text-amber-50 text-center text-5xl p-7 font-serif font-bold ">
        Football Accessories
      </div>

      {/* product A */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 mt-15 ">
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/Gloves whiteblue.webp" alt=""></img>
            <h1 className="font-bold">
              Goalkeeper Gloves
              <br />
              Color: Blue
            </h1>
            WVVOU Goalkeeper Gloves for Kids Youth, Soccer Goalie Gloves with
            Double
          </p>
          <a
            href="https://www.amazon.com/gp/aw/d/B09PTWYV8B/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=03ca6c0cea53c1f751f315f75f641634&hsa_cr_id=0&qid=1770364105&sr=1-2-9e67e56a-6f64-441f-a281-df67fc737124&ref_=sbx_s_sparkle_sbtcd_asin_1_img&pd_rd_w=Padj4&content-id=amzn1.sym.9f2b2b9e-47e9-4764-a4dc-2be2f6fca36d%3Aamzn1.sym.9f2b2b9e-47e9-4764-a4dc-2be2f6fca36d&pf_rd_p=9f2b2b9e-47e9-4764-a4dc-2be2f6fca36d&pf_rd_r=FWK19B6J2FA62QVDYVAA&pd_rd_wg=YuLWn&pd_rd_r=c3c54266-0b76-4622-a4f0-621fee3aee57&th=1"
            target="_blenk"
          >
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
        {/* Product B */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/Dlove black.jpg" alt=""></img>
            <h1 className="font-bold">
              Goalkeeper Gloves
              <br />
              Color: Black
            </h1>
            Soccer Goalie Gloves,Football Goalkeeper Gloves for Kids Boys
          </p>
          <a
            href="https://www.amazon.com/s?k=Goalkeeper%27s+%E2%80%8B%E2%80%8B+football&crid=ANZPGT4YA2H4&sprefix=goalkeeper%27s+football%2Caps%2C617&ref=nb_sb_noss_2"
            target="_blenk"
          >
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
        {/* Product C */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/Dlove orange.jpg" alt=""></img>
            <h1 className="font-bold">
              Renegade GK
              <br />
              Color: Orange
            </h1>
            Renegade GK Fury Goalie Gloves with Microbe-Guard
          </p>
          <a
            href="https://www.amazon.com/Renegade-GK-Hybrid-Fingersave-Pro-Tek/dp/B07J6GXLT5/ref=sr_1_21?crid=2D2GGPN6VEMP5&dib=eyJ2IjoiMSJ9.ImR6wGk7mPDKTCPCT0n1MbZSNRvXi0llFoMzNx2zBXKNkMD0tRrT4XKJyrB2Gpb5EXlOKWft9Hnc9k1fpw_pRuuTBrXGEfMB_eBH9M0rLChwTUU9lGDrZ0dHy0Lht9ClvX6zByr9DHTNgI3t2g07FnpPXeAVZykc2OjW9K-q5Au3otUPr78b6EMth_PuEQIjYznBa6_u-BulqGO79ebRIXrpCeJlFVXWlFg21VOA2q6h8BDnNxLOp2b_mM68Uf-9Z2wpNcFdEkzAR3QKHSwuDxeuwF330X5kihuWzwFQ3kk.qsAGcGyqXHkgzwTYd5fbFYQsIiGljekbhzrx_eXzmlc&dib_tag=se&keywords=Goalkeeper%27s%2B%E2%80%8B%E2%80%8B%2Bfootball&qid=1770365743&sprefix=goalkeeper%27s%2Bh%2Bfootball%2Caps%2C468&sr=8-21&th=1"
            target="_blenk"
          >
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
      </div>
      <img src="img/goalkeeper blue_.jpg" alt="" />
      <img src="img/goalkeeper green.jpg" alt="" />
      {/* ស្រោមដៃ​ត្រឺមនឹង */}

      <div className="text-amber-50 text-center text-7xl p-7 font-serif font-bold ">
        Shirt Goalkeeper
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 mt-15 ">
        {/* Product ov1 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/long shirt sleeved.jpg" alt=""></img>
            <h1 className="font-bold">
              LAIFU
              <br />
              Color: Blue
            </h1>
            LAIFU Custom Soccer Goalie Jerseys
          </p>
          <a
            href="https://www.amazon.com/Custom-Soccer-Goalie-Goalkeeper-Personalized/dp/B09KBWH19W/ref=sr_1_24?crid=2D2GGPN6VEMP5&dib=eyJ2IjoiMSJ9.ImR6wGk7mPDKTCPCT0n1MbZSNRvXi0llFoMzNx2zBXKNfYidokRk3diOj3TBfqPBIS_7BjehK4wksZCoANCYEuuTBrXGEfMB_eBH9M0rLChwTUU9lGDrZ0dHy0Lht9ClvX6zByr9DHTNgI3t2g07FnpPXeAVZykc2OjW9K-q5Au3otUPr78b6EMth_PuEQIjoOyNQkRrYephXzJBSXOAlbfLUpyLfB0pnYfK5HlipW3lIK0RjKP7Ygvn91lLS7PZvxPl7MbT7crC5IR1iXRHuH2WYdKoqVEbdKWgbEtHuKo.vMgohr158X3nuIDZr5cp9fBwP4frhYQFZOjaUv_fbsc&dib_tag=se&keywords=Goalkeeper%27s%2B%E2%80%8B%E2%80%8B%2Bfootball&qid=1770366437&sprefix=goalkeeper%27s%2Bh%2Bfootball%2Caps%2C468&sr=8-24&th=1"
            target="_blenk"
          >
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
        {/* Product ov2 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/long shirt 2.jpg" alt=""></img>
            <h1 className="font-bold">
              LAIFU
              <br />
              Color: Black
            </h1>
            LAIFU Custom Soccer Goalie Jerseys
          </p>
          <a
            href="https://www.amazon.com/Custom-Soccer-Goalie-Goalkeeper-Personalized/dp/B0BBQZ72FQ/ref=sr_1_24?crid=2D2GGPN6VEMP5&dib=eyJ2IjoiMSJ9.ImR6wGk7mPDKTCPCT0n1MbZSNRvXi0llFoMzNx2zBXKNfYidokRk3diOj3TBfqPBIS_7BjehK4wksZCoANCYEuuTBrXGEfMB_eBH9M0rLChwTUU9lGDrZ0dHy0Lht9ClvX6zByr9DHTNgI3t2g07FnpPXeAVZykc2OjW9K-q5Au3otUPr78b6EMth_PuEQIjoOyNQkRrYephXzJBSXOAlbfLUpyLfB0pnYfK5HlipW3lIK0RjKP7Ygvn91lLS7PZvxPl7MbT7crC5IR1iXRHuH2WYdKoqVEbdKWgbEtHuKo.vMgohr158X3nuIDZr5cp9fBwP4frhYQFZOjaUv_fbsc&dib_tag=se&keywords=Goalkeeper%27s%2B%E2%80%8B%E2%80%8B%2Bfootball&qid=1770366437&sprefix=goalkeeper%27s%2Bh%2Bfootball%2Caps%2C468&sr=8-24&th=1"
            target="_blenk"
          >
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
        {/* Product ov3 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-cols items-center w-fit px-7 ">
          <p className="mt-2 text-sm">
            <img src="img/long shirt 3.jpg" alt=""></img>
            <h1 className="font-bold">
              LAIFU
              <br />
              Color: Black
            </h1>
            LAIFU Custom Soccer Goalie Jerseys
          </p>
          <a
            href="https://www.amazon.com/Custom-Soccer-Goalie-Goalkeeper-Personalized/dp/B09KBT59RZ/ref=sr_1_24?crid=2D2GGPN6VEMP5&dib=eyJ2IjoiMSJ9.ImR6wGk7mPDKTCPCT0n1MbZSNRvXi0llFoMzNx2zBXKNfYidokRk3diOj3TBfqPBIS_7BjehK4wksZCoANCYEuuTBrXGEfMB_eBH9M0rLChwTUU9lGDrZ0dHy0Lht9ClvX6zByr9DHTNgI3t2g07FnpPXeAVZykc2OjW9K-q5Au3otUPr78b6EMth_PuEQIjoOyNQkRrYephXzJBSXOAlbfLUpyLfB0pnYfK5HlipW3lIK0RjKP7Ygvn91lLS7PZvxPl7MbT7crC5IR1iXRHuH2WYdKoqVEbdKWgbEtHuKo.vMgohr158X3nuIDZr5cp9fBwP4frhYQFZOjaUv_fbsc&dib_tag=se&keywords=Goalkeeper%27s%2B%E2%80%8B%E2%80%8B%2Bfootball&qid=1770366437&sprefix=goalkeeper%27s%2Bh%2Bfootball%2Caps%2C468&sr=8-24&th=1"
            target="_blenk"
          >
            <button className="bg-pink-700 px-6 py-2 rounded-full mt-60 ">
              Buy Now
            </button>
          </a>
        </div>
      </div>
      <img src={logo} />
      {/* អាវត្រឹមនឹង */}
    </div>
  );
}

export default App;
