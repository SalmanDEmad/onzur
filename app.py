from flask import Flask, render_template

app = Flask(__name__)

# Set TEMPLATES_AUTO_RELOAD to True
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['DEBUG'] = True

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/services")
def services():
    return render_template("services.html")

@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(debug=True)
