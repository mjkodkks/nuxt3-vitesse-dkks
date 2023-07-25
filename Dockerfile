FROM node:18-alpine as builder

RUN apk update && apk upgrade
RUN npm i -g pnpm

WORKDIR /app
# copy over all files to the work directory
COPY . .

# install all depencies
RUN pnpm install

# build the project
RUN pnpm run build

# start final image
FROM node:18-alpine as runner

WORKDIR /app

# copy over build files from builder step
COPY --from=builder /app/.output  /app

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000 

CMD ["node", ".output/server/index.mjs"]