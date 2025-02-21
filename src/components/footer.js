import React from "react";

const Footer = () => {
  return (
    <footer class="w-full bg-gray-800 text-white py-8 px-4 md:px-12">
    <div class="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        
        <div>
            <h3 class="text-xl font-bold mb-4">Coordinators</h3>
            <p class="text-gray-300"><strong>Student Coordinator:</strong> Chandan L - 8317335589 | Supriya - 9535247953</p>
            <p class="text-gray-300"><strong>Faculty Coordinator:</strong> Dr. Jane Smith - +91 XXXXXXXXXX</p>
        </div>
        
        <div>
            <h3 class="text-xl font-bold mb-4">Useful Links</h3>
            <ul>
                <li><a href="https://www.sirmvit.edu/" class="text-blue-400 hover:underline">Official Website</a></li>
                <li><a href="https://www.youtube.com/@SIRMVIT-MCA/videos" class="text-blue-400 hover:underline">MCA YouTube Channel</a></li>
            </ul>
        </div>
    </div>
</footer>
  );
};

export default Footer;
