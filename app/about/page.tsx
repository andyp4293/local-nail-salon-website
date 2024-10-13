import Header from "../components/Header";
import Footer from  '../components/Footer';
import Image from "next/image";
import aboutImage from "../images/aboutpage_image2.jpg";


export default function About() {
    return (
        <div className="font-sans antialiased">
        {/* Header */}
        <Header />

        <main className="container mx-auto px-6 py-12">
            {/* About Us Section */}
            <section className="flex flex-col md:flex-row items-center mt-10">
            {/* Text Block */}
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {`Welcome to ${process.env.NEXT_PUBLIC_NAME}`}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                        {`Located conveniently in ${process.env.NEXT_PUBLIC_ADDRESS}, ABC
                        Nails is committed to bringing you the best moment ever. Ensuring
                        high-quality service and professionalism, our nail salon
                        guarantees to do our very best every time to make our customers
                        happy.`}
                </p>
                <p className="text-lg text-gray-600 mb-6">
                    {`Our team of licensed and highly trained professionals is committed to delivering exceptional service. We continually aim to surpass your expectations while prioritizing your best interests. Our mission is to offer a spa and nail salon you can rely on with confidence.`}
                </p>
                <p className="text-lg text-gray-600 mb-6">
                    {`We consider you our guest, and it is our utmost priority to ensure that you feel not just comfortable but truly special and pampered every time you visit. Our goal is to create a space where you can relax, unwind, and indulge in our wide variety of beautification treatments. Whether you're preparing for a special event or simply treating yourself "just because," we are dedicated to providing you with exceptional service that is both professional and personalized to meet your unique needs.`}
                </p>
                <p className="text-lg text-gray-600 mb-6">
                    {`At our salon, your health and well-being are as important as your beauty. We take great pride in maintaining a safe, clean, and hygienic environment where you can enjoy our services with complete peace of mind. We understand that cleanliness is one of the most critical factors when choosing a nail salon, and we go above and beyond to meet the highest standards.`}
                </p>
                <p className="text-lg text-gray-600">
                    {`Most importantly, our staff is extensively trained to follow rigorous sanitization protocols, ensuring that every tool and surface is properly disinfected. Your safety and hygiene are our top priorities, and we are committed to making sure every visit leaves you not only looking and feeling great but confident that you are in safe hands. We are here to give you a luxurious and worry-free experience that you can trust.`}
                </p>

            </div>
            {/* Image Block */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-3">
                <Image
                src={aboutImage}
                alt="Spa nails"
                className="rounded-lg shadow-lg"
                />
            </div>
            </section>
        </main>
        <Footer/>
        </div>
    );
    }
