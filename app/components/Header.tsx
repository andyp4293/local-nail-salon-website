export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-3xl font-bold text-teal-600">{process.env.NEXT_PUBLIC_NAME}</div>
                <nav className="space-x-6">
                    <a href="/" className="text-gray-800 hover:text-green-600">
                        Home
                    </a>
                    <a href="about" className="text-gray-800 hover:text-green-600">
                        About Us
                    </a>
                    <a href="#" className="text-gray-800 hover:text-green-600">
                        Booking
                    </a>
                    <a href="#" className="text-green-600 font-semibold">
                        Contact Us
                    </a>
                </nav>
            </div>
        </header>
    );
}
