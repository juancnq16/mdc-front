from flask import Flask, render_template, request, redirect, Response, make_response, jsonify
from flask_mysqldb import MySQL
import json
import auxiliarPaciente, auxiliarHce

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '3166238032'
app.config['MYSQL_HOST'] = 'localhost'
#app.config['MYSQL_PORT'] = 'ALGUNPUERTO'
app.config['MYSQL_DB'] = 'newschema'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'


mysql = MySQL(app)

@app.route('/consultaEnfermedad2', methods = ['POST'])
def consultaEnfermedad2():
    datos = str(request.get_data())[2:][:-1].split(",")
    consulta = datos[0]
    seleccion = datos[1]
    cur = mysql.connection.cursor()
    if seleccion=='codigo':
        #print("salió por codigo")
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
@app.route('/')
def index():
    return app.send_static_file('index.html')
@app.route('/<path:the_path>')
def all_other_routes(the_path):
    return app.send_static_file(the_path)
@app.route('/consultaPaises', methods = ['POST'])
def paises():
    cur = mysql.connection.cursor()
    sentencia = "select * from residencia;" 
    cur.execute(sentencia)  
    resultado = cur.fetchall()
    respuesta=""
    for obj in resultado:
        pais=""+obj['departamento']+". "+obj['ciudad']
        respuesta = respuesta+","+pais
    return respuesta
@app.route('/insertaPaciente', methods=['POST','GET'])
def insertaPaciente():
    cur = mysql.connection.cursor()
    index = auxiliarPaciente.getIndex(cur)
    cur.execute("select * from entidad")
    
    datos = str(request.get_data())[2:][:-1]
    datos= datos.replace("\\n", "")
    datos = datos.replace("\\t", "")
    datos = datos.replace("\\r", "")
    datos_json = json.loads(datos)
    idEps = auxiliarPaciente.getEpsCode(cur.fetchall(),datos_json['entidad_seguridad'].split(" ")[0] )
    datos_json["idpaciente"]=index
    datos_json['id_entidad']=str(idEps)
    temp = auxiliarPaciente.unirCadena(datos_json['entidad_seguridad'].split(" ")[1:])
    datos_json['entidad_seguridad']=temp
    sentencia=auxiliarPaciente.registraPaciente(datos_json)
    cur.execute(sentencia)
    mysql.connection.commit()
    return "all good"
@app.route('/test', methods=['POST','GET'])
def prueba():
    pass 
@app.route('/consultaEps', methods=['POST'])
def consultaEps():
    cur = mysql.connection.cursor()
    sentencia = "select * from entidad;"
    cur.execute(sentencia)
    resultado = cur.fetchall()
    respuesta=""
    for obj in resultado:
        eps=""+obj['Codigo']+" "+obj['Nombre']
        respuesta = respuesta+","+eps
    return respuesta
@app.route('/addEps', methods=['POST'])
def addEps():
    cur = mysql.connection.cursor()
    #todo
    datos = str(request.get_data())[2:][:-1]
    datos= datos.replace("\\n", "")
    datos = datos.replace("\\t", "")
    print(datos)
    datos_json = json.loads(datos)
    idEntidad = auxiliarPaciente.getIndexEps(cur)
    sentencia = "insert into entidad values (idEntidad, 'Codigo', 'Nombre')"
    sentencia = sentencia.replace('Codigo', datos_json['Codigo'])
    sentencia = sentencia.replace('Nombre', datos_json['Nombre'])
    sentencia = sentencia.replace('idEntidad', idEntidad)
    cur.execute(sentencia)
    mysql.connection.commit()
    return"clear", 200
@app.route('/pruebaEps', methods=['POST'])
def pruebaEps():
    cur = mysql.connection.cursor()
    cur.execute("select * from entidad")
    datos = str(request.get_data())[2:][:-1]
    datos_json = json.loads(datos)
    idEps = auxiliarPaciente.getEpsCode(cur.fetchall(),datos_json['entidad_seguridad'].split(" ")[0] )
    print(idEps)
    return "melo"
@app.route('/consultaPaciente', methods=['POST'])
def consultaPaciente():

    cur = mysql.connection.cursor()
    datos = str(request.get_data())[2:][:-1]
    print("datos: ",request.get_data())
    datos= datos.replace("\\n", "")
    datos = datos.replace("\\t", "")
    datos_json = json.loads(datos)
    sentencia = "select * from paciente where numeroDoc='?';"
    sentencia = sentencia.replace('?',datos_json['numeroDoc'])
    cur.execute(sentencia)
    resultados = cur.fetchall()[0]
    resultados['nacimiento']=str(resultados['nacimiento'])
    envio = json.dumps(resultados)
    print(envio)
    return envio
@app.route('/enviaHce', methods = ['POST'])
def enviaHce():
    cur = mysql.connection.cursor()
    datos = str(request.get_data())[2:][:-1]
    datos = json.loads(str(request.get_data())[2:][:-1])
    print(datos)
    auxiliarHce.insertaHce(cur, datos)
if __name__ == '__main__':
    app.run(debug=True)