# gunicorn main:app --workers 16 --worker-class uvicorn.workers.UvicornWorker --bind 89.58.50.113:80

# gunicorn main:app --workers 16 --worker-class uvicorn.workers.UvicornWorker --bind 127.0.0.1:5000

gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind 127.0.0.1:5000

fuer deploy auf 16 hoch!!! 2 x 8 kerne