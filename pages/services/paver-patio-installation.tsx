import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Home, Shield, Wrench, Calendar, Phone } from "lucide-react";

export default function PaverPatioInstallation() {
  return (
    <>
      <Head>
        <title>Paver Patio Installation | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Expert paver patio installation in San Antonio, TX. Custom outdoor living spaces with quality materials and professional craftsmanship. Transform your backyard." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/paver-patio-installation" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Paver Patio Installation
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Create the perfect outdoor living space with custom paver patios. Expert installation in San Antonio 
                  with quality materials and craftsmanship that withstands Texas weather and enhances your property value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Patio Quote
                  </a>
                  <a 
                    href="tel:2012544911"
                    className="border-2 border-purple-800 text-purple-800 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    Call (201) 254-4911
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits of Paver Patios */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Choose Paver Patios?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Durability & Longevity</h3>
                      <p className="text-gray-700">Quality pavers withstand Texas heat, freeze-thaw cycles, and heavy use for decades without cracking like concrete.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Design Flexibility</h3>
                      <p className="text-gray-700">Unlimited design possibilities with various colors, textures, sizes, and patterns to match your home's architecture.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Low Maintenance</h3>
                      <p className="text-gray-700">Easy to clean and maintain. Individual pavers can be replaced if damaged without affecting the entire patio.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Immediate Use</h3>
                      <p className="text-gray-700">Unlike concrete, paver patios can be used immediately after installation with no curing time required.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Property Value Increase</h3>
                      <p className="text-gray-700">Professional paver patios provide excellent ROI and make your property more attractive to potential buyers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Weather Resistance</h3>
                      <p className="text-gray-700">Designed to handle San Antonio's climate extremes from scorching summers to occasional winter freezes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Slip Resistance</h3>
                      <p className="text-gray-700">Textured surfaces provide better traction than smooth concrete, especially when wet from rain or pool water.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Eco-Friendly Drainage</h3>
                      <p className="text-gray-700">Permeable options allow water infiltration, reducing runoff and helping with drainage management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Paver Types & Materials */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Quality Paver Materials</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Concrete Pavers</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Versatile and cost-effective option available in numerous colors, textures, and sizes. 
                    Excellent durability and design flexibility for any budget.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Wide variety of colors and styles</li>
                    <li>• Consistent sizing and quality</li>
                    <li>• Excellent value for money</li>
                    <li>• Easy to source and replace</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Natural Stone</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Premium option featuring flagstone, travertine, or limestone for elegant, 
                    unique outdoor spaces with natural beauty and character.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Unique natural variations</li>
                    <li>• Premium aesthetic appeal</li>
                    <li>• Excellent heat resistance</li>
                    <li>• Long-term investment value</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-purple-909 mb-3">Clay Brick Pavers</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Classic, timeless appeal with rich colors that develop character over time. 
                    Perfect for traditional and historical home styles.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Traditional, timeless appeal</li>
                    <li>• Rich, natural colors</li>
                    <li>• Improves with age</li>
                    <li>• Excellent for historic homes</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Installation Process */}
          <section className="py-16 bg-blue-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Expert Installation Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-purple-800 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Design & Planning</h3>
                  <p className="text-gray-700 text-xs">
                    Site measurement, design consultation, and material selection to create your perfect outdoor space.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-green-700 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Excavation</h3>
                  <p className="text-gray-700 text-xs">
                    Precise excavation to proper depth, ensuring adequate space for base materials and pavers.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-blue-700 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Base Preparation</h3>
                  <p className="text-gray-700 text-xs">
                    Compacted gravel base and sand leveling layer for stable, long-lasting foundation.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-orange-700 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Paver Installation</h3>
                  <p className="text-gray-700 text-xs">
                    Careful placement of pavers according to design pattern with proper spacing and alignment.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-red-700 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Finishing</h3>
                  <p className="text-gray-700 text-xs">
                    Edge restraints, joint sand application, and compaction for a professional finish.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Design Options */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Popular Patio Design Options</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Running Bond</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Classic brick-like pattern that's versatile and visually appealing. 
                    Works well with rectangular pavers of any size.
                  </p>
                  <p className="text-xs text-gray-600">Great for: Traditional and contemporary styles</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Herringbone</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Zigzag pattern that creates visual interest and provides excellent 
                    structural stability for high-traffic areas.
                  </p>
                  <p className="text-xs text-gray-600">Great for: Driveways and high-use patios</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Circular Patterns</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Elegant circular or curved designs that create focal points 
                    and add sophistication to outdoor spaces.
                  </p>
                  <p className="text-xs text-gray-600">Great for: Entertainment areas and courtyards</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Mixed Sizes</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Combination of different paver sizes creates dynamic, 
                    natural-looking surfaces with unique character.
                  </p>
                  <p className="text-xs text-gray-600">Great for: Casual, relaxed outdoor living</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Border Accents</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Contrasting border colors or materials that define edges 
                    and add professional finishing touches.
                  </p>
                  <p className="text-xs text-gray-600">Great for: Polished, high-end appearance</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Permeable Design</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Eco-friendly option with wider joints filled with gravel 
                    for better drainage and environmental benefits.
                  </p>
                  <p className="text-xs text-gray-600">Great for: Drainage management and sustainability</p>
                </div>
              </div>
            </div>
          </section>

          {/* Maintenance & Care */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Easy Maintenance & Long-Term Care</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Simple Cleaning</h3>
                  <p className="text-gray-700 mb-4">
                    Regular sweeping and occasional pressure washing keep pavers looking new. 
                    Most stains can be removed with simple household cleaners.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Joint Sand Maintenance</h3>
                  <p className="text-gray-700 mb-4">
                    Polymeric sand application every few years keeps joints stable and prevents 
                    weed growth while maintaining the professional appearance.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Individual Replacement</h3>
                  <p className="text-gray-700">
                    If a paver becomes damaged, individual pieces can be easily replaced without 
                    affecting surrounding areas—unlike concrete that would require full section replacement.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Annual Maintenance Checklist</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Sweep debris and clean stains as needed</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Pressure wash annually or as needed</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Reapply joint sand every 2-3 years</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Check and adjust any settled pavers</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Seal pavers if desired (optional enhancement)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Investment & ROI */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Investment Value & ROI</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <Home className="text-blue-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Property Value Increase</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Professional paver patios typically return 60-80% of investment in increased home value, 
                    while providing immediate enjoyment benefits.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <Shield className="text-green-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Long-Term Durability</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Quality paver installations last 25+ years with minimal maintenance, 
                    making them more cost-effective than alternatives over time.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <Calendar className="text-purple-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Year-Round Enjoyment</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Extend your living space outdoors and enjoy your patio for entertaining, 
                    relaxation, and family activities throughout San Antonio's mild winters.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Create Your Dream Patio?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Transform your backyard into an outdoor living paradise with a custom paver patio. 
                Professional installation, quality materials, and expert craftsmanship guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:2012544911"
                  className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 justify-center"
                >
                  <Phone size={20} />
                  Call (201) 254-4911
                </a>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Get Free Patio Design
                </Link>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Related Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href="/services/outdoor-kitchens"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Outdoor Kitchens</h3>
                  <p className="text-gray-600">Complete your patio with a custom outdoor kitchen and entertaining area</p>
                </Link>
                <Link 
                  href="/services/fire-pit-installation"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Fire Pit Installation</h3>
                  <p className="text-gray-600">Add warmth and ambiance with professional fire pit installation</p>
                </Link>
                <Link 
                  href="/services"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">View All Services</h3>
                  <p className="text-gray-600">Explore our complete range of landscaping services</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Back to Services */}
          <section className="py-8 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4 text-center">
              <Link href="/services" className="text-purple-700 hover:text-purple-900 underline font-medium">
                ← Back to All Services
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}