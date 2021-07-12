from flask import Flask,jsonify

app=Flask(__name__)

@app.route('/api/login',methods=['POST'])
def home():
    return  jsonify('user done')

if __name__ == '__main__':
    app.run(debug=True)