import { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, MapPin, Clock, Phone, Check } from 'lucide-react'

export default function ReserveTable() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    requests: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM',
    '08:00 PM', '09:00 PM', '10:00 PM',
  ]

  const occasions = [
    'Birthday', 'Anniversary', 'Business Meeting',
    'Family Gathering', 'Date Night', 'Other',
  ]

  const today = new Date().toISOString().split('T')[0]

  const waMessage = encodeURIComponent(
    `Hi Dhuan Cafe! I just reserved a table.\nName: ${form.name}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}\nOccasion: ${form.occasion || 'N/A'}`
  )

  return (
    <div className="min-h-screen bg-chai-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop&auto=format)' }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-chai-dark/80"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white uppercase mb-4">
            RESERVE A TABLE
          </h1>
          <p className="text-chai-light text-lg max-w-2xl mx-auto font-body">
            Book your perfect spot at Dhuan Cafe for an unforgettable experience
          </p>
          <span className="hidden md:block" style={{ color: '#C17A3A' }}>☕</span>
          <div className="hidden md:block h-px w-16" style={{ backgroundColor: 'rgba(193,122,58,0.5)' }} />
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 bg-chai-dark">
        <div className="max-w-5xl mx-auto px-4 py-20 md:px-6 bg-chai-dark">
          {/* Success Modal */}
          {submitted && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ backgroundColor: 'rgba(61,31,13,0.8)' }}>
              <div className="bg-chai-bg rounded-2xl p-6 md:p-8 max-w-md w-full text-center shadow-2xl border border-chai-main/20">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C17A3A' }}>
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                <h2 className="font-heading text-xl md:text-2xl font-bold uppercase mb-2" style={{ color: '#3D1F0D' }}>
                  Table Reserved!
                </h2>
                <p className="font-body text-xs md:text-sm mb-4 leading-relaxed" style={{ color: '#3D1F0D' }}>
                  Thank you <strong className="font-semibold">{form.name}</strong>! Your table for{' '}
                  <strong className="font-semibold">{form.guests} guests</strong> on{' '}
                  <strong className="font-semibold">{form.date}</strong> at <strong className="font-semibold">{form.time}</strong> is reserved.
                  We'll confirm on WhatsApp shortly.
                </p>
                <div className="rounded-xl px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm font-body mb-6" style={{ backgroundColor: '#FDF8F5', border: '1px solid #C17A3A/30' }}>
                  <div className="flex items-center justify-center gap-1 md:gap-2">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" style={{ color: '#C17A3A' }} />
                    <span className="text-xs md:text-sm" style={{ color: '#3D1F0D' }}>F-7 Markaz, Islamabad</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 md:gap-2 mt-1">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" style={{ color: '#C17A3A' }} />
                    <span className="text-xs md:text-sm" style={{ color: '#3D1F0D' }}>Mon-Sun 8am-11pm</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/923001234567?text=${waMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 md:py-3 rounded-xl font-heading text-xs md:text-sm font-bold text-white uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] block text-center flex items-center justify-center gap-1 md:gap-2"
                    style={{ backgroundColor: '#C17A3A', boxShadow: '0 4px 20px rgba(193,122,58,0.3)' }}
                  >
                    <Phone className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Confirm on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', phone: '', email: '', date: '', time: '', guests: '2', occasion: '', requests: '' })
                    }}
                    className="w-full py-2 md:py-3 rounded-xl font-heading text-xs md:text-sm font-bold uppercase tracking-wide border-2 transition-all duration-300 hover:scale-[1.02]"
                    style={{ borderColor: '#C17A3A', color: '#C17A3A', backgroundColor: 'transparent' }}
                  >
                    <span className="text-xs md:text-sm">Make Another Reservation</span>
                  </button>
                </div>
              </div>
            </div>
         
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-8 md:p-10 shadow-2xl"
          style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(193,122,58,0.25)' }}
        >
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block font-heading text-xs uppercase tracking-widest mb-2" style={{ color: '#E8C49A' }}>
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Ahmed Khan"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(193,122,58,0.3)', color: 'white' }}
              />
            </div>

            <div>
              <label className="block font-heading text-xs uppercase tracking-widest mb-2" style={{ color: '#E8C49A' }}>
                Phone Number
              </label>
              <input
                required
                type="tel"
                placeholder="0300-1234567"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(193,122,58,0.3)', color: 'white' }}
              />
            </div>

            <div>
              <label className="block font-heading text-xs uppercase tracking-widest mb-2" style={{ color: '#E8C49A' }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="ahmed@email.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(193,122,58,0.3)', color: 'white' }}
              />
            </div>

            <div>
              <label className="block font-heading text-xs uppercase tracking-widest mb-2" style={{ color: '#E8C49A' }}>
                Number of Guests
              </label>
              <div className="flex gap-2 flex-wrap">
                {['1', '2', '3', '4', '5', '6', '7', '8+'].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, guests: g }))}
                    className="w-10 h-10 rounded-lg font-heading text-sm font-bold transition-all duration-200"
                    style={{
                      backgroundColor: form.guests === g ? '#C17A3A' : 'rgba(255,255,255,0.06)',
                      color: form.guests === g ? 'white' : '#E8C49A',
                      border: `1px solid ${form.guests === g ? '#C17A3A' : 'rgba(193,122,58,0.3)'}`,
                    }}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-heading text-xs uppercase tracking-widest mb-2" style={{ color: '#E8C49A' }}>
                Date
              </label>
              <input
                required
                type="date"
                min={today}
                value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(193,122,58,0.3)', color: 'white', colorScheme: 'dark' }}
              />
            </div>

            <div>
              <label className="block font-heading text-xs uppercase tracking-widest mb-2" style={{ color: '#E8C49A' }}>
                Time Slot
              </label>
              <select
                required
                value={form.time}
                onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
                className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none"
                style={{ backgroundColor: '#2A1208', border: '1px solid rgba(193,122,58,0.3)', color: 'white', colorScheme: 'dark' }}
              >
                <option value="" disabled>Select a time</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block font-heading text-xs uppercase tracking-widest mb-3" style={{ color: '#E8C49A' }}>
                Occasion (Optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {occasions.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, occasion: f.occasion === o ? '' : o }))}
                    className="px-4 py-2 rounded-full font-heading text-xs uppercase tracking-wide transition-all duration-200"
                    style={{
                      backgroundColor: form.occasion === o ? '#C17A3A' : 'rgba(255,255,255,0.06)',
                      color: form.occasion === o ? 'white' : '#E8C49A',
                      border: `1px solid ${form.occasion === o ? '#C17A3A' : 'rgba(193,122,58,0.3)'}`,
                    }}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block font-heading text-xs uppercase tracking-widest mb-2" style={{ color: '#E8C49A' }}>
                Special Requests (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Any dietary requirements, seating preferences, or special arrangements..."
                value={form.requests}
                onChange={(e) => setForm((f) => ({ ...f, requests: e.target.value }))}
                className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none resize-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(193,122,58,0.3)', color: 'white' }}
              />
            </div>

          </div>

          <div className="my-8 h-px" style={{ backgroundColor: 'rgba(193,122,58,0.2)' }} />

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#C17A3A' }}>
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <p className="font-heading text-[10px] uppercase tracking-wide flex items-center justify-center gap-1" style={{ color: '#C17A3A' }}>
                <MapPin className="w-3 h-3" />
                Location
              </p>
              <p className="font-body text-xs mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                F-7 Markaz, Islamabad
              </p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#C17A3A' }}>
                <Clock className="w-4 h-4 text-white" />
              </div>
              <p className="font-heading text-[10px] uppercase tracking-wide flex items-center justify-center gap-1" style={{ color: '#C17A3A' }}>
                <Clock className="w-3 h-3" />
                Hours
              </p>
              <p className="font-body text-xs mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Mon–Sun: 8am – 11pm
              </p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#C17A3A' }}>
                <Phone className="w-4 h-4 text-white" />
              </div>
              <p className="font-heading text-[10px] uppercase tracking-wide flex items-center justify-center gap-1" style={{ color: '#C17A3A' }}>
                <Phone className="w-3 h-3" />
                Contact
              </p>
              <p className="font-body text-xs mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                051-1234567
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-heading text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
            style={{ backgroundColor: '#C17A3A' }}
          >
            Reserve My Table
          </button>

          <p className="text-center font-body text-xs mt-4" style={{ color: 'rgba(232,196,154,0.5)' }}>
            We'll confirm your reservation via WhatsApp within 30 minutes.
          </p>

        </form>

        <div className="mt-8 text-center">
          <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Prefer to call? Reach us at{' '}
            <a href="tel:05112345678" className="underline" style={{ color: '#E8C49A' }}>
              051-1234567
            </a>
            {' '}or{' '}
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noreferrer"
              className="underline flex items-center justify-center gap-1"
              style={{ color: '#C17A3A' }}
            >
              <Phone className="w-3 h-3" />
              WhatsApp us
            </a>
          </p>
        </div>
      </div>
    </section>
  </div>
)
}