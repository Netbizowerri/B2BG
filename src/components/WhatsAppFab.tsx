export default function WhatsAppFab() {
  const phone = '2348167470537';
  const url = `https://wa.me/${phone}?text=Hello%2C%20B2BG%20team!`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl shadow-[#128C7E]/50 transition duration-200 hover:translate-y-0.5 hover:shadow-[#128C7E]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E] md:hidden"
      aria-label="Chat on WhatsApp"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
          className="h-10 w-10 object-contain"
          aria-hidden="true"
        />
      </span>
    </a>
  );
}
