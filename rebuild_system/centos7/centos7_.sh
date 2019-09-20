mkdir -p /app/docker-registry/certs
# crt, key
cd /app/docker-registry
docker run -d \
  --restart=always \
  --name registry \
  -v "$(pwd)"/certs:/certs \
  -e REGISTRY_HTTP_ADDR=0.0.0.0:443 \
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/1_ssl.gupengblog.cn_bundle.crt \
  -e REGISTRY_HTTP_TLS_KEY=/certs/2_ssl.gupengblog.cn.key \
  -p 443:443 \
  registry:2

# docker push ssl.gupengblog.cn/$image
