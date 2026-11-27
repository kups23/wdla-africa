import Image from "next/image";

export default function VenueSection() {
  return (
    <section className="bg-white py-28 border-t border-neutral-200">
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and 3 Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.08] tracking-tight mb-2">
                <span className="text-[#F5A623]">Glee Hotels</span> <br />
                <span className="text-neutral-900">Nairobi, Kenya</span>
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal mt-4">
                A modern venue designed for keynotes, breakout rooms, partner booths, and networking
                moments.
              </p>
            </div>

            {/* 3 Info Cards with warm border */}
            <div className="space-y-4 pt-4">
              <div className="border border-[#F5A623]/60 bg-amber-50/15 rounded-2xl p-6 transition-all hover:border-[#F5A623]">
                <h3 className="text-lg font-bold text-[#F5A623] mb-1">Address</h3>
                <p className="text-neutral-700 text-sm font-medium">Glee Hotels, Nairobi, Kenya</p>
              </div>

              <div className="border border-[#F5A623]/60 bg-amber-50/15 rounded-2xl p-6 transition-all hover:border-[#F5A623]">
                <h3 className="text-lg font-bold text-[#F5A623] mb-1">Access</h3>
                <p className="text-neutral-700 text-sm font-medium">
                  Parking, rideshare drop-off, and public transport nearby
                </p>
              </div>

              <div className="border border-[#F5A623]/60 bg-amber-50/15 rounded-2xl p-6 transition-all hover:border-[#F5A623]">
                <h3 className="text-lg font-bold text-[#F5A623] mb-1">Nearby</h3>
                <p className="text-neutral-700 text-sm font-medium">
                  Hotels, restaurants, cafes, and airport access
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Images in 2x2 Grid with gold border */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Hotel 01 */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#F5A623] shadow-md group">
                <Image
                  src="/images/hotel01.jpg"
                  alt="Glee Hotels Exterior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Hotel 02 */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#F5A623] shadow-md group">
                <Image
                  src="/images/hotel02.jpg"
                  alt="Glee Hotels Conference Hall"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Hotel 03 */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#F5A623] shadow-md group">
                <Image
                  src="/images/hotel03.jpg"
                  alt="Glee Hotels Lobby Lounge"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Hotel 04 */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#F5A623] shadow-md group">
                <Image
                  src="/images/hotel04.jpg"
                  alt="Glee Hotels Reception"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

