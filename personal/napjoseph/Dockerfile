ARG NODE_VERSION

# install packages
FROM node:${NODE_VERSION}-alpine
# check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# install project dependencies
WORKDIR /monorepo
COPY . /monorepo/
RUN node ./common/scripts/install-run-rush.js install --no-link
RUN node ./common/scripts/install-run-rush.js link

# build the application
RUN node ./common/scripts/install-run-rush.js build --verbose --to napjoseph

# run the application
EXPOSE 3000
# next.js collects completely anonymous telemetry data about general usage.
# this disables that feature.
# see: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1
CMD ["node", "./common/scripts/install-run-rush.js", "napjoseph:start"]
