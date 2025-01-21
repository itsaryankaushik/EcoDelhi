# CleanAlley

CleanAlley is a community-driven waste management dashboard designed to help monitor and improve waste management practices in Delhi. The application provides insights into waste distribution, recycling rates, community participation, and more.

## Features

- **Dashboard**: View key metrics and trends related to waste management.
- **Community Hub**: Engage with the community, report issues, and access educational resources.
- **Hotspot Monitoring**: Track waste management hotspots and their performance.
- **User Authentication**: Register and log in to access personalized features.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Recharts, React-Leaflet
- **Backend**: Node.js, Express, PostgreSQL, Supabase
- **Build Tool**: Vite

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/cleanalley.git
    cd cleanalley
    ```

2. **Install dependencies**:

    ```bash
    npm install
    cd backend
    npm install
    ```

3. **Set up environment variables**:
    Create a [.env](http://_vscodecontentref_/0) file in the [backend](http://_vscodecontentref_/1) directory with the following content:

    ```env
    PORT=5000
    DB_USER=your_db_user
    DB_HOST=your_db_host
    DB_NAME=your_db_name
    DB_PASSWORD=your_db_password
    DB_PORT=5432
    SUPABASE_URL=your_supabase_url
    SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4. **Run the backend server**:

    ```bash
    cd backend
    npm run dev
    ```

5. **Run the frontend development server**:

    ```bash
    cd ..
    npm run dev
    ```

## Usage

- **Dashboard**: Access the dashboard to view waste management metrics and trends.
- **Community Hub**: Engage with the community, report issues, and access educational resources.
- **Hotspot Monitoring**: Track waste management hotspots and their performance.
- **User Authentication**: Register and log in to access personalized features.

## Project Structure

```filetree
cleanalley
├── backend
│   ├── src
│   │   ├── controllers.ts
│   │   ├── index.ts
│   │   ├── middleware.ts
│   │   ├── models.ts
│   │   └── routes.ts
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
├── src
│   ├── components
│   │   ├── charts
│   │   │   ├── BarGraph.tsx
│   │   │   └── PieChart.tsx
│   │   ├── maps
│   │   │   └── WasteHeatmap.tsx
│   │   ├── HotspotCard.tsx
│   │   ├── Navbar.tsx
│   │   ├── Navbar2.tsx
│   │   └── StatCard.tsx
│   ├── pages
│   │   ├── Community.tsx
│   │   ├── Dashboard.tsx
│   │   ├── FAQ.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   └── Profile.tsx
│   ├── lib
│   │   └── supabase.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── types.ts
│   ├── vite-env.d.ts
│   └── vite.config.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.node.json

```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
