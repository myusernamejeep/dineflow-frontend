# DineFlow - Restaurant Table Booking System

A modern, full-stack restaurant table booking system built with Node.js, Express, MongoDB, and modern web technologies. DineFlow provides a seamless booking experience for customers and comprehensive management tools for restaurant owners.

## 🍽️ Features

### Customer Features
- **Restaurant Discovery** - Browse available restaurants with detailed information
- **Smart Table Booking** - Real-time table availability checking with capacity validation
- **Flexible Booking Options** - Choose date, time, and number of guests
- **Secure Payment Processing** - Stripe integration for deposit payments with 3D Secure support
- **Booking Confirmation** - Email and SMS notifications with booking details
- **Mobile-Responsive Design** - Optimized for all devices with Tailwind CSS
- **Double-Booking Prevention** - Real-time conflict detection to prevent overbooking

### Admin Features
- **Restaurant Management** - Add and manage restaurant profiles with table configurations
- **Table Configuration** - Set up table layouts, capacities, and types (window, center, etc.)
- **Booking Dashboard** - View and manage all reservations with status tracking
- **Status Management** - Update booking and payment statuses (pending, confirmed, paid)
- **Real-time Monitoring** - Track booking trends and availability
- **Deposit Management** - Configure deposit amounts per person per restaurant

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Payment Processing**: Stripe API with Thai Baht (THB) support
- **Notifications**: Twilio (SMS), Nodemailer (Email with Gmail)
- **Deployment**: Vercel with serverless functions
- **CORS**: Cross-origin resource sharing enabled

### Frontend
- **UI Framework**: Tailwind CSS with responsive design
- **Styling**: Custom CSS with modern animations and transitions
- **JavaScript**: Vanilla JS with modern ES6+ features
- **Icons**: Heroicons and custom SVG icons
- **Font**: Inter font family for clean typography

## 📁 Project Structure

```
PROJECT/
├── dineflow-backend/          # Backend server and API
│   ├── public/               # Static files and frontend
│   │   ├── index.html        # Main booking interface (Thai language)
│   │   ├── admin.html        # Admin dashboard
│   │   └── payment-success.html
│   ├── server.js             # Express server with all API routes
│   ├── package.json          # Backend dependencies
│   ├── vercel.json           # Vercel deployment config
│   ├── clearRestaurants.js   # Utility script for data management
│   └── README.md             # Backend documentation
├── dineflow-frontend/        # Frontend application (separate deployment)
│   ├── public/               # Frontend static files
│   ├── server.js             # Frontend server
│   ├── package.json          # Frontend dependencies
│   └── vercel.json           # Frontend deployment config
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database (local or MongoDB Atlas)
- Stripe account (for payment processing)
- Twilio account (for SMS notifications)
- Gmail account (for email notifications)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd PROJECT
   ```

2. **Set up the Backend**
   ```bash
   cd dineflow-backend
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in `dineflow-backend/`:
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
   
   # Frontend Domain (for payment redirects)
   FRONTEND_DOMAIN=http://localhost:5000
   ```

4. **Start the Backend Server**
   ```bash
   npm start
   # or
   node server.js
   ```

5. **Set up the Frontend (Optional)**
   ```bash
   cd ../dineflow-frontend
   npm install
   npm start
   ```

6. **Access the Application**
   - Main booking interface: http://localhost:5000
   - Admin panel: http://localhost:5000/admin
   - Payment success page: http://localhost:5000/payment-success
   - Test page: http://localhost:5000/test
   - Frontend (if running separately): http://localhost:3000

## 📚 API Documentation

### Restaurant Endpoints
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id/tables/available` - Check table availability for specific date/time/guests
- `POST /api/admin/restaurants` - Add new restaurant (Admin only)

### Booking Endpoints
- `POST /api/bookings` - Create new booking (creates pending booking)
- `GET /api/admin/bookings` - Get all bookings (Admin only)
- `PUT /api/admin/bookings/:id/status` - Update booking status (Admin only)

### Payment Endpoints
- `POST /api/payments/process` - Process payment for booking (Stripe integration)

### Static Pages
- `GET /` - Main booking interface
- `GET /admin` - Admin dashboard
- `GET /payment-success` - Payment success page
- `GET /test` - Test page

## 🔄 Booking Flow

1. **Restaurant Selection** - Customer browses available restaurants
2. **Table Availability Check** - System checks real-time availability for selected date/time/guests
3. **Booking Creation** - Customer fills booking form and creates pending booking
4. **Payment Processing** - Customer pays deposit via Stripe
5. **Confirmation** - System sends email and SMS confirmations
6. **Status Update** - Booking status changes from 'pending' to 'confirmed'

## 🌐 Deployment

### Backend Deployment (Vercel)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy Backend**
   ```bash
   cd dineflow-backend
   vercel
   ```

3. **Configure Environment Variables**
   - Go to your Vercel dashboard
   - Navigate to project settings
   - Add all environment variables from your `.env` file
   - Update `FRONTEND_DOMAIN` to your production URL

### Frontend Deployment (Vercel)

1. **Deploy Frontend**
   ```bash
   cd dineflow-frontend
   vercel
   ```

2. **Update API URLs**
   - Update the API base URL in frontend code to point to your deployed backend

## 🔧 Configuration

### MongoDB Setup
- For local development: Install MongoDB locally
- For production: Use MongoDB Atlas cloud database
- Ensure proper network access and authentication
- Database automatically seeds with sample data on first run

### Stripe Setup
1. Create a Stripe account
2. Get your API keys from the Stripe dashboard
3. Add keys to environment variables
4. Configure webhook endpoints (optional)
5. Set up Thai Baht (THB) currency support

### Twilio Setup
1. Create a Twilio account
2. Get your Account SID and Auth Token
3. Purchase a phone number for SMS
4. Add credentials to environment variables
5. Ensure sufficient credits for SMS sending

### Email Setup (Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password in your environment variables
4. Configure Gmail SMTP settings

## 🎨 Customization

### Styling
- Modify Tailwind CSS classes in HTML files
- Update custom CSS in `<style>` tags
- Replace images and icons as needed
- Customize color schemes and typography

### Business Logic
- Update booking rules in server-side code
- Modify payment amounts and deposit requirements
- Customize notification templates
- Adjust table capacity and availability logic

### Database Schema
- Extend restaurant and booking models
- Add new fields for additional features
- Modify validation rules
- Update seed data for testing

## 🧪 Testing

### Manual Testing
1. Test the complete booking flow end-to-end
2. Verify payment processing with Stripe test cards
3. Check email and SMS notifications
4. Test admin panel functionality
5. Verify double-booking prevention

### API Testing
Use tools like Postman or curl to test API endpoints:
```bash
# Get all restaurants
curl http://localhost:5000/api/restaurants

# Check table availability
curl "http://localhost:5000/api/restaurants/RESTAURANT_ID/tables/available?date=2024-01-15&time=19:00&guests=4"

# Create a booking
curl -X POST http://localhost:5000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "restaurantId": "RESTAURANT_ID",
    "customerName": "John Doe",
    "customerEmail": "john@example.com",
    "customerPhone": "0812345678",
    "bookingDate": "2024-01-15",
    "bookingTime": "19:00",
    "numGuests": 4,
    "tableId": "T01"
  }'

# Process payment
curl -X POST http://localhost:5000/api/payments/process \
  -H "Content-Type: application/json" \
  -d '{
    "bookingId": "BOOKING_ID",
    "paymentMethodId": "pm_card_visa",
    "amount": 800
  }'
```

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check your `MONGO_URI` in environment variables
   - Ensure MongoDB is running (local) or accessible (Atlas)
   - Verify network access and authentication

2. **Payment Processing Fails**
   - Verify Stripe API keys are correct
   - Check Stripe dashboard for error logs
   - Ensure test mode is enabled for development
   - Verify currency is set to THB (Thai Baht)

3. **Email Notifications Not Working**
   - Verify Gmail credentials
   - Check if App Password is correctly set
   - Ensure 2FA is enabled on Gmail account
   - Check Gmail SMTP settings

4. **SMS Notifications Not Working**
   - Verify Twilio credentials
   - Check if phone number is purchased and active
   - Ensure sufficient Twilio credits
   - Verify phone number format

5. **Double-Booking Issues**
   - Check booking status logic in availability endpoint
   - Verify table capacity validation
   - Test concurrent booking scenarios

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the backend [README.md](dineflow-backend/README.md) for detailed backend documentation
- **Issues**: Create an issue in the repository
- **Email**: support@dineflow.com

## 🔮 Roadmap

- [ ] Multi-language support (currently Thai only)
- [ ] Advanced analytics dashboard
- [ ] Integration with popular restaurant POS systems
- [ ] Mobile app development
- [ ] Advanced booking features (special requests, dietary restrictions)
- [ ] Customer review and rating system
- [ ] Loyalty program integration
- [ ] Real-time table status updates
- [ ] Integration with Google Calendar
- [ ] Advanced reporting and analytics

---

**DineFlow** - Making restaurant reservations simple and efficient! 🍽️✨ 