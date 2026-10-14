import React from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { ASSET_CONFIG } from "../../config/siteConfig";

export default function ContactSection({
  formData,
  setFormData,
  formSubmitted,
  setFormSubmitted,
  handleFormSubmit,
}) {
  return (
    <div id="contact" className="lg:col-span-5">
      <div className="bg-[#f8f9fa] text-gray-900 rounded-sm p-6 sm:p-8 shadow-2xl border border-gray-200 relative">
        {/* Form Heading */}
        <div className="mb-6 pb-4 border-b border-gray-200">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#b88914] uppercase block">
            LET'S DISCUSS YOUR SPACE
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight uppercase mt-0.5">
            ENQUIRE ABOUT YOUR PROJECT
          </h3>
        </div>

        {formSubmitted ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
              <FiCheckCircle />
            </div>
            <h4 className="text-lg font-bold text-gray-900">Enquiry Received!</h4>
            <p className="text-xs text-gray-600 max-w-xs mx-auto">
              Opening WhatsApp to connect you directly with our senior engineer...
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="mt-4 text-xs font-bold text-gray-700 underline"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-sm focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542] outline-none text-gray-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-sm focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542] outline-none text-gray-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-sm focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542] outline-none text-gray-900"
                >
                  <option>Residential Construction</option>
                  <option>Blueprint &amp; Floor Plans</option>
                  <option>2BHK / 3BHK House Plan</option>
                  <option>Facing &amp; Vastu Planning</option>
                  <option>Site Supervision</option>
                  <option>Interior Finishing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Preferred Facing
                </label>
                <select
                  value={formData.preferredFacing}
                  onChange={(e) => setFormData({ ...formData, preferredFacing: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-sm focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542] outline-none text-gray-900"
                >
                  <option>North Facing</option>
                  <option>East Facing</option>
                  <option>West Facing</option>
                  <option>South Facing</option>
                  <option>Open to Suggestions</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Plot Dimensions / Area
              </label>
              <input
                type="text"
                placeholder="e.g. 30' x 40' / 1200 sq.ft"
                value={formData.plotDimensions}
                onChange={(e) => setFormData({ ...formData, plotDimensions: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-sm focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542] outline-none text-gray-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Project Details / Message
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your requirements, timeline, or site location..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-sm focus:border-[#F4C542] focus:ring-1 focus:ring-[#F4C542] outline-none text-gray-900 resize-none"
              />
            </div>

            {/* Gold Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 bg-[#F4C542] hover:bg-[#e2b535] text-black font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-sm shadow-md transition-all flex items-center justify-center gap-2 transform active:scale-98"
            >
              <span>Send Enquiry</span>
              <FiArrowRight className="text-base" />
            </button>

            {/* Quick WhatsApp Action */}
            <div className="pt-2 text-center">
              <a
                href={`https://wa.me/${ASSET_CONFIG.contact.whatsappNumber}?text=Hello%20KP%20Builders%20%26%20Designer%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
              >
                <FaWhatsapp size={16} />
                <span>Instant WhatsApp Chat: {ASSET_CONFIG.contact.phone}</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
