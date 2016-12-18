from flask import Flask
from flask import request
from flask import render_template,jsonify
from model import search,calculate,valid_goals

app = Flask(__name__)

@app.route('/')
def index():

    return render_template('index.html')


@app.route('/hello',methods=['POST'])
def hello():
    return render_template('hello.html')



def result(req,*args):

    if req=="post":
        res=args
    else:
        return res


@app.route('/', methods=['POST','GET'])
def my_form_post():

    path=search.Searches(int(juga),int(jugb),int(goal))

    # print [juga,jugb,goal]
    print "index"
    print request.method
    valid_goals.result=jsonify(path.breadth_first())
    return jsonify(result="path.breadth_first()")

@app.route('/this', methods=['GET','POST'])
def my_post():
    print "ls"


    # print dir(request)
    # print request.get_data()
    # print request.values
    juga=int(request.json['jug_a'])
    jugb = int(request.json['jug_b'])
    goal = int(request.json['goal'])

    if juga<jugb:
        juga,jugb=jugb,juga

    result=search.Searches(int(juga),int(jugb),int(goal)).breadth_first()

    return jsonify(result=result)



if __name__ == '__main__':
    app.run(debug=True)
