import { FC } from "react";
import { motion } from "framer-motion";
import ProductModel from "./ProductModel.tsx";

const ProductSection: FC = () => {
  return (
    <section
      id="product"
      className="bg-[#111] text-white py-24 px-4 md:px-6 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase">
            Hộp kí ức Hà Nội
          </h2>
          <div className="h-px flex-1 bg-white/20" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – 3D MODEL */}
          <motion.div
            className="h-[420px] md:h-[520px] rounded-2xl overflow-hidden bg-black/40"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ProductModel />
          </motion.div>

          {/* RIGHT – PRODUCT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-light leading-relaxed text-white/90 mb-6">
              Một sản phẩm{" "}
              <span className="text-amber-200 font-normal">lưu trữ ký ức</span>{" "}
              bằng công nghệ.
            </h3>

            <p className="text-white/60 leading-loose mb-8">
              Hộp ghi lại hình ảnh, video, âm thanh, vị trí GPS và thời gian —
              tất cả được hiển thị trên bản đồ ký ức cá nhân của bạn.
            </p>

            <ul className="space-y-4">
              {[
                "Lưu trữ ảnh & video theo địa điểm",
                "Ghi nhớ thời gian – thời tiết – tọa độ GPS",
                "Kết nối web / mobile / bản đồ cá nhân",
                "NFC / QR để mở ký ức",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-white/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-200" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
