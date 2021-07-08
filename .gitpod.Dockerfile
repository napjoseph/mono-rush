FROM gitpod/workspace-full

# update dependencies
USER root
RUN apt-get update

# setup required node version
USER gitpod
COPY .nvmrc $HOME
RUN bash -c "source $HOME/.nvm/nvm.sh && nvm install && nvm use"

# setup required rush version
# when rush.json version is updated, update this as well
USER gitpod
RUN npm install -g @microsoft/rush@5.47.0

# copy files to workspace
WORKDIR /workspace
COPY --chown=gitpod:gitpod . /workspace/

# install dependencies in the common folder
# but don't automatically do "rush link"
USER gitpod
RUN rush install --no-link

# run "rush link" explicitly
# so your CI system can measure it as a separate step
USER gitpod
RUN rush link

# build the repo
USER gitpod
RUN rush build
