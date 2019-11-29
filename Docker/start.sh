docker build -t merang_db .
docker run -d --rm -p 5555:5432 --name merang_db merang_db
