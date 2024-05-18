const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://chat-nexus-2hmfglmvt-pulkit-1110s-projects.vercel.app",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
