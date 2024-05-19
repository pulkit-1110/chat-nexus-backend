const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://chat-nexus-wine.vercel.app",
    "https://main--luxury-boba-dbbabf.netlify.app",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
