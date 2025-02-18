"use client"
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message is required"),
  subject: z.enum(["general", "technical", "feedback"], {
    required_error: "Please select a subject",
  }),
})

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
    // Handle form submission here
  }

  return (
    
   <div>

  <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.5, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
       
      >
        <section className="text-center py-8 px-4 sm:px-8">
  <div className="text-gray-500 text-xs sm:text-sm tracking-wider uppercase">
    Tech Forge
  </div>
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold   mt-10 ">Contacts</h1>
  <p className="mt-5 text-base sm:text-lg md:text-xl   ">
 { `Got Questions? We're Just a Message Away!`}
  </p>
  </section>
      </motion.div>
    </AuroraBackground>

     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
       
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact Information Sidebar */}
            <div className="bg-[#001524] p-8 text-white">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-semibold mb-6"
              >
                Contact Information
              </motion.h2>
              <p className="text-gray-300 mb-8">Have some big idea or brand to develop and need help?</p>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4">
                  <Mail className="h-5 w-5" />
                  <span>info@example.com</span>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4">
                  <Phone className="h-5 w-5" />
                  <span>+158 996 888</span>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5" />
                  <span>123 Street 256 House</span>
                </motion.div>
              </div>

              <div className="mt-12 flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      {...register("firstName")}
                      placeholder="First Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                    {errors.firstName && <p className="mt-1 text-red-500 text-sm">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <input
                      {...register("lastName")}
                      placeholder="Last Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                    {errors.lastName && <p className="mt-1 text-red-500 text-sm">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      {...register("phone")}
                      placeholder="Phone No."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                    {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <input
                      {...register("email")}
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    placeholder="Write Message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  ></textarea>
                  {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <div>
                  <p className="text-gray-700 mb-2">Select Subject</p>
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
                    {["general", "technical", "feedback"].map((value) => (
                      <label key={value} className="inline-flex items-center">
                        <input
                          type="radio"
                          {...register("subject")}
                          value={value}
                          className="form-radio text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700 capitalize">{value}</span>
                      </label>
                    ))}
                  </div>
                  {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-300"
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
   </div>
  )
}

