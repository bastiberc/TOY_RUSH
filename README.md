

#Toy Rush
#BERCASIO, SEBASTIEN JAY M.
#BSIT 3-1

#Tech Stack:

* Backend: Laravel (PHP) – used for routing, controllers, migrations, and APIs.
* Frontend: Vue 3 (Single File Components) with Vite for development tooling.
* Styling: Tailwind CSS (configured with `tailwind.config.js`) and custom CSS located in `resources/css/app.css`.
* Build Tools: Node.js and npm (with Vite/ESBuild).
* Dependency Management: Composer (for PHP dependencies).
* Testing: PHPUnit (configured with `phpunit.xml`).

---

### Quick Setup (Development Environment):

1. **Install PHP Dependencies:**

   ```powershell
   composer install
   ```

2. **Copy the Environment File and Generate the App Key:**

   ```powershell
   copy .env.example .env
   php artisan key:generate
   ```

3. **Configure Database Credentials**:
   Edit the `.env` file to set up your database connection. If you're not using a database-backed auction system, you can skip the migrations.

4. **Install Node Dependencies:**

   ```powershell
   npm install
   ```

5. **Start the Frontend Development Server (Vite):**

   ```powershell
   npm run dev
   ```

   This will launch the dev server, typically available at `http://localhost:5173`.

6. **Start the Laravel Backend Server:**

   ```powershell
   php artisan serve
   ```

   The backend will run on `http://127.0.0.1:8000` by default. If using Vite with Laravel, ensure that your app is configured correctly (sometimes Vite is integrated or proxies requests).

7. **(Optional) Run Migrations:**

   ```powershell
   php artisan migrate
   ```

Once the servers are running, open your browser and navigate to the URL shown by your development server (usually `http://127.0.0.1:8000`).

---

### Building for Production:

1. **Build Frontend Assets:**

   ```powershell
   npm run build
   ```

2. **Clear and Cache Laravel Configurations (optional):**

   ```powershell
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

3. **Deploy to Production**:
   Upload the contents of the `public/` folder along with the compiled assets to your production server.

