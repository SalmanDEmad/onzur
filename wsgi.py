from main import app
from a2wsgi import WSGIMiddleware

application = WSGIMiddleware(app)
