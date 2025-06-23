import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    console.log("Form submitted:", formData);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form and show success
    setFormData({ name: "", email: "", subject: "", message: "" });
    setShowSuccess(true);
    setIsSubmitting(false);

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="px-4 pb-6 pt-8">
          <h1 className="text-white text-4xl font-bold leading-tight tracking-[-0.02em] mb-3">Contact Us</h1>
          <p className="text-[#adadad] text-lg leading-relaxed max-w-2xl">
            We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to reach out to us. Our team is dedicated to providing you with the best
            possible experience.
          </p>
        </div>

        {/* Customer Support */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Customer Support</h3>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          For assistance with orders, product information, or general inquiries, please contact our customer support team. We aim to respond to all inquiries within 24-48
          hours.
        </p>
        {/* Contact Form */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Send us a Message</h3>

        {/* Success Message */}
        {showSuccess && (
          <div className="mx-4 mb-4 p-4 bg-green-900/50 border border-green-700 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="text-green-400 text-xl">✓</div>
              <div>
                <p className="text-green-400 font-medium">Message sent successfully!</p>
                <p className="text-green-300 text-sm">We'll get back to you within 24-48 hours.</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="px-4 py-3 space-y-4 max-w-[600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <p className="text-white text-base font-medium leading-normal pb-2">Name *</p>
              <input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-blue-500 border-none bg-[#363636] h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal transition-all duration-300"
              />
            </label>
            <label className="flex flex-col">
              <p className="text-white text-base font-medium leading-normal pb-2">Email *</p>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-blue-500 border-none bg-[#363636] h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal transition-all duration-300"
              />
            </label>
          </div>
          <label className="flex flex-col">
            <p className="text-white text-base font-medium leading-normal pb-2">Subject *</p>
            <select
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-blue-500 border-none bg-[#363636] h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal transition-all duration-300"
            >
              <option value="">Select a subject</option>
              <option value="order">Order Support</option>
              <option value="product">Product Inquiry</option>
              <option value="collaboration">Collaboration</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="flex flex-col">
            <p className="text-white text-base font-medium leading-normal pb-2">Message *</p>
            <textarea
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-blue-500 border-none bg-[#363636] placeholder:text-[#adadad] p-4 text-base font-normal leading-normal transition-all duration-300"
            />
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 ${
              isSubmitting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-black hover:bg-gray-800 hover:scale-105 hover:shadow-lg'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span className="truncate">Sending...</span>
              </div>
            ) : (
              <span className="truncate">Send Message</span>
            )}
          </button>
        </form>

        {/* Social Media */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Social Media</h3>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          Stay connected with us on social media for the latest updates, promotions, and behind-the-scenes content. Follow us on:
        </p>
        <div className="@container">
          <div className="gap-2 px-4 flex flex-wrap justify-start">
            <div className="flex flex-col items-center gap-2 bg-[#1a1a1a] py-2.5 text-center w-20">
              <div className="rounded-full bg-[#363636] p-2.5">
                <div className="text-white" data-icon="InstagramLogo" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="text-white text-sm font-medium leading-normal">Instagram</p>
            </div>
            <div className="flex flex-col items-center gap-2 bg-[#1a1a1a] py-2.5 text-center w-20">
              <div className="rounded-full bg-[#363636] p-2.5">
                <div className="text-white" data-icon="TwitterLogo" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="text-white text-sm font-medium leading-normal">Twitter</p>
            </div>
            <div className="flex flex-col items-center gap-2 bg-[#1a1a1a] py-2.5 text-center w-20">
              <div className="rounded-full bg-[#363636] p-2.5">
                <div className="text-white" data-icon="FacebookLogo" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="text-white text-sm font-medium leading-normal">Facebook</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Frequently Asked Questions</h3>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          Check out our FAQ section for answers to common questions about shipping, returns, sizing, and more.
        </p>
        <div className="flex px-4 py-3 justify-start">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#363636] hover:bg-[#4a4a4a] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <span className="truncate">View FAQs</span>
          </button>
        </div>

        {/* Product Previews */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Product Previews</h3>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYY2PVC58Ob6-5Lyu-h-Ld97FChFutCtk0S0yv6H1Bu5DySls9qohTZTiwr09JYNzjjz7vnjklxPBk8paUfVteZ8i15ZUbPWwdNgVoprbmisI3t2edORuZE5sIlVJ3fjcaIdfhkyEk7DFKMYzmnbJZZzsniqjOhVzzokNirHN4veEJOCtBIoSVTFT5X6FiQcG3q8WPBOVYjTzNvE5xlWXkZzl3yFQ_D2KC41c_HmCm_mj0H4lXeMZ07ka9w77nquo0j_QJACedPWqg")'
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Urban Edge Tee</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">$25</p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKI_KHB6GezSK3z1cmR62pBM-zd4VQU_sSPnsmouQ3-Rv4YgQjuPkgBgHHvwF5dQo38YeRWVhLSjq8dDh0TKQl6yLq5vX6a94eMdHmjmGo_zhSatHJkQNtoFtXfkFbwHph6gLnaBvo32qAeuhGuDfCrccbvDh4Z9sgeB3nzSZ_0wSR1jnUenfiSsuu3MN1f08u2ttz_R6IToXeq-3Ce1yTTGWH0wIkFzk-k8pdAzLMQY7gBPSyiAAbriMfSgaZZJJ_K09fnd-n9qgC")'
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Street Style Hoodie</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">$60</p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDL5bfqR9UTqGKRVgjE_eFDrHKfTXQz-FDbFH85IRzSO_qcc4fFGTE8e7rMxR24TPC7W88zf6YWqocp2gxn7xOeEcWZtrYotEauiSpKe9-5PDPLIIL_HhhCZrlsa9KMqVVCbLqr8YWZ8HOcNrht3b4owoJp6M-PHsHnhf3il6l7TqGMoaac-53GiPR5jkY1azSaqPukyZMYhamFrNt21EROmYjKLOf9uQexLtreqGJxHIn4BRKv5Egyrc_rpcrGqjrnWjdfvgUiG3SM")'
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Graffiti Snapback</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">$30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
