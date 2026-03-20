# -------- Stage 1 : Build --------
FROM maven:3.9.6-eclipse-temurin-17 AS builder

WORKDIR /app

COPY pom.xml .
COPY . .

RUN mvn package -DskipTests


# -------- Stage 2 : Run --------
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/target/*.war /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
