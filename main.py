# main.py
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse 
from fastapi.staticfiles import StaticFiles

app = FastAPI()
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    context = {"request": request, "message": "Hello, FastAPI!"}
    return templates.TemplateResponse("home.html", {"request": request, **context})

@app.get("/services", response_class=HTMLResponse)
async def services(request: Request):
    context = {"request": request, "message": "Hello, FastAPI!"}
    return templates.TemplateResponse("services.html", {"request": request, **context})

@app.get("/portfolio", response_class=HTMLResponse)
async def portfolio(request: Request):
    context = {"request": request, "message": "Hello, FastAPI!"}
    return templates.TemplateResponse("portfolio.html", {"request": request, **context})

@app.get("/about", response_class=HTMLResponse)
async def about(request: Request):
    context = {"request": request, "message": "Hello, FastAPI!"}
    return templates.TemplateResponse("about.html", {"request": request, **context})
# Mount the static files directory to /static
app.mount("/static", StaticFiles(directory="static"), name="static")