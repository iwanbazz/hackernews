<h2 align="center">Hacker News React</h2>

This is simple react apps for test on Sampingan for role Senior Frontend Engineer

- React - UI Framework
- Utils function native js date converter
- React Hook - useState & useEffect
- Axios - API fetching
- Bootstrap - CSS framework
- react-content-loader - SVG component to create placeholder loading

## Set Up

### Using Docker

Make sure you have setup docker & docker-compose on your environment.

Kindly run this command :

```bash
docker-compose up
```

If it is done checking, kindly run :

```bash
docker-compose down
```

### Using Podman

Make sure you have setup [podman](https://podman.io/getting-started/installation), [buildah](https://github.com/containers/buildah/blob/master/install.md), & [podman-compose](https://github.com/containers/podman-compose).
And have installed `make` on your linux/mac environment.

Kindly run this command :

```bash
make podman_run
```

If it is done checking, kindly run :

```bash
make podman_stop
```
