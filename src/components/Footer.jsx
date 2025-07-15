
// Logo 2 cropped
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const logoHead = "https://res.cloudinary.com/dywebgn1p/image/upload/v1750593737/Logo_2_redCropped_iyfn5l.jpg";
  
  const navigate= useNavigate();

  const NavigateTo=(path)=>{
    navigate(path);
    window.scrollTo(0,0)
  };
  
  return (
    <>
      <footer className="bg-white text-black py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo Column */}
          <div>
            <img src={logoHead} alt="Logo" className="h-28" />
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg mb-4 font-semibold text-[#e63946]">
              About Us
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering students with quality education through personalized
              tutoring services. Connect with expert tutors for academic
              success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 font-semibold text-[#e63946]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                onClick={() => NavigateTo("/")}
                className="text-gray-600 hover:text-red-500 transition-colors"
              >
                Home
              </button>
              </li>
              <li>
                <button
                onClick={() => NavigateTo("/findmentor")  }
              
                className="text-gray-600 hover:text-red-500 transition-colors"
              >
                Find A Mentor
              </button>
              </li>
              <li>
                <button
                onClick={() => NavigateTo("/apply")}
                className="text-gray-600 hover:text-red-500 transition-colors"
              >
                Be A Mentor
              </button>
              </li>
              <li>
                <button
                onClick={() => NavigateTo("/contact")}
                className="text-gray-600 hover:text-red-500 transition-colors"
              >
                Contact Us
              </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4 font-semibold text-[#e63946]">
              Contact info
            </h3>
            <p className="text-gray-600 mb-2 text-sm">
              Email: info@topperstuitionbureau.com
            </p>
            <p className="text-gray-600 mb-2 text-sm">
              Phone: +91 90760 61166
            </p>
            <p className="text-gray-600 mb-2 text-sm">
              Address: Ahmadi Tower, 1st Rabodi, Thane, Maharashtra - 400601
            </p>
          </div>
        </div>

        {/* Footer bottom */}
        <div>
          <p className="mt-8 pt-8 border-t border-gray-300 text-center text-gray-500 text-sm">
            &copy; 2025 Toppers Tuition Bureau. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
