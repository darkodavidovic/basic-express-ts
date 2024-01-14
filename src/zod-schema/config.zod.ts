import { z } from 'zod';

export const ZConfig = z.object({
	url: z.string().refine(value => value.startsWith('http'), {
		message: 'URL must start with "http" or "https"',
	}),
	token: z.string().min(30).refine(value => value.startsWith('Bearer') || value.startsWith('bearer'), {
		message: "Token string needs to start with 'Bearer' or 'bearer'. Eg: 'Bearer eyJhbGciOi...' or 'bearer eyJhbGciOi...'",
	}),
});
