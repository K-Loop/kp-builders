import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSend } from "react-icons/fi";

export default function PlanEnquiryModal({
  isOpen,
  planTitle,
  formData,
  setFormData,
  onClose,
  onSubmit,
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#f8f9fa] text-gray-900 w-full max-w-md rounded-sm p-6 shadow-2xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-gray-200">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#b88914] uppercase">
                CUSTOM PLAN REQUEST
              </span>
              <h3 className="text-lg font-bold text-gray-900 uppercase">
                {planTitle || "Architectural Plan"}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-black"
            >
              <FiX size={20} />
            </button>
          </div>

          <form
            onSubmit={(e) => {
              onClose();
              onSubmit(e);
            }}
            className="mt-4 space-y-3.5"
          >
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-sm focus:border-[#F4C542] outline-none text-gray-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-sm focus:border-[#F4C542] outline-none text-gray-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Plot Dimensions / Notes
              </label>
              <input
                type="text"
                value={formData.plotDimensions}
                onChange={(e) => setFormData({ ...formData, plotDimensions: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-sm focus:border-[#F4C542] outline-none text-gray-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Customization Notes
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-sm focus:border-[#F4C542] outline-none text-gray-900 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F4C542] hover:bg-[#e2b535] text-black font-extrabold text-xs uppercase tracking-wider py-3 rounded-sm flex items-center justify-center gap-2"
            >
              <FiSend />
              <span>Send Request via WhatsApp</span>
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
