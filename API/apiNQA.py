from flask import Flask,jsonify
from flask import render_template
from flask import request
from mudel import answerKnowledg,answerRule
from flask import Flask, redirect, url_for, request
app = Flask(__name__)

@app.route('/dashboard')
def dashboard():
  
   return render_template('form.html')

@app.route('/dashboard/knowledge',methods = ['POST', 'GET'])
def qa():
   question=request.args.get('question')
   context=request.args.get('context')
   render_template('form.html')
   if request.method == 'POST':
      question = request.form['question']
      context = request.form['context']
      if not question or not context:
          return render_template('form.html' )
      return render_template('form.html',answerKnowledg_v=answerKnowledg(question,context) ) 
   else:
      
      return render_template('form.html')

@app.route('/dashboard/rule',methods = ['POST', 'GET'])
def qax():
   question=request.args.get('question')
 
   render_template('form.html')
   if request.method == 'POST':
      question = request.form['question']
    
      if not question :
          return render_template('form.html' )
      return render_template('form.html',answerKnowledg_v=answerRule(question) ) 
   else:
      
      return render_template('form.html')

if __name__ == '__main__':
   app.run(debug = True)
