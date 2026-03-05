import { motion } from 'framer-motion';
import { useState } from 'react';

// Reemplaza con tu número en formato internacional (ej: 573001234567)
const WHATSAPP_NUMBER = '573001234567';
const CALENDLY_URL = 'https://calendly.com/tu-usuario/llamada-estrategica';

export default function Contacto() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = ['Hola, me gustaría hablar con un asesor de FreeAgents.'];
    if (phone.trim()) parts.push(`Mi número: ${phone.trim()}.`);
    if (message.trim()) parts.push(message.trim());
    const fullText = parts.join(' ');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullText)}`, '_blank');
  };

  return (
    <section id="contacto" className="relative py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold text-center text-white mb-4"
        >
          Contacto
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/75 mb-12"
        >
          Escríbenos o agenda una llamada estratégica.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario WhatsApp - estilo fa-brand: marco neón, bordes redondeados, glow */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-6 sm:p-8 border-2 border-neon-blue/30 shadow-neon"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-2xl">
                💬
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
                <p className="text-white/70 text-sm">Escribenos o deja tu número</p>
              </div>
            </div>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                  Tu número (opcional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+57 300 123 4567"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-neon-blue/50 focus:ring-2 focus:ring-neon-blue/20 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-neon-blue/50 focus:ring-2 focus:ring-neon-blue/20 outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold bg-emerald-500/90 text-white hover:bg-emerald-500 transition shadow-lg hover:shadow-emerald-500/30"
              >
                Abrir WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Calendly - estilo fa-brand: marco con glow neón azul/morado, bordes redondeados */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-6 sm:p-8 border-2 border-neon-purple/30 shadow-neon overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neon-blue/20 flex items-center justify-center text-2xl">
                📅
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Agenda una llamada</h3>
                <p className="text-white/70 text-sm">Elige día y hora con un asesor</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-space-mid/50 min-h-[320px] flex items-center justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center justify-center px-8 py-4 bg-neon-blue/30 text-white border border-neon-blue/60 rounded-xl font-semibold hover:bg-neon-blue/50 w-full sm:w-auto"
              >
                Abrir Calendly
              </a>
            </div>
            <p className="text-white/50 text-sm mt-4 text-center">
              Serás redirigido a Calendly para elegir tu horario.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
