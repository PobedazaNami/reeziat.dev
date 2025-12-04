import { MapPin, Clock, PhoneIcon } from "lucide-react"

export function MapSection() {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-2 uppercase">
          <span className="text-[#0a0a0a]">ДЕ НАС </span>
          <span className="text-[#4CAF50]">ЗНАЙТИ</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">Каменське, Дніпропетровська область</p>

        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          {/* Map - full width on mobile */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42234.67383437988!2d34.4458612!3d48.5388458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbda360ea4dfed%3A0xd0e3b9284b2885f8!2z0JrQsNC80LXQvdGB0LrQvtC1LCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sua!4v1701705600000!5m2!1sru!2sua"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KVADRO:DNEPR Location"
              className="absolute inset-0"
            />
          </div>

          {/* Contact info - stacked cards on mobile */}
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="p-2.5 bg-[#4CAF50]/10 rounded-lg">
                <MapPin className="w-5 h-5 text-[#4CAF50]" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Адреса</p>
                <p className="text-sm font-medium text-[#0a0a0a]">м. Каменське</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="p-2.5 bg-[#FF6B00]/10 rounded-lg">
                <Clock className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Графік</p>
                <p className="text-sm font-medium text-[#0a0a0a]">9:00 - 20:00</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="p-2.5 bg-[#4CAF50]/10 rounded-lg">
                <PhoneIcon className="w-5 h-5 text-[#4CAF50]" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Телефон</p>
                <p className="text-sm font-bold text-[#4CAF50]">+380 XX XXX XX XX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
