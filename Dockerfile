FROM node:14-slim
RUN mkdir -p /home/images
WORKDIR /home/images
COPY . /home/images
CMD node serverDockerTime.js
EXPOSE 8080
