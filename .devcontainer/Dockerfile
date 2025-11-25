FROM node:24-alpine
RUN apk add --no-cache \
  git \
  openssh \
  ripgrep \
  tini
ENTRYPOINT ["/sbin/tini", "--"]
RUN mkdir /app && chown node:node app

# Run as uid=1000(node)
USER 1000
WORKDIR /app
RUN mkdir -p /app/node_modules
