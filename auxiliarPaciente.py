
def getIndex(cursor):
    sentencia = "select idPaciente from paciente order by idPaciente desc limit 1;"
    cursor.execute(sentencia)
    resultado = cursor.fetchall()
    return str(int(resultado[0]['idPaciente'])+1)
def getIndexEps(cursor):
    sentencia = "select idEntidad from entidad order by idEntidad desc limit 1;"
    cursor.execute(sentencia)
    resultado = cursor.fetchall()
    print(resultado[0]['idEntidad']) 
    return str(int(resultado[0]['idEntidad'])+1)
def registraPaciente(datos):
    sentencia = """
        insert into paciente values ( idpaciente,'nombre','apellido','tipo_documento',
        'numero_documento','nacimiento_fecha','nacimiento_lugar','sexo','ciudad',
        'direccion', 'telefono','email','entidad_seguridad', 'tipo_afiliacion',
         'tipo_usuario','sangre','zona','estado_civil',id_entidad,'plan','rh');
    """
    sentencia = sentencia.replace('idpaciente', datos['idpaciente'])
    sentencia = sentencia.replace('nombre', datos['nombre'])
    sentencia = sentencia.replace('apellido',datos['apellido'])
    sentencia = sentencia.replace('tipo_documento', datos['tipo_documento'])
    sentencia = sentencia.replace('numero_documento', datos['numero_documento'])
    sentencia = sentencia.replace('nacimiento_fecha', datos['nacimiento_fecha'])
    sentencia = sentencia.replace('nacimiento_lugar', datos['nacimiento_lugar'])
    sentencia = sentencia.replace('sexo', datos['sexo'])
    sentencia = sentencia.replace('ciudad', datos['ciudad'])
    sentencia = sentencia.replace('direccion', datos['direccion'])
    sentencia = sentencia.replace('telefono', datos['telefono'])
    sentencia = sentencia.replace('email', datos['email'])
    sentencia = sentencia.replace('entidad_seguridad', datos['entidad_seguridad'])
    sentencia = sentencia.replace('tipo_afiliacion', datos['tipo_afiliacion'])
    sentencia = sentencia.replace('tipo_usuario', datos['tipo_usuario'])
    sentencia = sentencia.replace('sangre', datos['grupo_sanguineo'])
    sentencia = sentencia.replace('zona', datos['zona'])
    sentencia = sentencia.replace('estado_civil', datos['estado_civil'])
    sentencia = sentencia.replace('id_entidad', datos['id_entidad'])
    sentencia = sentencia.replace('rh', datos['rh'])
    sentencia = sentencia.replace('plan',switch(datos['plan_beneficios']))
    return sentencia

def consultaPaciente(idPaciente):
    pass
def consultaEps(cursor):
    sentencia = "select * from entidad;"
    cursor.execute(sentencia)
    resultados = cursor.fetchall()
    print(resultados)
def getEpsCode(resultados, consultado):
    print(type(resultados[0]['idEntidad']))
    for resultado in resultados:
        if resultado['Codigo']==consultado:
             return resultado['idEntidad']
    return 0
def unirCadena(arreglo):
    cadena = ""
    for elemento in arreglo:
        cadena = cadena + elemento + " "
    return cadena
def switch(argument):
    print(argument)
    diccionario = {
        '1':'Ninguno',
        '2':'Plan de atención básica en salud. PAB.',
        '3':'Plan obligatorio de salud del regimen contributivo. POS',
        '4':'Plan obligatorio de salud del regimen subsidiado. POS-S',
        '5':'Atención en accidentes de transito y eventos catastroficos. SOAT',
        '6':'Atención inicial de urgencias',
        '7':'Planes Complementarios En Salud (Pacs)',
        '8':'Atención Materno-infantil'
    }
    return diccionario[argument]