./mvnw clean package
docker build -f Dockerfile -t spring-boot-docker-demo .
docker run -p 8080:8080 spring-boot-docker-demo