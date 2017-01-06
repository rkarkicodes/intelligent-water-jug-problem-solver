from flask import Flask
from flask import request
from flask import render_template,jsonify
from model import search,calculate,valid_goals

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/result', methods=['GET','POST'])
def result():

    juga=int(request.json['jug_a'])
    jugb = int(request.json['jug_b'])
    goal = int(request.json['goal'])

    if juga<jugb:
        juga,jugb=jugb,juga

    result=search.Searches(int(juga),int(jugb),int(goal)).breadth_first()

    return jsonify(result=result)



if __name__ == '__main__':
    app.run(debug=True)
