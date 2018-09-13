# build back
FROM microsoft/dotnet:2.1-sdk AS back-build
COPY ./back /app/src
RUN dotnet publish -c Release -o "/app/out" "/app/src/host/host.csproj"
RUN echo $(ls "/app/out")

# build front
FROM node:stretch as front-build
WORKDIR /app/src
COPY ./front/webapp/package*.json /app/src/
RUN npm install
COPY ./front/webapp/ /app/src
RUN npm run build -- --output-path=/app/out
RUN echo $(ls "/app/out")

# run app
FROM microsoft/dotnet:2.1-aspnetcore-runtime as run
WORKDIR /app
COPY --from=back-build /app/out/ ./
COPY --from=front-build /app/out/ ./wwwroot/
RUN echo $(ls "/app")
RUN echo $(ls "/app/wwwroot")
ENTRYPOINT [ "dotnet", "host.dll" ]