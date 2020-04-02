FROM node:12-alpine
LABEL maintainer="Grigor Mouradyan <grigor.mouradyan@gmail.com>"
EXPOSE 3000

RUN ["addgroup", "-S", "music"]
RUN ["adduser", "-S", "-D", "-h", "/home/music", "-G", "music", "music"]

USER music
WORKDIR /home/music

COPY --chown=music:music ./package-lock.json ./package.json ./
RUN ["npm", "ci", "--only=prod"]
COPY --chown=music:music ./src ./src
COPY --chown=music:music ./bin ./bin

ENTRYPOINT ["/usr/local/bin/node"]
CMD ["./bin/www"]
