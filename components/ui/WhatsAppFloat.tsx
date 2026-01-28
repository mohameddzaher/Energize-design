"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_NUMBER = "966532032973";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppFloat() {
  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white/20 transition hover:scale-110 hover:shadow-xl hover:ring-[#25D366]/50 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />
    </Link>
  );
}
