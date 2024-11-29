FROM 'node:20-alpine'

WORKDIR /app
RUN npm install -g pnpm

COPY . .

CMD ["sh", "-c", "pnpm install && pnpm dev"]