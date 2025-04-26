export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Crazy Chicken 3D</h3>
            <p className="mb-4">The ultimate 3D chicken adventure game for players of all ages!</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} Crazy Chicken Studios</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-orange-500 transition-colors">Features</a></li>
              <li><a href="#gameplay" className="hover:text-orange-500 transition-colors">Gameplay</a></li>
              <li><a href="#characters" className="hover:text-orange-500 transition-colors">Characters</a></li>
              <li><a href="#testimonials" className="hover:text-orange-500 transition-colors">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="https://crazychicken3d.com/" className="hover:text-orange-500 transition-colors">Help Center</a></li>
              <li><a href="https://crazychicken3d.com/" className="hover:text-orange-500 transition-colors">Community</a></li>
              <li><a href="https://crazychicken3d.com/" className="hover:text-orange-500 transition-colors">Updates</a></li>
              <li><a href="https://crazychicken3d.com/" className="hover:text-orange-500 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="https://crazychicken3d.com/" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="https://crazychicken3d.com/" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="https://crazychicken3d.com/" className="hover:text-orange-500 transition-colors">Cookies</a></li>
              <li><a href="https://crazychicken3d.com/" className="hover:text-orange-500 transition-colors">Licenses</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            All game assets, characters, and related content are fictional and created for demonstration purposes only.
            <br />
            <a href="https://crazychicken3d.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
              https://crazychicken3d.com/
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}