# DineFlow - Restaurant Table Booking System

A modern restaurant table booking system built with Node.js, Express, MongoDB, and modern web technologies.

## Features

- 🍽️ **Restaurant Management** - Add and manage restaurants with table configurations
- 📅 **Smart Booking System** - Real-time table availability checking
- 💳 **Payment Integration** - Stripe payment processing for deposits
- 📧 **Notifications** - Email and SMS notifications for bookings
- 📱 **Responsive Design** - Mobile-friendly booking interface
- 🔧 **Admin Panel** - Restaurant and booking management dashboard

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Payment**: Stripe API
- **Notifications**: Twilio (SMS), Nodemailer (Email)
- **Frontend**: HTML5, CSS3, JavaScript, Tailwind CSS
- **Deployment**: Vercel

## Prerequisites

- Node.js (v14 or higher)
- MongoDB database (local or cloud)
- Stripe account (for payments)
- Twilio account (for SMS)
- Gmail account (for email notifications)

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dineflow-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Server Configuration
   PORT=5000
   
   # MongoDB Connection
   MONGO_URI=mongodb://localhost:27017/dineflow
   # or for MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/dineflow
   
   # Stripe Configuration
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   
   # Twilio Configuration (SMS)
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   
   # Email Configuration (Gmail)
   EMAIL_USER=your_gmail@gmail.com
   EMAIL_PASS=your_gmail_app_password
   
   # Admin Email (optional)
   ADMIN_EMAIL=admin@yourdomain.com
   ```

4. **Start the server**
   ```bash
   npm start
   # or
   node server.js
   ```

5. **Access the application**
   - Main booking interface: http://localhost:5000
   - Admin panel: http://localhost:5000/admin

## API Endpoints

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id/tables/available` - Check table availability
- `POST /api/admin/restaurants` - Add new restaurant (Admin)

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/admin/bookings` - Get all bookings (Admin)
- `PUT /api/admin/bookings/:id/status` - Update booking status (Admin)

### Payments
- `POST /api/payments/process` - Process payment for booking

## Deployment to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Set Environment Variables in Vercel**
   - Go to your Vercel dashboard
   - Navigate to your project settings
   - Add all environment variables from your `.env` file

4. **Configure MongoDB Atlas**
   - Ensure your MongoDB Atlas cluster allows connections from Vercel's IP ranges
   - Update your `MONGO_URI` in Vercel environment variables

## Project Structure

```
dineflow-backend/
├── public/                 # Static files
│   ├── dineflow-prototype.html
│   └── admin.html
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (not in git)
├── .gitignore            # Git ignore rules
└── README.md             # Project documentation
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@dineflow.com or create an issue in the repository. 