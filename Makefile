podman_run:
	buildah bud -t hackernews:iwan .
	podman-compose -f podman-compose.yml up

docker_run:
	docker build -t hackernews:iwan .
	docker run -p 3000:3000 --name hackernewsIwan hackernews:iwan

podman_stop:
	podman-compose -f podman-compose.yml down
