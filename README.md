# 🌟 Bright — All-in-One Hotel & Restaurant POS

A single-file HTML application combining POS, Kitchen CDP, Hotel Management, CRM, Reservations, Bar POS, Staff Reports, and Analytics.

---

## 🚀 How to Use

1. Download `bright-pos.html`
2. Open in any modern browser (Chrome recommended)
3. No server, no install — runs entirely offline

---

## ✅ Features

### 🍽️ Restaurant Floor
- Live floor plan with table status (Vacant / Occupied / Reserved / Dirty)
- **Table turn timer** — color dot (green <45m, amber 45–90m, red 90m+)
- **Waiter assignment** per table
- Click any table to open its order panel

### 📋 Course-Based Ordering (P1 / P2 / P3)
- Starters → Mains → Desserts
- Per-course fire buttons with green pulse animation
- **Course pacing** — auto-fire timer (10/15/20/25 min after prev course)
- **Modifiers** per item (milk type, ice level, cooking level, spice, sauce)
- **Seat numbers** per item (S1, S2, S3…)
- Dish notes per item
- Course notes

### 👤 Guest Seating & CRM Integration
- Assign guests to each cover from CRM
- **Allergy auto-banner** — pops up instantly when allergic guest seated
- Guest preferences shown under name on seating card
- Allergy warnings carry through to KDS tickets

### 🚫 Void & Comp
- 🚫 button per order item
- **Manager PIN** required (default: `1234`)
- Full audit trail

### 💳 Payment & Closing
- **Discount system**: Birthday 20%, Staff 30%, Complaint 15%, Full Comp
- **Bill split**: Full Bill / Equal Split / By Seat
- Payment methods: Cash / Card / Room Charge
- Room charge links to live hotel occupancy

### 🍹 Bar POS
- Separate bar tabs (B1, B2, B3, Bar Tab 1, Bar Tab 2)
- Full modifier support (ice levels, etc.)
- Active bar tickets display

### 🍳 Kitchen Display (KDS)
- Per-cover guest names on every ticket
- Allergy & avoid banners on tickets
- Dish notes, modifiers, seat labels printed on KDS
- Waiter name on each ticket
- Start / Done / Bump workflow
- **86 Board** — live count with +/− controls and force-86 button

### 🏨 Hotel Management (25 Rooms)
- Rooms 101–403 (Standard, Deluxe, Junior Suite, Suite, Penthouse)
- Check-in / Check-out / Cleaning / Vacancy status
- Booking source tracking (Booking.com, Expedia, Airbnb, Direct)
- Room folio balances
- One-click check-in modal

### 📅 Reservations
- Today / Tomorrow views
- OTA sync simulation (Booking.com, Expedia, Airbnb)
- **Seat button** — auto-finds vacant table and pre-fills covers
- Add new reservations via modal

### 👥 Guest CRM
- 10 guest profiles with nationality, phone, email
- Allergy & dietary tags (gluten, dairy, vegan, shellfish, etc.)
- Avoid list per guest
- Stay history & lifetime value
- Loyalty tiers (Gold, Platinum, VIP)

### 📊 Reports & Analytics
- Revenue by category, room type, booking source
- 7-day revenue bar chart
- Low stock alerts for near-86'd items
- **Day-end closing report** — opens printable window with payment breakdown + waiter performance

### 👔 Staff & Shift Report
- Per-waiter: tables, covers, sales, avg/cover, voids, comps
- Top seller badge
- Individual shift print per waiter
- Day-end close button

---

## 🔑 Default Manager PIN
```
1234
```
Used for: Void items

---

## 🗂️ File Structure

```
bright-pos.html    ← entire app (single file, ~111KB)
README.md          ← this file
```

---

## 🛣️ Roadmap

- [ ] Room service order tablet screen
- [ ] Guest-facing booking page (`guest.html`)
- [ ] Table transfer (T2 → T4)
- [ ] KOT print button
- [ ] Reservation → floor auto-highlight
- [ ] Comp tracking in day-end report

---

## 🏗️ Tech Stack

- Vanilla HTML / CSS / JavaScript — zero dependencies
- Google Fonts (DM Sans, DM Mono) via CDN
- Runs fully offline after first load

---

*Built with Bright — The hospitality OS for independent hotels & restaurants.*
