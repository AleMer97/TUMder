gunicorn main:app --workers 16 --worker-class uvicorn.workers.UvicornWorker --bind 89.58.50.113:80

gunicorn main:app --workers 16 --worker-class uvicorn.workers.UvicornWorker --bind 127.0.0.1:5000