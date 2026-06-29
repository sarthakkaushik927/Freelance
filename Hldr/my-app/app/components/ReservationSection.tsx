'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ReservationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="reservation" className="reservation-section">
      <div className="reservation-inner" ref={ref}>
        <motion.div
          className="section-label"
          style={{ justifyContent: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Make a Booking
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Reserve Your Evening
        </motion.h2>
        <motion.p
          style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, marginTop: 12 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tables fill quickly. Secure your preferred time and let us craft an evening to remember.
        </motion.p>

        <motion.form
          className="reservation-form"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.35 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input className="form-input" type="text" placeholder="John" />
          </div>
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input className="form-input" type="text" placeholder="Smith" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input className="form-input" type="tel" placeholder="+91 98765 43210" />
          </div>
          <div className="form-group">
            <label className="form-label">Date</label>
            <input className="form-input" type="date" />
          </div>
          <div className="form-group">
            <label className="form-label">Time</label>
            <select className="form-input">
              <option value="">Select time</option>
              <option>7:00 PM</option>
              <option>7:30 PM</option>
              <option>8:00 PM</option>
              <option>8:30 PM</option>
              <option>9:00 PM</option>
              <option>9:30 PM</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Guests</label>
            <select className="form-input">
              <option value="">Number of guests</option>
              {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Occasion</label>
            <select className="form-input">
              <option value="">Select occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Business Dinner</option>
              <option>Date Night</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group full">
            <label className="form-label">Special Requests</label>
            <input className="form-input" type="text" placeholder="Dietary requirements, seating preferences..." />
          </div>
          <div className="form-submit">
            <button type="submit" className="btn-gold">
              <span>Confirm Reservation</span>
            </button>
          </div>
        </motion.form>

        <motion.p
          style={{ marginTop: 32, fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.05em' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Or call us directly: <span style={{ color: 'var(--gold)' }}>+91 98000 00000</span>
        </motion.p>
      </div>
    </section>
  );
}
