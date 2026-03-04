import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const images = [
  { id: 1, label: 'Programs', url: 'https://i.ibb.co/v6F2F3MS/B2BG.jpg' },
  { id: 2, label: 'Programs', url: 'https://i.ibb.co/2YN5hfCf/B2BG-1.jpg' },
  { id: 3, label: 'Programs', url: 'https://i.ibb.co/gF4c7JSg/B2BG-2.jpg' },
  { id: 4, label: 'Programs', url: 'https://i.ibb.co/Zp0DWw0W/B2BG-3.jpg' },
  { id: 5, label: 'Programs', url: 'https://i.ibb.co/V0wKN3gP/B2BG-4.jpg' },
  { id: 6, label: 'Programs', url: 'https://i.ibb.co/d4NMPbR1/B2BG-5.jpg' },
  { id: 7, label: 'Programs', url: 'https://i.ibb.co/wFjkGXgT/B2BG-6.jpg' },
  { id: 8, label: 'Events', url: 'https://i.ibb.co/K1fYWxq/B2BG-7.jpg' },
  { id: 9, label: 'Events', url: 'https://i.ibb.co/jvjq5DZy/B2BG-8.jpg' },
  { id: 10, label: 'Events', url: 'https://i.ibb.co/8nJ2CK0x/B2BG-9.jpg' },
  { id: 11, label: 'Events', url: 'https://i.ibb.co/RGzR9crL/B2BG-10.jpg' },
  { id: 12, label: 'Events', url: 'https://i.ibb.co/nNS2BR3q/B2BG-11.jpg' },
  { id: 13, label: 'Events', url: 'https://i.ibb.co/yBMVWM47/B2BG-12.jpg' },
  { id: 14, label: 'Events', url: 'https://i.ibb.co/CpmzJFzW/B2BG-13.jpg' },
  { id: 15, label: 'Leadership', url: 'https://i.ibb.co/tTJxpb1Y/B2BG-14.jpg' },
  { id: 16, label: 'About', url: 'https://i.ibb.co/35HFcLSg/Untitled-design.jpg' },
  { id: 17, label: 'Gallery', url: 'https://i.ibb.co/fVrHgD3C/0c5549f1-6fd1-46e1-8a70-20c6f33b8bec.png' },
  { id: 18, label: 'Gallery', url: 'https://i.ibb.co/M3rxnxv/0d1c9ab4-0642-45e8-afb7-da74f6f03bfc.png' },
  { id: 19, label: 'Gallery', url: 'https://i.ibb.co/PzQZ6rff/1d26c261-bbf3-4f58-9cbf-5ee98fe3a9af.png' },
  { id: 20, label: 'Gallery', url: 'https://i.ibb.co/YTBJyHQ6/2b16e8b3-eed5-41e5-a44d-5289295720dd.png' },
  { id: 21, label: 'Gallery', url: 'https://i.ibb.co/bgLTbgJ3/2bcb2520-939a-497f-ad74-3cf22ef8d5d7.png' },
  { id: 22, label: 'Gallery', url: 'https://i.ibb.co/jvYZk4fJ/6c137a11-4def-4bf6-b3ac-a479adf1d390.png' },
  { id: 23, label: 'Gallery', url: 'https://i.ibb.co/PG3Z5yLr/6d1659ac-fc4a-4f1c-a473-1ae51a1352ed.png' },
  { id: 24, label: 'Gallery', url: 'https://i.ibb.co/fYQf95Ph/6f5dac77-7fac-438c-b8aa-9c796e3c4a97.png' },
  { id: 25, label: 'Gallery', url: 'https://i.ibb.co/RTVCyj7Q/6f90445a-66be-4628-95c0-2b90bb1f4f75.png' },
  { id: 26, label: 'Gallery', url: 'https://i.ibb.co/TMfzgJvw/15b018f6-b65a-462c-a0fa-3d0c93faf544.png' },
  { id: 27, label: 'Gallery', url: 'https://i.ibb.co/pjXZssGd/17d6b59a-0b64-4840-9255-6003dad2447c.png' },
  { id: 28, label: 'Gallery', url: 'https://i.ibb.co/g8WSVBp/18f5eb27-8421-4c67-9bcd-840ad80c27ba.png' },
  { id: 29, label: 'Gallery', url: 'https://i.ibb.co/4BjTGR6/70c6899c-606d-4875-bf31-2afb063b7caf.png' },
  { id: 30, label: 'Gallery', url: 'https://i.ibb.co/93qh9zjn/97c58d36-6d2a-4bdd-8d29-e84f29838f74.png' },
  { id: 31, label: 'Gallery', url: 'https://i.ibb.co/VWjgJY8d/757d61a9-bf6c-40b3-b22b-bf29e17bfeb3.png' },
  { id: 32, label: 'Gallery', url: 'https://i.ibb.co/CKNL2MH8/759c247e-46ab-4471-b191-f27f23dd0433.png' },
  { id: 33, label: 'Gallery', url: 'https://i.ibb.co/g8QcS3D/6336ef40-cc43-4428-922d-a37c1d2db8ce.png' },
  { id: 34, label: 'Gallery', url: 'https://i.ibb.co/ZpYC9m14/06701ef1-ccae-41fc-a5a8-3ca169c76cbf.png' },
  { id: 35, label: 'Gallery', url: 'https://i.ibb.co/gMBv5mJS/8838a3c2-b4d5-4ff6-b8a5-bc87cbd069c1.png' },
  { id: 36, label: 'Gallery', url: 'https://i.ibb.co/R571F39/56358d56-d224-48d5-9dc9-9af9c4dec808.png' },
  { id: 37, label: 'Gallery', url: 'https://i.ibb.co/1t3Ddpy8/91266dd7-4412-48ac-8cb0-78dd2ed33d07.png' },
  { id: 38, label: 'Gallery', url: 'https://i.ibb.co/YBT8vhn6/85139520-39df-421e-836a-5790a4915557.png' },
  { id: 39, label: 'Gallery', url: 'https://i.ibb.co/Zp0p2cmh/a39b4056-5e89-4047-97f0-78d62b1e78d7.png' },
  { id: 40, label: 'Gallery', url: 'https://i.ibb.co/yvztgvL/a42df82f-77d1-4194-98d3-80b39046fe97.png' },
  { id: 41, label: 'Gallery', url: 'https://i.ibb.co/nMmzjBqq/a87ead62-dddc-4b9c-a392-3a140268da31.png' },
  { id: 42, label: 'Gallery', url: 'https://i.ibb.co/N2G9zr4G/b7e9eac8-64ca-4c98-8d6a-f58bfa5af390.png' },
  { id: 43, label: 'Gallery', url: 'https://i.ibb.co/VWd89PV5/b49ea29d-1ea2-4330-8877-3b68aa723ba8.png' },
  { id: 44, label: 'Gallery', url: 'https://i.ibb.co/XxzJWJj7/b3898d31-8ea2-41cd-b6c0-70830b23caa0.png' },
  { id: 45, label: 'Gallery', url: 'https://i.ibb.co/Wv8PfZvv/c0236a89-080f-4727-a66a-229803e7e9da.png' },
  { id: 46, label: 'Gallery', url: 'https://i.ibb.co/hRSxgfjz/c8039b7b-31bf-45ed-9d75-5f94fc765a99.png' },
  { id: 47, label: 'Gallery', url: 'https://i.ibb.co/5xRfh053/c8989ae9-282f-41a7-8b54-443577263f2f.png' },
  { id: 48, label: 'Gallery', url: 'https://i.ibb.co/NdRbhM94/c795579c-5265-422c-adfd-bea8e2e57c4d.png' },
  { id: 49, label: 'Gallery', url: 'https://i.ibb.co/5W3Tm5ts/d8ff8a55-3a21-4d91-99c2-94299b747f85.png' },
  { id: 50, label: 'Gallery', url: 'https://i.ibb.co/TD9B4HGS/d67f1b30-e9ee-4573-937f-6ebcb12fea30.png' },
  { id: 51, label: 'Gallery', url: 'https://i.ibb.co/YTZJ35R3/d9052838-c6dc-4c17-b55d-ce644041b731.png' },
  { id: 52, label: 'Gallery', url: 'https://i.ibb.co/b58Pg16n/db1d8948-25aa-4172-9aeb-4f63ab5be3c6.png' },
  { id: 53, label: 'Gallery', url: 'https://i.ibb.co/FbbxkK8k/e5dc3ddf-0dde-4683-aa93-ec5560d0ec1c.png' },
  { id: 54, label: 'Gallery', url: 'https://i.ibb.co/sdRSdGXq/e7e20524-caf9-4013-9485-cf110f04a15b.png' },
  { id: 55, label: 'Gallery', url: 'https://i.ibb.co/4wdCpf2K/e9ba85d3-16a0-411e-b2e7-6929290bf45d.png' },
  { id: 56, label: 'Gallery', url: 'https://i.ibb.co/tTHfdk5y/e91b20c9-4bac-4a0a-8fcd-8a98660b0545.png' },
  { id: 57, label: 'Gallery', url: 'https://i.ibb.co/DFhg6L2/e742cf6b-8baa-4787-8c72-92efbc87830b.png' },
  { id: 58, label: 'Gallery', url: 'https://i.ibb.co/Mxh8G5xg/e2557b77-0ac0-4aa9-bcd8-c6fcbd156358.png' },
  { id: 59, label: 'Gallery', url: 'https://i.ibb.co/r9rYKsH/eb02a1ef-00e3-4f7e-ab67-f6a00fd7e0f3.png' },
  { id: 60, label: 'Gallery', url: 'https://i.ibb.co/wZgsR6FQ/ed609315-694e-4f83-ac35-d26b130c43ce.png' },
  { id: 61, label: 'Gallery', url: 'https://i.ibb.co/TSTz5rT/ee275c5f-bb98-4303-b464-739cfd0460a9.png' },
  { id: 62, label: 'Gallery', url: 'https://i.ibb.co/TM7MPLqv/f1fa8f0d-f23d-4ec6-abc8-f81d0991607b.png' },
  { id: 63, label: 'Gallery', url: 'https://i.ibb.co/tM4v8q4v/f8e47e18-1ca8-415a-b3d5-f859d2a1cf83.png' },
  { id: 64, label: 'Gallery', url: 'https://i.ibb.co/pBsK0254/f4766c72-d688-4842-b674-37625f32114a.png' },
  { id: 65, label: 'Gallery', url: 'https://i.ibb.co/Pvdg5KnD/f5154cec-2c02-4883-a970-4cebe5b5e3ca.png' },
  { id: 66, label: 'Gallery', url: 'https://i.ibb.co/0jsxPB1z/fbc2c0c9-9bd1-4132-83cf-93214abc2940.png' },
  { id: 67, label: 'Gallery', url: 'https://i.ibb.co/vxnRM10V/ffbd6446-8c28-44f3-b4b7-281bda26d629.png' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="text-center mb-12">
        <h2 className="text-accent font-bold uppercase tracking-widest mb-2">Our Impact in Pictures</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-primary">Gallery of Transformation</h3>
      </div>

      {/* Masonry Grid */}
      <motion.div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3 }}
            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl interactive-card"
            onClick={() => setSelectedImage(img.url)}
          >
            <img
              src={img.url}
              alt={img.label}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xs font-bold uppercase tracking-widest bg-accent/80 px-3 py-1 rounded">
                {img.label}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-accent transition-colors">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
