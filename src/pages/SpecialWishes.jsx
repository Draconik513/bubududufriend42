import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.mp4";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
Haiiiiii cantikuuuuuuuuu sayaangggkuuuuu,barakallah fii umrik yahh ❤Happy birthday sayaaannggggg🌷🤍🫰🏻 hari ini adalah hari yang paling aku tunggu - tunggu karena aku bisa merayakan kebahagiaan seseorang yang berati segalanya bagiku 💗💝 Kamu adalah alasan tersenyum setiap hari, alasan aku selalu merasa kuat saat dunia terasa berat🌷semoga hari ini memberikanmu banyak kebahagiaan seperti kamu memberikan kebahagiaan dalam hidupku tiap saat 💗🫰🏻semoga kepribadianmu jauh jauh lebih baik daripada yang sebelumnya yaaa menjadi wanita tangguh💪,semoga kamu selalu dalam lindungan Allah,diberi kesehatan,diberi kekuatan, dan kebahagiaan tiada akhir serta impianmu satu persatu menjadi kenyataan😊aku tau hidup kamu tidak selalu mudah, tapi aku ingin tau bahwa kamu tidak sendiri, aku bakal selalu ngedukung kamu,menyemangati kamuu, dan menjadi pundak mu saat kamu lelah 🫶aku bingung harus mendeskripsikan gimana lagi tentang kamu pokoknya jadilah wanita yang berguna bagi semuanya yaaaaa cantik maaf klo kamu harus ketemu cowo yg kaya aku,yang yang jauh dari kata sempurna yang sering bikin kamu marah,bikin kamu nangis,kecewa dengan sikap aku yg kaya gini aku minta maafff yaaa sayanggg🤍🤍 I have no better gift to give you on this special day than my endles love may almight allah grant you good health and sustenance as you add to your age💗🫰🏻 jangan lupa berterima kasih kapada diri sayang sendiri karna sudah kuat di setiap hari hari yang sayang lewatin,i proud of you💗🤍 sekali lagi heppy birthday sayangggggggggggggggggg iloveeeeeee youuuuu moreeeeeeeeeeeeee,semoga jalan kita berdua dipermudahkan Allah ya aminnnn allahhumma 💗🤏❤️🫰🏻💐🌷aku cinta kamuu🤍dan akan selalu mencintai kamuu💕
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

        <div className="mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          >
            <source src={vidioWishes} type="video/mp4" />
          </video>
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Sembunyikan Cintaku" : "Lihat Cintaku"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  Riska Mellyana💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  Hatiku hanya untukmu, sayang🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
