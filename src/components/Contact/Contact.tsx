import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style.css"
import { MapPin, Phone, Mail, Clock } from "lucide-react";


export const CTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        message: ''
    });


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6 text-white" />,
            title: "Visit Our Studio",
            details: ["123 Architecture Avenue", "Design District, NY 10001"]
        },
        {
            icon: <Phone className="w-6 h-6 text-white" />,
            title: "Call Us",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
        },
        {
            icon: <Mail className="w-6 h-6 text-white" />,
            title: "Email Us",
            details: ["hello@architecturestudio.com", "projects@architecturestudio.com"]
        },
        {
            icon: <Clock className="w-6 h-6 text-white" />,
            title: "Office Hours",
            details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"]
        }
    ];

    return (
        <>
            <section className="contact">
                <div className="max-w-7xl mx-auto px-6 py-10">
                    {/* Header */}
                    <div className="text-center mb-10" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-600 mb-6">
                            Get In <span className="bg-gradient-to-r from-[#1c3c5a] to-[#4671b0] bg-clip-text text-transparent font-semibold">Touch</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#304667] to-[#6bb8ff] rounded-full mx-auto mb-2"></div>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-gray-700/50  transition-all duration-300" data-aos="fade-right">
                            <h3 className="text-2xl font-semibold text--gray-700 mb-6">Send us a Message</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500 mb-2 block">Name *</label>
                                        <input 
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your full name" 
                                            className="w-full px-4 py-3 bg-white/10 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#57eedd] focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500 mb-2 block">Email *</label>
                                        <input 
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="your@email.com" 
                                            className="w-full px-4 py-3 bg-white/10 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#57eedd] focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="text-sm font-medium text-gray-500 mb-2 block">Tour Package</label>
                                    <input 
                                        type="text"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Family, Honeymoon, Adventure..." 
                                        className="w-full px-4 py-3 bg-white/10 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#57eedd] focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                                    />
                                </div>
                                
                                <div>
                                    <label className="text-sm font-medium text-gray-500 mb-2 block">Message *</label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your plan, budget, timeline, and any specific requirements..."
                                        className="w-full px-4 py-3 bg-white/10 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#57eedd] focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                                        required
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="w-full py-4 px-6 bg-gradient-to-br from-[#1c3c5a] to-[#4671b0] text-gray-200 font-semibold rounded-lg hover:from-[#4671b0]  hover:to-[#1c3c5a] transition-all duration-500 transform hover:scale-[1.02]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information & Map */}
                        <div className="space-y-8" data-aos="fade-left">
                            {/* Contact Info Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactInfo.map((info, index) => (
                                <div 
                                key={index} 
                                className="p-6 rounded-xl backdrop-blur-md border border-gray-700/50 hover:border-[#12e3ff] hover:shadow-lg transition-all duration-300"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                >
                                <div className="flex flex-col items-start space-y-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#0b3861] to-[#185850] rounded-xl flex items-center justify-center flex-shrink-0">
                                        {info.icon}
                                    </div>
                                    <div>
                                    <h4 className="font-medium text-gray-700 mb-2">{info.title}</h4>
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-500 text-sm mb-1">{detail}</p>
                                    ))}
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};