from flask import Flask, render_template, request, redirect, Response, make_response, jsonify
from flask_mysqldb import MySQL
import json

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '3166238032'
app.config['MYSQL_HOST'] = 'localhost'
#app.config['MYSQL_PORT'] = 'ALGUNPUERTO'
app.config['MYSQL_DB'] = 'clinica'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/consultaEnfermedad2', methods = ['POST'])
def consultaEnfermedad2():
    datos = str(request.get_data())[2:][:-1].split(",")
    consulta = datos[0]
    seleccion = datos[1]
    cur = mysql.connection.cursor()
    if seleccion=='codigo':
        print("salió por codigo")
        sentencia = "select clave, diagnostico from enfermedad where clave like '%?%';"
        sentencia = sentencia.replace("?",consulta)
    else:
        print("salió por nombre")
        sentencia = "select clave, diagnostico from enfermedad where diagnostico like '%?%';"
        sentencia = sentencia.replace("?",consulta)
    cur.execute(sentencia)  
    resultado = cur.fetchall()  
    respuesta = ""
    for obj in resultado:
        enfermedad=""+obj['clave']+" "+obj['diagnostico']+","
        respuesta = respuesta+enfermedad
    return respuesta
@app.route('/index')
@app.route('/hce')
def index():
    return app.send_static_file('index.html')
@app.route('/<path:the_path>')
def all_other_routes(the_path):
    return app.send_static_file(the_path)
if __name__ == '__main__':
    app.run(debug=True)