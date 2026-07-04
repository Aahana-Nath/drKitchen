<template>
  <div>

    <!-- Hero Section -->
    <section style="position:relative; overflow:hidden; height:480px;">
      <img
        src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/993a91e0-314d-4eca-ad26-069aa1877c2f_kal92h"
        alt="Contact DrKitchen"
        style="width:100%; height:100%; object-fit:cover; object-position:center 40%;"
      />
      <!-- Overlay gradient -->
      <div style="position:absolute; inset:0; background:linear-gradient(to right, rgba(31,27,22,0.72) 0%, rgba(31,27,22,0.35) 55%, transparent 100%);"></div>

      <!-- Hero text -->
      <div style="position:absolute; inset:0; display:flex; align-items:center; padding:0 80px;">
        <div>
          <div class="section-label" style="margin-bottom:20px; color:rgba(255,255,255,0.75);">Get In Touch</div>
          <h1 style="font-family:var(--font-display); font-size:68px; font-weight:600; color:#fff; line-height:0.95; margin:0 0 20px;">
            We'd love to<br>
            <em style="font-style:italic; color:var(--clr-gold-lt);">hear</em> from you
          </h1>
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:20px;">
            <span style="height:1px; width:36px; background:var(--clr-gold); opacity:0.6; display:block;"></span>
            <span style="height:1px; width:8px; background:var(--clr-gold); opacity:0.4; display:block;"></span>
          </div>
          <p style="font-family:var(--font-body); font-size:16px; color:rgba(255,255,255,0.72); max-width:420px; line-height:1.7; margin:0;">
            Whether you have a question, feedback, or business enquiry,<br>our team is here to help you with the freshest support.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section style="background:var(--clr-bg); padding:72px 0 80px;">
      <div style="max-width:1200px; margin:0 auto; padding:0 40px; display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:start;">

        <!-- Left: Contact Info -->
        <div>
          <div class="section-label" style="margin-bottom:16px;">Reach Us</div>
          <h2 style="font-family:var(--font-display); font-size:42px; font-weight:600; color:#1a1a1a; margin:0 0 32px; line-height:1.1;">Get In Touch</h2>

          <div style="display:flex; flex-direction:column; gap:22px;">

            <div v-for="item in contactItems" :key="item.label" style="display:flex; align-items:flex-start; gap:16px;">
              <div style="width:42px; height:42px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; background:#8B1A1A;">
                <i :class="item.icon" style="font-size:14px; color:#fff;"></i>
              </div>
              <div>
                <p style="font-family:var(--font-body); font-size:14px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; color:#1a1a1a; margin:0 0 6px;">{{ item.label }}</p>
                <p style="font-family:var(--font-body); font-size:16px; color:#1a1a1a; margin:0; line-height:1.6;" v-html="item.value"></p>
              </div>
            </div>

          </div>

          <!-- Business Hours -->
          <div style="margin-top:40px; padding:24px 28px; background:var(--clr-card); border-radius:16px; border:1px solid rgba(181,138,58,0.12);">
            <h3 style="font-family:var(--font-display); font-size:24px; font-weight:600; color:#1a1a1a; margin:0 0 18px;">Business Hours</h3>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid rgba(181,138,58,0.1);">
                <div style="display:flex; align-items:center; gap:10px;">
                  <div style="width:28px; height:28px; border-radius:50%; background:#8B1A1A; display:flex; align-items:center; justify-content:center;">
                    <i class="fas fa-clock" style="font-size:11px; color:#fff;"></i>
                  </div>
                  <span style="font-family:var(--font-body); font-size:15px; font-weight:600; color:#1a1a1a;">Monday – Saturday</span>
                </div>
                <span style="font-family:var(--font-body); font-size:15px; color:#1a1a1a;">9:00 AM – 6:00 PM</span>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center; gap:10px;">
                  <div style="width:28px; height:28px; border-radius:50%; background:#8B1A1A; display:flex; align-items:center; justify-content:center;">
                    <i class="fas fa-calendar-times" style="font-size:11px; color:#fff;"></i>
                  </div>
                  <span style="font-family:var(--font-body); font-size:15px; font-weight:600; color:#666;">Sunday</span>
                </div>
                <span style="font-family:var(--font-body); font-size:15px; color:#666;">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Map + Form stacked -->
        <div style="display:flex; flex-direction:column; gap:32px;">

          <!-- Map -->
          <div style="border-radius:20px; overflow:hidden; box-shadow:var(--shadow-card); border:1px solid rgba(181,138,58,0.1);">
            <div style="padding:20px 24px 0; background:var(--clr-card);">
              <h3 style="font-family:var(--font-display); font-size:20px; font-weight:600; color:var(--clr-dark); margin:0 0 16px;">Find Us Here</h3>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.7!2d77.07!3d28.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18e5b46a0001%3A0x1!2sSector+47%2C+Gurugram%2C+Haryana!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="240"
              style="display:block; border:none;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <!-- Contact Form -->
          <div style="background:var(--clr-card); border-radius:20px; padding:32px 28px; box-shadow:var(--shadow-card); border:1px solid rgba(181,138,58,0.1);">
            <h3 style="font-family:var(--font-display); font-size:26px; font-weight:600; color:var(--clr-dark); margin:0 0 6px;">Send Us a Message</h3>
            <p style="font-family:var(--font-body); font-size:13px; color:var(--clr-muted); margin:0 0 24px;">We'll get back to you within 24 hours.</p>

            <form @submit.prevent="submitForm" style="display:flex; flex-direction:column; gap:14px;">
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
                <div>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Your Name"
                    required
                    style="width:100%; padding:11px 14px; border:1px solid rgba(181,138,58,0.25); border-radius:10px; font-family:var(--font-body); font-size:13px; color:var(--clr-dark); background:var(--clr-bg); outline:none; transition:border-color 0.2s; box-sizing:border-box;"
                    @focus="(e: FocusEvent) => (e.target as HTMLElement).style.borderColor='var(--clr-gold)'"
                    @blur="(e: FocusEvent) => (e.target as HTMLElement).style.borderColor='rgba(181,138,58,0.25)'"
                  />
                </div>
                <div>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="Your Email"
                    required
                    style="width:100%; padding:11px 14px; border:1px solid rgba(181,138,58,0.25); border-radius:10px; font-family:var(--font-body); font-size:13px; color:var(--clr-dark); background:var(--clr-bg); outline:none; transition:border-color 0.2s; box-sizing:border-box;"
                    @focus="(e: FocusEvent) => (e.target as HTMLElement).style.borderColor='var(--clr-gold)'"
                    @blur="(e: FocusEvent) => (e.target as HTMLElement).style.borderColor='rgba(181,138,58,0.25)'"
                  />
                </div>
              </div>
              <input
                v-model="form.subject"
                type="text"
                placeholder="Subject"
                style="width:100%; padding:11px 14px; border:1px solid rgba(181,138,58,0.25); border-radius:10px; font-family:var(--font-body); font-size:13px; color:var(--clr-dark); background:var(--clr-bg); outline:none; transition:border-color 0.2s; box-sizing:border-box;"
                @focus="(e: FocusEvent) => (e.target as HTMLElement).style.borderColor='var(--clr-gold)'"
                @blur="(e: FocusEvent) => (e.target as HTMLElement).style.borderColor='rgba(181,138,58,0.25)'"
              />
              <textarea
                v-model="form.message"
                placeholder="Your Message"
                rows="4"
                required
                style="width:100%; padding:11px 14px; border:1px solid rgba(181,138,58,0.25); border-radius:10px; font-family:var(--font-body); font-size:13px; color:var(--clr-dark); background:var(--clr-bg); outline:none; transition:border-color 0.2s; resize:vertical; box-sizing:border-box;"
                @focus="(e: FocusEvent) => (e.target as HTMLElement).style.borderColor='var(--clr-gold)'"
                @blur="(e: FocusEvent) => (e.target as HTMLElement).style.borderColor='rgba(181,138,58,0.25)'"
              ></textarea>
              <button
                type="submit"
                class="dk-btn"
                style="align-self:flex-start;"
              >
                Send Message <i class="fas fa-arrow-right" style="font-size:11px;"></i>
              </button>
            </form>

            <!-- Success message -->
            <div v-if="submitted" style="margin-top:16px; padding:14px 18px; background:rgba(65,84,59,0.08); border:1px solid rgba(65,84,59,0.2); border-radius:10px; display:flex; align-items:center; gap:10px;">
              <i class="fas fa-check-circle" style="color:var(--clr-green); font-size:16px;"></i>
              <p style="font-family:var(--font-body); font-size:13px; color:var(--clr-green); margin:0; font-weight:500;">Thank you! We'll be in touch soon.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Bottom Features Bar -->
    <section style="background:var(--clr-dark); padding:40px 0;">
      <div style="max-width:1200px; margin:0 auto; padding:0 40px; display:grid; grid-template-columns:repeat(4,1fr); gap:32px;">
        <div v-for="feat in bottomFeatures" :key="feat.label" style="display:flex; align-items:center; gap:14px;">
          <div style="width:44px; height:44px; border-radius:50%; border:1px solid rgba(181,138,58,0.3); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
            <i :class="feat.icon" style="font-size:16px; color:var(--clr-gold);"></i>
          </div>
          <div>
            <p style="font-family:var(--font-body); font-size:13px; font-weight:600; color:#fff; margin:0 0 2px;">{{ feat.label }}</p>
            <p style="font-family:var(--font-body); font-size:12px; color:rgba(255,255,255,0.45); margin:0;">{{ feat.sub }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

function submitForm() {
  submitted.value = true
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}

const contactItems = [
  {
    icon: 'fas fa-building',
    label: 'Registered Office',
    value: '958 P (LGF), Sector 47, Gurugram, Haryana – 122018',
  },
  {
    icon: 'fas fa-briefcase',
    label: 'Corporate Office',
    value: '318, Vardhman Mall, Dwarka, Sector 19, Pocket-1, New Delhi – 110075',
  },
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Branch Office',
    value: 'Vasco, Goa',
  },
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: '<a href="mailto:info@drkitchen.com" style="color:var(--clr-accent); text-decoration:none;">info@drkitchen.com</a>',
  },
  {
    icon: 'fas fa-phone-alt',
    label: 'Phone',
    value: '<a href="tel:+917303269330" style="color:var(--clr-accent); text-decoration:none;">+91 7303269330</a>',
  },
  {
    icon: 'fas fa-globe',
    label: 'Website',
    value: '<a href="https://www.drkitchen.com" style="color:var(--clr-accent); text-decoration:none;">www.drkitchen.com</a>',
  },
  {
    icon: 'fas fa-id-card',
    label: 'CIN',
    value: 'U46101HR2025PTC137451',
  },
  {
    icon: 'fas fa-shield-alt',
    label: 'FSSAI License Number',
    value: '10826999000207',
  },
]

const bottomFeatures = [
  { icon: 'fas fa-leaf',     label: 'Pure & Natural',         sub: 'No preservatives, no artificial additives.' },
  { icon: 'fas fa-flask',    label: 'Scientifically Processed', sub: 'Modern technology to preserve natural oils.' },
  { icon: 'fas fa-award',    label: 'Premium Quality',        sub: 'Carefully sourced, rigorously tested.' },
  { icon: 'fas fa-seedling', label: 'Sourced with Care',      sub: 'From certified farms across India.' },
]
</script>
