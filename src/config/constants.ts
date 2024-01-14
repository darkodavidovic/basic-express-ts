
const constants = {
	IS_DEVELOPMENT: process.env.NODE_ENV === "development",
	PORT: Number(process.env.PORT) || 9000,
	REDIS_URL: process.env.REDIS_URL || "redis://default@localhost:6379",
	DEFAULT_GRAPHQL_BASE_URL: process.env.DEFAULT_GRAPHQL_BASE_URL || "http://localhost:9000",
	DEFAULT_GRAPHQL_PATH: process.env.DEFAULT_GRAPHQL_PATH || "/blackbox/api/graphql",
	JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "erhjebrgjhetbgethj",
	JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "rkjjrebgjhbgj4hgb",
	JWT_ACCESS_EXPIRATION: process.env.JWT_ACCESS_EXPIRATION || "365 days",
	JWT_REFRESH_EXPIRATION: process.env.JWT_REFRESH_EXPIRATION || "365 days",
};

export default constants;
